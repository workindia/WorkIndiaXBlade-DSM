/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */
// Figma plugin types are provided at runtime, so we disable type safety checks for Figma API calls
import { emit, on, showUI } from '@create-figma-plugin/utilities';

export interface IconData {
  name: string;
  componentName: string;
  svgPath: string;
  viewBox: string;
}

export interface ExportIconsRequest {
  name: 'EXPORT_ICONS';
  handler: () => void;
}

export interface ExportIconsResponse {
  name: 'EXPORT_ICONS_RESPONSE';
  handler: (data: { icons: IconData[]; error?: string }) => void;
}

export interface ShowNotification {
  name: 'SHOW_NOTIFICATION';
  handler: (data: { message: string; error?: boolean }) => void;
}

/**
 * Decodes a Uint8Array to a string
 * TextDecoder is not available in Figma plugin main thread, so we use a manual approach
 * @param bytes - The bytes to decode
 * @returns The decoded string
 */
function decodeBytes(bytes: Uint8Array): string {
  let result = '';
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < bytes.length; i++) {
    result += String.fromCharCode(bytes[i] ?? 0);
  }
  return result;
}

/**
 * Checks if the node is an icon frame or component
 * @param node - The node to check
 * @returns True if the node is an icon frame/component, false otherwise
 */
function isIconFrame(node: SceneNode): boolean {
  // Accept both FRAME and COMPONENT types (icons can be either)
  const nodeType = node.type;
  if (nodeType !== 'FRAME' && nodeType !== 'COMPONENT') {
    console.log(
      `Node "${String(node.name)}" is not a FRAME or COMPONENT, it's a ${String(nodeType)}`,
    );
    return false;
  }

  // Check if frame/component has reasonable icon dimensions
  // Accept various sizes like 24x24, 35x24, 24x35, etc.
  // Minimum size: 16x16, Maximum size: 48x48
  const MIN_SIZE = 16;
  const MAX_SIZE = 48;
  // Type assertion needed because Figma types are provided at runtime
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const frameNode = node as any;
  const nodeWidth = frameNode.width;
  const nodeHeight = frameNode.height;
  const MIN_DIMENSION = Math.min(nodeWidth, nodeHeight);
  const MAX_DIMENSION = Math.max(nodeWidth, nodeHeight);

  const isValidSize =
    MIN_DIMENSION >= MIN_SIZE &&
    MIN_DIMENSION <= MAX_SIZE &&
    MAX_DIMENSION >= MIN_SIZE &&
    MAX_DIMENSION <= MAX_SIZE;

  if (!isValidSize) {
    console.log(
      `${String(nodeType)} "${String(node.name)}" size is ${String(nodeWidth)}x${String(nodeHeight)}, which is outside the acceptable range (${String(MIN_SIZE)}x${String(MIN_SIZE)} to ${String(MAX_SIZE)}x${String(MAX_SIZE)})`,
    );
  } else {
    console.log(
      `${String(nodeType)} "${String(node.name)}" size is ${String(nodeWidth)}x${String(nodeHeight)} - accepted`,
    );
  }

  return isValidSize;
}

/**
 * Extracts the vector path from the node
 * @param node - The node to extract the vector path from
 * @param depth - The depth of the node in the tree (for logging purposes)
 * @returns The vector path as a string, or null if the node is not a vector
 */
async function extractVectorPath(
  node: SceneNode,
  depth = 0,
): Promise<string | null> {
  // Check if this node can be exported as SVG
  const exportableTypes = [
    'VECTOR',
    'BOOLEAN_OPERATION',
    'STAR',
    'POLYGON',
    'ELLIPSE',
    'RECTANGLE',
    'LINE',
  ];

  const nodeType = node.type;
  if (exportableTypes.includes(nodeType)) {
    try {
      // Export as SVG to get the path data
      // Type assertion needed because Figma types are provided at runtime
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const exportableNode = node as any;
      const bytes = await exportableNode.exportAsync({ format: 'SVG' });
      const svgString = decodeBytes(bytes);
      console.log(
        `Found exportable node "${String(node.name)}" (${String(nodeType)}) at depth ${String(depth)}`,
      );
      return svgString;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error(
        `Error exporting ${String(nodeType)} "${String(node.name)}":`,
        errorMessage,
      );
      return null;
    }
  }

  // If not directly exportable, check children
  // Type assertion needed because Figma types are provided at runtime
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenNode = node as any;
  if ('children' in node && childrenNode.children.length > 0) {
    const children = childrenNode.children;
    console.log(
      `Node "${String(node.name)}" (${String(nodeType)}) has ${String(children.length)} children, checking...`,
    );
    for (const child of children) {
      const path = await extractVectorPath(child, depth + 1);
      if (path) {
        return path;
      }
    }
  } else {
    console.log(
      `Node "${String(node.name)}" (${String(nodeType)}) has no children and is not exportable`,
    );
  }

  return null;
}

