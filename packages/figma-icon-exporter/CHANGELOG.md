# @workindia/figma-icon-exporter

## 0.3.0

### Minor Changes

- 95d6ce9: Add support for exporting component sets and variants as individual icon components. Component sets will now export each variant as a separate icon with proper naming that includes the parent component set name and variant type (e.g., "Call-FillIcon", "Call-OutlineIcon"). Variant names are derived from variant properties for cleaner naming.

## 0.2.0

### Minor Changes

- 6429d57: Add new @workindia/figma-icon-exporter Figma plugin package
  - Initial release of WorkIndia Figma Icon Exporter plugin
  - Allows exporting icon frames/components from Figma as React icon components
  - Supports various icon sizes (16x16 to 48x48)
  - Generates React components compatible with @workindia/icons package structure
  - Exports icons as ZIP file with proper folder structure
  - Includes TypeScript support with proper type safety
  - Fixed all linting errors and type safety issues
