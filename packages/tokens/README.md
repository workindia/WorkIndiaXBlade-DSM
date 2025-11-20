# @workindia/tokens

Restricted design tokens for WorkIndia Design System.

This package serves as the **single source of truth** for design tokens in the WorkIndia Design System. It enforces a strict lockdown on colors and spacing tokens to ensure design consistency across all applications.

## Installation

```bash
npm install @workindia/tokens
```

## Usage

```typescript
import {
  WorkIndiaColors,
  WorkIndiaSpacing,
  WorkIndiaTypography,
} from '@workindia/tokens';

// Use color scales - locked-down gradient variations
const primaryBase = WorkIndiaColors.brand.primary[500]; // '#005A9C' - Base color
const primaryLight = WorkIndiaColors.brand.primary[50]; // Lightest shade
const primaryDark = WorkIndiaColors.brand.primary[900]; // Dark shade
const primaryOverlay = WorkIndiaColors.brand.primary.a50; // 10% opacity variant

// Use restricted spacing
const padding = WorkIndiaSpacing.medium; // 16

// Use typography tokens
const fontSize = WorkIndiaTypography.fontSize.base; // 14
```

## Token Structure

### Colors

Color tokens use **locked-down gradient scales** to ensure consistency. Each color provides a full scale of variations:

#### Brand Colors

- `brand.primary` - Primary brand color scale with gradient variations:
  - `50`, `100`, `200` - Light shades (for backgrounds)
  - `500` - Base color (primary shade)
  - `700`, `900`, `1000` - Dark shades (for emphasis)
  - `a50`, `a100`, `a200` - Alpha variants (for overlays)

- `brand.secondary` - Secondary brand color scale (same structure as primary)

#### Feedback Colors

- `feedback.success` - Success color scale (same gradient structure)
- `feedback.error` - Error color scale (same gradient structure)

#### Text Colors

- `text.body` - Body text color (single value)
- `text.heading` - Heading text color (single value)
- `text.subtle` - Subtle/secondary text color (single value)

### Spacing

Only the following spacing values are available:

- `small` - 8px
- `medium` - 16px
- `large` - 24px
- `xlarge` - 32px

### Typography

Typography tokens use **Inter font** as the primary typeface:

- `fontFamily.text` - Inter font for body text and UI elements
- `fontFamily.heading` - Inter font for headings
- `fontFamily.code` - Monospace font for code snippets

**Font Loading**: To use Inter font, import Blade's fonts.css in your application:

```typescript
import '@razorpay/blade/fonts.css';
```

Font sizes and weights are also defined in the tokens.

## Type Safety

All tokens are strongly typed. TypeScript will prevent you from using undefined token values or invalid gradient shades.

```typescript
import type {
  WorkIndiaColorTokens,
  WorkIndiaColorScale,
} from '@workindia/tokens';

// Access color scale
const primaryScale: WorkIndiaColorScale = WorkIndiaColors.brand.primary;

// TypeScript enforces only valid shade keys
const shade = primaryScale[500]; // ✅ Valid
// const invalid = primaryScale[999]; // ❌ TypeScript error

// This ensures only valid color tokens are used
function useColor(color: keyof WorkIndiaColorTokens['brand']) {
  // Implementation
}
```

## Color Scale Structure

Each color scale provides locked-down gradient variations **manually defined by the design team**:

- **50, 100, 200**: Light shades for backgrounds and subtle elements
- **500**: Base color - the primary shade
- **700, 900, 1000**: Dark shades for emphasis and contrast
- **a50, a100, a200**: Alpha variants with opacity for overlays and effects

**Important**: All color scale values are manually defined hex codes provided by the design team. They are not auto-generated. To update colors, edit `packages/tokens/src/colors.ts` with the design team's approved hex codes.

This ensures:

- ✅ Design team controls all color values
- ✅ No arbitrary color values
- ✅ Type-safe access to all variations
- ✅ Single source of truth for color scales
- ✅ Manual control over every gradient step

## License

MIT