/**
 * Converts a rect element to path data
 * @param x - X position
 * @param y - Y position
 * @param width - Width
 * @param height - Height
 * @param rx - X radius for rounded corners
 * @param ry - Y radius for rounded corners
 * @returns Path data string
 */
function rectToPath(
  x: number,
  y: number,
  width: number,
  height: number,
  rx = 0,
  ry = 0,
): string {
  // Clamp rx and ry to half the width/height
  rx = Math.min(rx, width / 2);
  ry = Math.min(ry, height / 2);

  if (rx === 0 && ry === 0) {
    // Simple rectangle without rounded corners
    return `M ${String(x)} ${String(y)} L ${String(x + width)} ${String(y)} L ${String(x + width)} ${String(y + height)} L ${String(x)} ${String(y + height)} Z`;
  }

  // Rounded rectangle
  const x1 = x + rx;
  const y1 = y + ry;
  const x2 = x + width - rx;
  const y2 = y + height - ry;

  return `M ${String(x)} ${String(y1)} Q ${String(x)} ${String(y)} ${String(x1)} ${String(y)} L ${String(x2)} ${String(y)} Q ${String(x + width)} ${String(y)} ${String(x + width)} ${String(y1)} L ${String(x + width)} ${String(y2)} Q ${String(x + width)} ${String(y + height)} ${String(x2)} ${String(y + height)} L ${String(x1)} ${String(y + height)} Q ${String(x)} ${String(y + height)} ${String(x)} ${String(y2)} Z`;
}

/**
 * Parses the SVG path from the string
 * @param svgString - The SVG string to parse
 * @returns The parsed SVG path and viewBox, or null if the SVG string is not valid
 */
function parseSVGPath(
  svgString: string,
): { path: string; viewBox: string } | null {
  try {
    console.log(
      'Parsing SVG string (first 200 chars):',
      svgString.substring(0, 200),
    );

    // Extract viewBox from SVG string
    const viewBoxMatch = /viewBox=["']([^"']+)["']/.exec(svgString);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
    console.log('Extracted viewBox:', viewBox);

    // Try to find path elements first
    let pathMatch = /<path[^>]*d=["']([^"']+)["']/.exec(svgString);
    let d: string | undefined;

    // If no path found, try to find other shapes
    if (!pathMatch) {
      console.log('No <path> element found, checking for other shapes...');

      // Check for rect element
      const rectMatch = /<rect[^>]*/.exec(svgString);
      if (rectMatch) {
        const rectTag = rectMatch[0];
        const xMatch = /x=["']([^"']+)["']/.exec(rectTag);
        const yMatch = /y=["']([^"']+)["']/.exec(rectTag);
        const widthMatch = /width=["']([^"']+)["']/.exec(rectTag);
        const heightMatch = /height=["']([^"']+)["']/.exec(rectTag);
        const rxMatch = /rx=["']([^"']+)["']/.exec(rectTag);
        const ryMatch = /ry=["']([^"']+)["']/.exec(rectTag);

        if (widthMatch && heightMatch) {
          const x = xMatch ? parseFloat(xMatch[1]) : 0;
          const y = yMatch ? parseFloat(yMatch[1]) : 0;
          const width = parseFloat(widthMatch[1]);
          const height = parseFloat(heightMatch[1]);
          const rx = rxMatch ? parseFloat(rxMatch[1]) : 0;
          const ry = ryMatch ? parseFloat(ryMatch[1]) : rx;

          d = rectToPath(x, y, width, height, rx, ry);
          console.log('Converted rect to path:', d);
        }
      }

      // If still no path, try to extract from SVG content
      if (!d) {
        const svgContentMatch = /<svg[^>]*>([\s\S]*)<\/svg>/.exec(svgString);
        if (svgContentMatch) {
          const content = svgContentMatch[1];
          pathMatch = /d=["']([^"']+)["']/.exec(content);
          if (pathMatch) {
            d = pathMatch[1];
          }
        }
      }
    } else {
      d = pathMatch[1];
    }

    if (!d) {
      console.error('Could not find or convert path data in SVG');
      console.log('Full SVG:', svgString);
      return null;
    }

    console.log(
      'Extracted/converted path d attribute (first 100 chars):',
      d.substring(0, 100),
    );

    // Extract fill-rule and clip-rule if present
    const fillRuleMatch = /fill-rule=["']([^"']+)["']/i.exec(svgString);
    const clipRuleMatch = /clip-rule=["']([^"']+)["']/i.exec(svgString);
    const fillRule = fillRuleMatch ? fillRuleMatch[1] : undefined;
    const clipRule = clipRuleMatch ? clipRuleMatch[1] : undefined;

    // Build path data string with attributes
    let pathData = `d="${d}"`;
    if (fillRule) {
      pathData = `fillRule="${fillRule}" ${pathData}`;
    }
    if (clipRule) {
      pathData = `clipRule="${clipRule}" ${pathData}`;
    }

    return {
      path: pathData,
      viewBox,
    };
  } catch (error) {
    console.error('Error parsing SVG:', error);
    return null;
  }
}

