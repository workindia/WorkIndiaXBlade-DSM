# @workindia/icons

WorkIndia icon components based on Figma icon tokens.

## Installation

```bash
npm install @workindia/icons
```

## Usage

```tsx
import { ExampleIcon } from '@workindia/icons';

function App() {
  return <ExampleIcon size="medium" color="currentColor" />;
}
```

## Icon Structure

Icons are created from Figma frames (24x24) containing vector paths. Each icon follows the same structure as Blade icons and can be exported using the Figma plugin.

## Development

Icons are exported from Figma using the `@workindia/figma-icon-exporter` plugin. Select icon frames (24x24) and use the plugin to generate icon components.

## Attribution

The icons in this package are based on icons from [Phosphor Icons](https://phosphoricons.com/), which are licensed under the MIT License.
