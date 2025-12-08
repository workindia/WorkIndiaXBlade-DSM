# @workindia/icons

## 1.1.1

### Patch Changes

- 1e31f26: Fix icon color not being translated from dot notation tokens to theme colors. The `useIconProps` hook now properly resolves color tokens like "surface.icon.gray.normal" to their actual theme color values using a new `getThemeColor` utility function.

## 1.1.0

### Minor Changes

- ab9efe0: Add product icons including Call, Boost, AlignLeft, Company, Job, Hotleads, and Type icons with Fill and Outline variants. These icons are exported from Figma component sets and follow the naming convention of ComponentName-VariantTypeIcon (e.g., Call-FillIcon, Call-OutlineIcon).

## 1.0.0

### Major Changes

- 6a65a0e: Add new @workindia/icons package
  - Initial release of WorkIndia icon components package
  - Provides base icon components (Svg, Path) and utilities
  - Supports theme-based icon colors using @workindia/dsm Theme type
  - Includes icon size mapping and useIconProps hook
  - Exports IconComponent, IconProps, IconSize, and IconColors types
  - Include System Icons entirely

### Patch Changes

- Updated dependencies [8e938d1]
- Updated dependencies [6c67303]
- Updated dependencies [2c5076f]
  - @workindia/dsm@0.6.0
