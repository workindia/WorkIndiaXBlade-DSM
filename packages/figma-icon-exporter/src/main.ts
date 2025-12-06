/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */
// Figma plugin types are provided at runtime, so we disable type safety checks for Figma API calls
import { emit, on, showUI } from '@create-figma-plugin/utilities';

export interface PathData {
  d: string;
  fill?: string;
  fillRule?: string;
  clipRule?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  strokeDasharray?: string;
}

export interface IconData {
  name: string;
  componentName: string;
  paths: PathData[];
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
  // Accept FRAME, COMPONENT, and COMPONENT_SET types (icons can be any of these)
  const nodeType = node.type;
  if (
    nodeType !== 'FRAME' &&
    nodeType !== 'COMPONENT' &&
    nodeType !== 'COMPONENT_SET'
  ) {
    console.log(
      `Node "${String(node.name)}" is not a FRAME, COMPONENT, or COMPONENT_SET, it's a ${String(nodeType)}`,
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
 * Gets all variant components from a component set
 * @param node - A component that is part of a component set, or a COMPONENT_SET node itself
 * @returns Array of all variant components in the set
 */
function getComponentSetVariants(node: SceneNode): ComponentNode[] {
  // Type assertion needed because Figma types are provided at runtime
  let componentSet: SceneNode;

  if (node.type === 'COMPONENT_SET') {
    // If the node itself is a COMPONENT_SET, use it directly
    componentSet = node;
    console.log(
      `Getting variants from COMPONENT_SET: "${String(componentSet.name)}"`,
    );
  } else if (node.type === 'COMPONENT') {
    // If it's a component, get its parent (component set container)
    const componentNode = node;
    const parent = componentNode.parent;

    if (parent?.type !== 'COMPONENT_SET') {
      // If no parent or parent is not a COMPONENT_SET, return just this component
      console.log(
        `Component "${String(componentNode.name)}" is not part of a component set, returning as single component`,
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return [componentNode as ComponentNode];
    }

    componentSet = parent;
    console.log(
      `Getting variants from parent COMPONENT_SET: "${String(componentSet.name)}"`,
    );
  } else {
    console.log(
      `Node type "${String(node.type)}" is not a COMPONENT_SET or COMPONENT`,
    );
    return [];
  }

  // Get all children of the component set (all variants)
  const variants: ComponentNode[] = [];

  // Check if componentSet has children property
  if (!componentSet.children) {
    console.warn(
      `Component set "${String(componentSet.name)}" has no children property`,
    );
    return [];
  }

  if (Array.isArray(componentSet.children)) {
    console.log(
      `Component set "${String(componentSet.name)}" has ${String(componentSet.children.length)} children`,
    );
    for (const child of componentSet.children) {
      if (child?.type === 'COMPONENT') {
        variants.push(child as ComponentNode);
        console.log(`  Found variant: "${String(child.name)}"`);
      } else {
        console.log(
          `  Skipping child (type: ${String(child?.type)}): "${String(child?.name)}"`,
        );
      }
    }
  } else {
    console.warn(
      `Component set "${String(componentSet.name)}" children is not an array`,
    );
  }

  console.log(
    `Found ${variants.length.toString()} variant(s) in component set "${String(componentSet.name)}"`,
  );

  return variants;
}

/**
 * Extracts all vector paths from the node and its children
 * @param node - The node to extract vector paths from
 * @param depth - The depth of the node in the tree (for logging purposes)
 * @returns Array of SVG strings, or empty array if no vectors found
 */
async function extractVectorPaths(
  node: SceneNode,
  depth = 0,
): Promise<string[]> {
  const svgStrings: string[] = [];

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
      svgStrings.push(svgString);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error(
        `Error exporting ${String(nodeType)} "${String(node.name)}":`,
        errorMessage,
      );
    }
  }

  // Check children for additional paths
  // Type assertion needed because Figma types are provided at runtime
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenNode = node as any;
  if ('children' in node && childrenNode.children.length > 0) {
    const children = childrenNode.children;
    console.log(
      `Node "${String(node.name)}" (${String(nodeType)}) has ${String(children.length)} children, checking...`,
    );
    for (const child of children) {
      const childPaths = await extractVectorPaths(child, depth + 1);
      svgStrings.push(...childPaths);
    }
  } else if (svgStrings.length === 0) {
    console.log(
      `Node "${String(node.name)}" (${String(nodeType)}) has no children and is not exportable`,
    );
  }

  return svgStrings;
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
 * Parses all SVG paths from the string(s)
 * @param svgStrings - Array of SVG strings to parse
 * @returns The parsed paths and viewBox, or null if no valid paths found
 */
function parseSVGPaths(
  svgStrings: string[],
): { paths: PathData[]; viewBox: string } | null {
  try {
    if (svgStrings.length === 0) {
      return null;
    }

    // Extract viewBox from the first SVG string (they should all have the same viewBox)
    const viewBoxMatch = /viewBox=["']([^"']+)["']/.exec(svgStrings[0] ?? '');
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
    console.log('Extracted viewBox:', viewBox);

    const paths: PathData[] = [];

    // Process each SVG string
    for (const svgString of svgStrings) {
      console.log(
        'Parsing SVG string (first 200 chars):',
        svgString.substring(0, 200),
      );

      // Extract all path elements from this SVG string
      const pathRegex = /<path[^>]*>/gi;
      let pathMatch;
      const foundPaths: PathData[] = [];

      // Find all path elements
      while ((pathMatch = pathRegex.exec(svgString)) !== null) {
        const pathTag = pathMatch[0];

        // Extract d attribute
        const dMatch = /d=["']([^"']+)["']/i.exec(pathTag);
        if (!dMatch) {
          continue;
        }

        const d = dMatch[1];

        // Extract fill-related attributes
        const fillMatch = /fill=["']([^"']+)["']/i.exec(pathTag);
        const fillRuleMatch = /fill-rule=["']([^"']+)["']/i.exec(pathTag);
        const clipRuleMatch = /clip-rule=["']([^"']+)["']/i.exec(pathTag);

        // Extract stroke-related attributes
        const strokeMatch = /stroke=["']([^"']+)["']/i.exec(pathTag);
        const strokeWidthMatch = /stroke-width=["']([^"']+)["']/i.exec(pathTag);
        const strokeLinecapMatch = /stroke-linecap=["']([^"']+)["']/i.exec(
          pathTag,
        );
        const strokeLinejoinMatch = /stroke-linejoin=["']([^"']+)["']/i.exec(
          pathTag,
        );
        const strokeDasharrayMatch = /stroke-dasharray=["']([^"']+)["']/i.exec(
          pathTag,
        );

        const pathData: PathData = {
          d,
        };

        if (fillMatch) {
          pathData.fill = fillMatch[1];
        }
        if (fillRuleMatch) {
          pathData.fillRule = fillRuleMatch[1];
        }
        if (clipRuleMatch) {
          pathData.clipRule = clipRuleMatch[1];
        }
        if (strokeMatch) {
          pathData.stroke = strokeMatch[1];
        }
        if (strokeWidthMatch) {
          pathData.strokeWidth = strokeWidthMatch[1];
        }
        if (strokeLinecapMatch) {
          pathData.strokeLinecap = strokeLinecapMatch[1];
        }
        if (strokeLinejoinMatch) {
          pathData.strokeLinejoin = strokeLinejoinMatch[1];
        }
        if (strokeDasharrayMatch) {
          pathData.strokeDasharray = strokeDasharrayMatch[1];
        }

        foundPaths.push(pathData);
        console.log(
          `Extracted path d attribute (first 100 chars): ${d.substring(0, 100)}`,
        );
      }

      // If no path elements found, try to find other shapes (rect, circle, etc.)
      if (foundPaths.length === 0) {
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

            const d = rectToPath(x, y, width, height, rx, ry);
            console.log('Converted rect to path:', d);
            foundPaths.push({ d });
          }
        }
      }

      paths.push(...foundPaths);
    }

    if (paths.length === 0) {
      console.error('Could not find or convert path data in SVG');
      console.log('Full SVG strings:', svgStrings);
      return null;
    }

    console.log(`Extracted ${paths.length.toString()} path(s) total`);

    return {
      paths,
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
 * Processes a single node and exports it as an icon
 * @param node - The node to process
 * @param icons - Array to add the icon to
 * @param errors - Array to add errors to
 * @param parentComponentSetName - Optional name of the parent component set (for variants)
 * @param variantProperties - Optional variant properties object (for variants)
 */
async function processNodeAsIcon(
  node: SceneNode,
  icons: IconData[],
  errors: string[],
  parentComponentSetName?: string,
  variantProperties?: Record<string, string>,
): Promise<void> {
  const nodeName = String(node.name);
  const nodeType = String(node.type);
  console.log(
    `\n--- Processing node: "${nodeName}" (${nodeType})${parentComponentSetName ? ` from component set "${parentComponentSetName}"` : ''} ---`,
  );

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
    return;
  }

  console.log(`${nodeType} "${nodeName}" passed size check`);

  // Extract SVG paths from the frame
  let svgStrings: string[] = [];
  try {
    svgStrings = await extractVectorPaths(node);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorMsg = `Error extracting vectors from "${nodeName}": ${errorMessage}`;
    console.error(errorMsg);
    errors.push(errorMsg);
    emit<ShowNotification>('SHOW_NOTIFICATION', {
      message: `Could not extract vectors from "${nodeName}". Skipping...`,
      error: false,
    });
    return;
  }

  if (svgStrings.length === 0) {
    const errorMsg = `Could not extract vectors from "${nodeName}" - no exportable content found`;
    errors.push(errorMsg);
    emit<ShowNotification>('SHOW_NOTIFICATION', {
      message: `Could not extract vectors from "${nodeName}". Skipping...`,
      error: false,
    });
    return;
  }

  console.log(
    `Successfully extracted ${svgStrings.length.toString()} SVG(s) from "${nodeName}"`,
  );

  const parsed = parseSVGPaths(svgStrings);
  if (!parsed || parsed.paths.length === 0) {
    const errorMsg = `Could not parse SVG paths from "${nodeName}"`;
    errors.push(errorMsg);
    emit<ShowNotification>('SHOW_NOTIFICATION', {
      message: `Could not parse SVG paths from "${nodeName}". Skipping...`,
      error: false,
    });
    return;
  }

  console.log(
    `Successfully parsed ${parsed.paths.length.toString()} path(s) from "${nodeName}"`,
  );

  // Build component name: if parentComponentSetName is provided, combine it with variant name
  // Otherwise, just use the node name
  let fullName: string;
  if (parentComponentSetName) {
    // Use variant properties if available (cleaner than parsing variant name)
    if (variantProperties && Object.keys(variantProperties).length > 0) {
      // Extract variant values from properties and combine them
      // e.g., {type: 'fill'} -> "Fill", {type: 'outline', size: 'small'} -> "OutlineSmall"
      const variantParts: string[] = [];
      for (const [, value] of Object.entries(variantProperties)) {
        if (value) {
          variantParts.push(toPascalCase(value));
        }
      }

      if (variantParts.length > 0) {
        // Combine parent name + variant values with hyphen (e.g., "Call" + "Fill" = "Call-Fill")
        fullName = `${parentComponentSetName}-${variantParts.join('')}`;
      } else {
        // Fallback: use variant name with hyphen
        fullName = `${parentComponentSetName}-${toPascalCase(nodeName)}`;
      }
    } else {
      // No variant properties, parse the variant name
      // Check if variant name already includes the component set name (e.g., "AlignLeft/Fill")
      const pascalParentName = toPascalCase(parentComponentSetName);
      const pascalVariantName = toPascalCase(nodeName);

      // If variant name already starts with parent name, use variant name as-is
      // Otherwise, combine parent name + variant name (e.g., "AlignLeft" + "Fill" = "AlignLeftFill")
      if (pascalVariantName.startsWith(pascalParentName)) {
        fullName = nodeName; // Variant name already includes parent name
      } else {
        // Remove common prefix if variant name has format like "AlignLeft/Fill"
        // Or handle format like "type=fill" -> extract "fill"
        let variantPart = nodeName;
        if (nodeName.includes('=')) {
          // Handle format "type=fill" -> extract "fill"
          const parts = nodeName.split('=');
          variantPart = parts[parts.length - 1] ?? nodeName;
        } else {
          const variantParts = nodeName.split('/');
          variantPart = variantParts[variantParts.length - 1] ?? nodeName;
        }
        fullName = `${parentComponentSetName}-${toPascalCase(variantPart)}`;
      }
    }
  } else {
    fullName = nodeName;
  }
  const componentName = `${toPascalCase(fullName)}Icon`;

  icons.push({
    name: fullName,
    componentName,
    paths: parsed.paths,
    viewBox: parsed.viewBox,
  });

  console.log(`✓ Successfully processed icon: ${componentName}`);
}

/**
 * Exports the icons from the selection
 * @returns The icons as an array of objects
 */
async function exportIcons(): Promise<void> {
  console.log('exportIcons function called');
  const currentPage = figma.currentPage;
  const selection = currentPage.selection;

  console.log(`Processing ${String(selection.length)} selected node(s)`);

  if (selection.length === 0) {
    console.log('No selection found');
    emit<ShowNotification>('SHOW_NOTIFICATION', {
      message:
        'Please select one or more icon frames, components, or component sets',
      error: true,
    });
    return;
  }

  const icons: IconData[] = [];
  const errors: string[] = [];
  const processedComponentSets = new Set<string>();

  // First pass: Group components by their parent component set
  // This handles the case where multiple variants from the same set are selected
  const componentSetGroups = new Map<string, SceneNode[]>();
  const standaloneNodes: SceneNode[] = [];

  for (const node of selection) {
    const nodeType = String(node.type);

    if (nodeType === 'COMPONENT_SET') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const componentSetId = String((node as any).id);
      if (!componentSetGroups.has(componentSetId)) {
        componentSetGroups.set(componentSetId, []);
      }
      componentSetGroups.get(componentSetId)?.push(node);
    } else if (nodeType === 'COMPONENT') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const componentNode = node as any;
      const parent = componentNode.parent;

      if (parent?.type === 'COMPONENT_SET') {
        const componentSetId = String(parent.id);
        if (!componentSetGroups.has(componentSetId)) {
          componentSetGroups.set(componentSetId, []);
        }
        componentSetGroups.get(componentSetId)?.push(node);
      } else {
        standaloneNodes.push(node);
      }
    } else {
      standaloneNodes.push(node);
    }
  }

  console.log(
    `Grouped selection: ${componentSetGroups.size.toString()} component set(s), ${standaloneNodes.length.toString()} standalone node(s)`,
  );

  // Process component sets (use first node from each group to get the set)
  const componentSetEntries = Array.from(componentSetGroups.entries());
  for (const [componentSetId, nodes] of componentSetEntries) {
    if (processedComponentSets.has(componentSetId)) {
      console.log(
        `Skipping component set (ID: ${componentSetId}) - already processed`,
      );
      continue;
    }

    processedComponentSets.add(componentSetId);
    const firstNode = nodes[0];
    const nodeName = String(firstNode.name);
    const nodeType = String(firstNode.type);

    console.log(
      `\n--- Processing component set group (ID: ${componentSetId}) with ${nodes.length.toString()} selected node(s) ---`,
    );

    // DEBUG: Print component set hierarchy
    console.log('\n=== COMPONENT SET HIERARCHY DEBUG ===');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const firstNodeAny = firstNode as any;

    if (nodeType === 'COMPONENT_SET') {
      console.log(`Selected node type: COMPONENT_SET`);
      console.log(`Component set name: "${nodeName}"`);
      console.log(`Component set ID: ${componentSetId}`);

      // Print children
      if (firstNodeAny.children && Array.isArray(firstNodeAny.children)) {
        console.log(
          `Component set has ${String(firstNodeAny.children.length)} children:`,
        );
        for (let i = 0; i < firstNodeAny.children.length; i++) {
          const child = firstNodeAny.children[i];
          console.log(
            `  [${String(i)}] Type: ${String(child?.type)}, Name: "${String(child?.name)}", ID: ${String(child?.id)}`,
          );

          // Print variant properties if available
          if (child?.variantProperties) {
            console.log(`      Variant Properties:`, child.variantProperties);
          }

          // Print parent reference
          if (child?.parent) {
            console.log(
              `      Parent: Type: ${String(child.parent.type)}, Name: "${String(child.parent.name)}", ID: ${String(child.parent.id)}`,
            );
          }
        }
      } else {
        console.log(
          `Component set has no children property or children is not an array`,
        );
      }
    } else if (nodeType === 'COMPONENT') {
      console.log(`Selected node type: COMPONENT`);
      console.log(`Component name: "${nodeName}"`);
      console.log(`Component ID: ${String(firstNodeAny.id)}`);

      // Print parent
      if (firstNodeAny.parent) {
        console.log(
          `Parent: Type: ${String(firstNodeAny.parent.type)}, Name: "${String(firstNodeAny.parent.name)}", ID: ${String(firstNodeAny.parent.id)}`,
        );

        // If parent is COMPONENT_SET, print its children
        if (firstNodeAny.parent.type === 'COMPONENT_SET') {
          const parentSet = firstNodeAny.parent;
          if (Array.isArray(parentSet.children)) {
            console.log(
              `Parent component set has ${String(parentSet.children.length)} children:`,
            );
            for (let i = 0; i < parentSet.children.length; i++) {
              const child = parentSet.children[i];
              console.log(
                `  [${String(i)}] Type: ${String(child?.type)}, Name: "${String(child?.name)}", ID: ${String(child?.id)}`,
              );

              // Print variant properties if available
              if (child?.variantProperties) {
                console.log(
                  `      Variant Properties:`,
                  child.variantProperties,
                );
              }
            }
          }
        }
      } else {
        console.log(`Component has no parent`);
      }

      // Print variant properties if available
      if (firstNodeAny.variantProperties) {
        console.log(
          `Component Variant Properties:`,
          firstNodeAny.variantProperties,
        );
      }
    }
    console.log('=== END COMPONENT SET HIERARCHY DEBUG ===\n');

    // Get the component set name

    let componentSetName: string;
    if (nodeType === 'COMPONENT_SET') {
      componentSetName = nodeName;
    } else {
      // If it's a component, get the parent component set name
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const componentNode = firstNode as any;
      const parent = componentNode.parent;
      if (parent?.type === 'COMPONENT_SET') {
        componentSetName = String(parent.name);
      } else {
        componentSetName = nodeName; // Fallback to node name
      }
    }

    console.log(`Component set name: "${componentSetName}"`);

    // Get all variants from the component set (using first node)
    const variants = getComponentSetVariants(firstNode);
    console.log(
      `Component set has ${variants.length.toString()} total variant(s)`,
    );

    if (variants.length === 0) {
      const errorMsg = `No variants found in component set "${componentSetName}"`;
      console.warn(errorMsg);
      errors.push(errorMsg);
      emit<ShowNotification>('SHOW_NOTIFICATION', {
        message: errorMsg,
        error: false,
      });
      continue;
    }

    // Process each variant as a separate icon
    let successCount = 0;
    for (const variant of variants) {
      const variantName = String(variant.name);
      const variantProps = variant.variantProperties ?? undefined;
      console.log(
        `  Processing variant: "${variantName}" from component set "${componentSetName}"`,
      );
      if (variantProps) {
        console.log(`    Variant properties:`, variantProps);
      }
      const iconsBefore = icons.length;
      await processNodeAsIcon(
        variant,
        icons,
        errors,
        componentSetName,
        variantProps,
      );
      if (icons.length > iconsBefore) {
        successCount++;
        console.log(`  ✓ Successfully processed variant: "${variantName}"`);
      } else {
        console.log(`  ✗ Failed to process variant: "${variantName}"`);
      }
    }
    console.log(
      `Component set "${componentSetName}": ${successCount.toString()}/${variants.length.toString()} variants processed successfully`,
    );
  }

  // Process standalone nodes (frames, components not in sets, etc.)
  for (const node of standaloneNodes) {
    const nodeName = String(node.name);
    const nodeType = String(node.type);
    console.log(
      `\n=== Processing standalone node: "${nodeName}" (${nodeType}) ===`,
    );

    // Process as a regular frame or component
    await processNodeAsIcon(node, icons, errors);
  }

  console.log(
    `\n=== Summary: ${String(icons.length)} icon(s) processed, ${String(errors.length)} error(s) ===`,
  );

  if (icons.length === 0) {
    const errorDetails =
      errors.length > 0 ? `\n\nDetails:\n${errors.join('\n')}` : '';
    emit<ShowNotification>('SHOW_NOTIFICATION', {
      message: `No valid icons found. Please select frames, components, or component sets with vector paths.${errorDetails}`,
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
    console.log('EXPORT_ICONS event received');
    void (async () => {
      try {
        console.log('Starting exportIcons...');
        await exportIcons();
        console.log('exportIcons completed');
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error('Error exporting icons:', errorMessage, error);
        emit<ShowNotification>('SHOW_NOTIFICATION', {
          message: `Error exporting icons: ${errorMessage}`,
          error: true,
        });
      }
    })();
  });
}
