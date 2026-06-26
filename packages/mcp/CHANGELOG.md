# @workindia/dsm-mcp

## 0.3.0

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

## 0.2.2

### Patch Changes

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

## 0.2.1

### Patch Changes

- 89683f1: Add Pagination component documentation to MCP knowledgebase

## 0.2.0

### Minor Changes

- eaf4ee8: Initialize MCP package with ESLint configuration, TypeScript setup, and foundational components documentation
