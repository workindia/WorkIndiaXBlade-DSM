# WorkIndia Icon Exporter - Figma Plugin

A Figma plugin to export icon frames as React icon components for the `@workindia/icons` package.

## Installation

1. Build the plugin:

   ```bash
   cd packages/figma-icon-exporter
   npm install
   npm run build
   ```

2. In Figma:
   - Go to Plugins → Development → Import plugin from manifest...
   - Select `packages/figma-icon-exporter/manifest.json`

## Usage

1. In your Figma file, select one or more:
   - Icon frames (must be 16x16 to 48x48 frames containing vector paths)
   - Components (individual components)
   - Component sets (with variants - each variant will be exported as a separate icon)
2. Run the plugin: Plugins → Development → WorkIndia Icon Exporter
3. Click "Export Icons" in the plugin UI
4. The plugin will generate React icon component code
5. Click "Download ZIP File" to download all icons as a ZIP archive

## Icon Requirements

- Frame/Component must be between 16x16 and 48x48 pixels
- Must contain a vector path (VECTOR node) inside
- Frame/Component name will be used to generate the component name (e.g., "Home" → "HomeIcon")
- For component sets: Each variant will be exported as a separate icon component

## Generated Code Structure

The plugin generates icon components following the same pattern as Blade icons:

```tsx
import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/useIconProps';
import { assignWithoutSideEffects } from '../../../utils/assignWithoutSideEffects';

const _HomeIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill={iconColor} />
    </Svg>
  );
};

const HomeIcon = assignWithoutSideEffects(_HomeIcon, {
  componentId: 'HomeIcon',
});

export default HomeIcon;
```

## Development

```bash
# Watch mode for development
npm run watch

# Build for production
npm run build
```
