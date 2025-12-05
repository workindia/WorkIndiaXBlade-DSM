// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, Fragment } from 'preact';
import {
  render,
  Container,
  Text,
  Button,
  VerticalSpace,
} from '@create-figma-plugin/ui';
import { emit, on } from '@create-figma-plugin/utilities';
import { useState, useEffect } from 'preact/hooks';
// Dynamic import to avoid type conflicts with Figma plugin types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let JSZip: any;
import type {
  ExportIconsResponse,
  ShowNotification,
  ExportIconsRequest,
  IconData,
  PathData,
} from './main';

/**
 * The plugin UI
 * @returns The plugin UI
 */
function Plugin() {
  const [icons, setIcons] = useState<IconData[]>([]);
  const [notification, setNotification] = useState<{
    message: string;
    error?: boolean;
  } | null>(null);

  useEffect(() => {
    on<ExportIconsResponse>('EXPORT_ICONS_RESPONSE', (data) => {
      setIcons(data.icons);
      if (data.error) {
        setNotification({ message: data.error, error: true });
      } else {
        setNotification({
          message: `Exported ${data.icons.length.toString()} icon(s). Click "Download ZIP File" to download.`,
        });
      }
    });

    on<ShowNotification>('SHOW_NOTIFICATION', (data) => {
      setNotification({ message: data.message, error: data.error });
    });
  }, []);

  const handleExport = () => {
    emit<ExportIconsRequest>('EXPORT_ICONS');
  };

  /**
   * Converts PascalCase to kebab-case
   * @param str - The string to convert
   * @returns The kebab-case string
   */
  const toKebabCase = (str: string): string => {
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replace(/^[A-Z]/, (match) => match.toLowerCase());
  };

  /**
   * Downloads files as a ZIP archive
   * Since Figma plugins can't write directly to file system, we create a downloadable ZIP
   */
  const downloadAsZip = async () => {
    if (icons.length === 0) {
      setNotification({
        message: 'No icons to download. Please export icons first.',
        error: true,
      });
      return;
    }

    try {
      setNotification({
        message: 'Creating ZIP file...',
        error: false,
      });

      // Dynamically import JSZip to avoid type conflicts
      if (!JSZip) {
        const JSZipModule = await import('jszip');
        JSZip = JSZipModule.default;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      const zip = new JSZip();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const iconsFolder = zip.folder('icons');

      if (!iconsFolder) {
        throw new Error('Failed to create icons folder in ZIP');
      }

      // Generate file contents and add to ZIP
      icons.forEach((icon: IconData) => {
        const fileName = toKebabCase(icon.componentName);

        // Generate Path elements for all paths

        const pathElements = icon.paths
          .map((pathData: PathData) => {
            const props: string[] = [];

            // Add fill-related props

            const fillRule = pathData.fillRule;
            if (fillRule) {
              props.push(`fillRule="${fillRule}"`);
            }

            const clipRule = pathData.clipRule;
            if (clipRule) {
              props.push(`clipRule="${clipRule}"`);
            }

            // Determine if we should use fill or stroke

            const stroke = pathData.stroke;
            const hasStroke = stroke !== undefined && stroke !== 'none';

            const fill = pathData.fill;
            const hasFill = fill !== undefined && fill !== 'none';

            if (hasStroke) {
              // Use stroke with iconColor
              props.push(`stroke={iconColor}`);

              const strokeWidth = pathData.strokeWidth;
              if (strokeWidth) {
                props.push(`strokeWidth="${strokeWidth}"`);
              }

              const strokeLinecap = pathData.strokeLinecap;
              if (strokeLinecap) {
                props.push(`strokeLinecap="${strokeLinecap}"`);
              }

              const strokeLinejoin = pathData.strokeLinejoin;
              if (strokeLinejoin) {
                props.push(`strokeLinejoin="${strokeLinejoin}"`);
              }

              const strokeDasharray = pathData.strokeDasharray;
              if (strokeDasharray) {
                props.push(`strokeDasharray="${strokeDasharray}"`);
              }
              // Only add fill if explicitly set and not "none"
              if (hasFill && fill && fill !== 'none') {
                props.push(`fill="${fill}"`);
              } else {
                props.push('fill="none"');
              }
            } else {
              // Use fill with iconColor (default behavior)
              props.push(`fill={iconColor}`);
            }

            const propsString =
              props.length > 0 ? '\n        ' + props.join('\n        ') : '';
            const d = pathData.d;

            return `      <Path${propsString}
        d="${d}"
      />`;
          })
          .join('\n');

        const content = `import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _${icon.componentName}: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="${icon.viewBox}" fill="none">
${pathElements}
    </Svg>
  );
};

const ${icon.componentName} = assignWithoutSideEffects(_${icon.componentName}, {
  componentId: '${icon.componentName}',
});

export default ${icon.componentName};`;

        // Create folder for each icon
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const iconFolder = iconsFolder.folder(icon.componentName);
        if (iconFolder) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          iconFolder.file(`${fileName}.tsx`, content);
        }
      });

      // Generate the ZIP file
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const zipBlob = await zip.generateAsync({ type: 'blob' });

      // Download the ZIP
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `workindia-icons-${new Date().toISOString().split('T')[0]}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setNotification({
        message: `Downloaded ZIP file with ${String(icons.length)} icon(s)! Extract and copy to your icons package.`,
      });
    } catch (error) {
      console.error('Error creating ZIP:', error);
      setNotification({
        message: 'Error creating ZIP file. Please use the copy method instead.',
        error: true,
      });
    }
  };

  return (
    <Container space="medium">
      <Text>WorkIndia Icon Exporter</Text>
      <VerticalSpace space="small" />
      <Text>
        Select icon frames or components in Figma (various sizes supported) and
        click Export to generate React icon components.
      </Text>
      <VerticalSpace space="medium" />
      <Button onClick={handleExport}>Export Icons</Button>
      {notification && (
        <>
          <VerticalSpace space="small" />
          <Text style={{ color: notification.error ? 'red' : 'green' }}>
            {notification.message}
          </Text>
        </>
      )}
      {icons.length > 0 && (
        <>
          <VerticalSpace space="medium" />
          <Button onClick={() => void downloadAsZip()}>
            Download ZIP File
          </Button>
          <VerticalSpace space="small" />
          <Text>
            Click "Download ZIP File" to download a ZIP archive with all icon
            files.
            <br />
            <br />
            <strong>After downloading:</strong>
            <br />
            1. Extract the ZIP file
            <br />
            2. Copy the icon folders to{' '}
            <code>packages/icons/src/components/Icons/</code>
            <br />
            3. Manually export the components in{' '}
            <code>packages/icons/src/index.ts</code>
            <br />
            4. Run <code>npm run format</code> to fix formatting
            <br />
            <br />
            <strong>Note:</strong> Figma plugins cannot write directly to your
            file system for security reasons. The ZIP file contains all icon
            files ready to extract.
          </Text>
        </>
      )}
    </Container>
  );
}

export default render(Plugin);
