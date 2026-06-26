# @workindia/icons

## 2.0.0

### Minor Changes

- 19b3307: Upgrade Blade, extend DSM theme tokens, export icon utilities, and refresh MCP icon docs.

  **@workindia/dsm:**
  - Upgrade `@razorpay/blade` from **12.68.0** to **12.98.1** (includes SideNav text alignment fix from 12.96.4)
  - Extend `interactive.background` on light and dark with **`ghost`** for `gray`, `staticBlack`, and `staticWhite`
  - Extend `interactive.border` on light and dark with **`fadedHighlighted`** for `staticBlack` and `staticWhite`
  - Extend **`popup`** on light and dark with semantic **`background`** and **`border`** maps for `information`, `negative`, `neutral`, `notice`, and `positive`, plus **`gray`** (`subtle` / `moderate` / `intense`)
  - Map `@razorpay/blade/components` to `src/__mocks__/blade-components.tsx` in Jest so tests do not load Blade's ESM graph (e.g. Recharts)

  **@workindia/icons:**
  - Export `parseViewBox` from `use-rectangular-icon-props` for direct use and tests
  - Improve viewBox validation in rectangular icon props
  - Require peer dependency `@workindia/dsm` **>=0.8.0**

  **@workindia/dsm-mcp:**
  - Regenerate icon knowledgebase docs with accurate descriptions for all exported icons
  - Update MCP doc utilities to serve the expanded icon knowledgebase

### Patch Changes

- Updated dependencies [19b3307]
  - @workindia/dsm@0.8.0

## 1.3.0

### Patch Changes

- Updated dependencies [61ee18a]
  - @workindia/dsm@0.7.0

## 1.2.0

### Minor Changes

- 815245a: Add WorkIndia Logo and Wordmark icon components

  **@workindia/icons:**
  - Added `WorkIndiaLogoOnLightIcon` and `WorkIndiaLogoOnDarkIcon` components (24x24 viewBox, square format)
  - Added `WorkIndiaWordmarkOnLightIcon` and `WorkIndiaWordmarkOnDarkIcon` components (172x25 viewBox, rectangular format)
  - Introduced `useRectangularIconProps` hook for handling rectangular icon dimensions based on viewBox aspect ratio
  - Added `Rect` component to `_Svg` exports for rendering rectangular SVG elements
  - All components include comprehensive test coverage

  **@workindia/dsm-mcp:**
  - Added knowledge base documentation for `WorkIndiaLogo` component
  - Added knowledge base documentation for `WorkIndiaWordmark` component
  - Documentation includes usage guidelines, TypeScript types, examples, and best practices

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