/**
 * Converts the string to PascalCase
 * @param str - The string to convert
 * @returns The PascalCase string
 */
function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    .replace(/^[0-9]/, '_$&'); // Handle leading numbers
}

/**
 * Exports the icons from the selection
 * @returns The icons as an array of objects
 */
async function exportIcons(): Promise<void> {
  const currentPage = figma.currentPage;
  const selection = currentPage.selection;

  console.log(`Processing ${String(selection.length)} selected node(s)`);

  if (selection.length === 0) {
    emit<ShowNotification>('SHOW_NOTIFICATION', {
      message: 'Please select one or more icon frames or components',
      error: true,
    });
    return;
  }

  const icons: IconData[] = [];
  const errors: string[] = [];

  for (const node of selection) {
    const nodeName = String(node.name);
    const nodeType = String(node.type);
    console.log(`\n--- Processing node: "${nodeName}" (${nodeType}) ---`);

    if (!isIconFrame(node)) {
      // Type assertion needed because Figma types are provided at runtime
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const frameNode = node as any;
      const nodeWidth = 'width' in frameNode ? frameNode.width : 0;
      const nodeHeight = 'height' in frameNode ? frameNode.height : 0;
      const errorMsg = `"${nodeName}" is not a valid icon frame/component (type: ${nodeType}, size: ${String(nodeWidth)}x${String(nodeHeight)}). Expected size between 16x16 and 48x48. Skipping...`;
      errors.push(errorMsg);
      emit<ShowNotification>('SHOW_NOTIFICATION', {
        message: errorMsg,
        error: false,
      });
      continue;
    }

    console.log(`${nodeType} "${nodeName}" passed size check`);

    // Extract SVG path from the frame
    let svgString: string | null = null;
    try {
      svgString = await extractVectorPath(node);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      const errorMsg = `Error extracting vector from "${nodeName}": ${errorMessage}`;
      console.error(errorMsg);
      errors.push(errorMsg);
      emit<ShowNotification>('SHOW_NOTIFICATION', {
        message: `Could not extract vector from "${nodeName}". Skipping...`,
        error: false,
      });
      continue;
    }

    if (!svgString) {
      const errorMsg = `Could not extract vector from "${nodeName}" - no exportable content found`;
      errors.push(errorMsg);
      emit<ShowNotification>('SHOW_NOTIFICATION', {
        message: `Could not extract vector from "${nodeName}". Skipping...`,
        error: false,
      });
      continue;
    }

    console.log(`Successfully extracted SVG from "${nodeName}"`);

    const parsed = parseSVGPath(svgString);
    if (!parsed) {
      const errorMsg = `Could not parse SVG from "${nodeName}"`;
      errors.push(errorMsg);
      emit<ShowNotification>('SHOW_NOTIFICATION', {
        message: `Could not parse SVG from "${nodeName}". Skipping...`,
        error: false,
      });
      continue;
    }

    console.log(`Successfully parsed SVG from "${nodeName}"`);

    const componentName = `${toPascalCase(node.name)}Icon`;

    icons.push({
      name: node.name,
      componentName,
      svgPath: parsed.path,
      viewBox: parsed.viewBox,
    });

    console.log(`✓ Successfully processed icon: ${componentName}`);
  }

  console.log(
    `\n=== Summary: ${String(icons.length)} icon(s) processed, ${String(errors.length)} error(s) ===`,
  );

  if (icons.length === 0) {
    const errorDetails =
      errors.length > 0 ? `\n\nDetails:\n${errors.join('\n')}` : '';
    emit<ShowNotification>('SHOW_NOTIFICATION', {
      message: `No valid icons found. Please select 24x24 frames or components with vector paths.${errorDetails}`,
      error: true,
    });
    return;
  }

  emit<ExportIconsResponse>('EXPORT_ICONS_RESPONSE', {
    icons,
  });
}

/**
 * The main function that exports the icons
 */
export default function (): void {
  showUI({ width: 400, height: 600 });
  on<ExportIconsRequest>('EXPORT_ICONS', () => {
    void exportIcons();
  });
}
