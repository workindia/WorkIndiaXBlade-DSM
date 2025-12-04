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

1. In your Figma file, select one or more icon frames (must be 24x24 frames containing vector paths)
2. Run the plugin: Plugins → Development → WorkIndia Icon Exporter
3. Click "Export Icons" in the plugin UI
4. The plugin will generate React icon component code
5. Copy the generated code and paste it into your `@workindia/icons` package

## Icon Frame Requirements

- Frame must be exactly 24x24 pixels
- Frame must contain a vector path (VECTOR node) inside
- Frame name will be used to generate the component name (e.g., "Home" → "HomeIcon")

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
