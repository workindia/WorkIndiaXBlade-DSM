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
const primaryBase = WorkIndiaColors.chromatic.brand[500]; // '#3C50C8' - Base color
const primaryLight = WorkIndiaColors.chromatic.brand[50]; // Lightest shade
const primaryDark = WorkIndiaColors.chromatic.brand[900]; // Dark shade
const primaryOverlay = WorkIndiaColors.chromatic.brand.a50; // 9% opacity variant

// Use restricted spacing
const padding = WorkIndiaSpacing.medium; // 16

// Use typography tokens
const fontSize = WorkIndiaTypography.fontSize.base; // 14
```

## Token Structure

### Colors

Color tokens use **locked-down gradient scales** to ensure consistency. Each color provides a full scale of variations:

#### Chromatic Colors

The chromatic palette includes seven color scales, each with full gradient variations:

- `chromatic.brand` - Primary brand color scale
- `chromatic.rose` - Rose color scale
- `chromatic.cerulean` - Cerulean color scale
- `chromatic.emerald` - Emerald color scale (success/positive states)
- `chromatic.crimson` - Crimson color scale (error/negative states)
- `chromatic.amber` - Amber color scale
- `chromatic.sky` - Sky color scale

Each chromatic color scale includes:

- `50`, `100`, `200`, `300`, `400` - Light to medium shades (for backgrounds)
- `500` - Base color (primary shade)
- `600`, `700`, `800`, `900`, `1000` - Medium-dark to darkest shades (for emphasis)
- `a50`, `a100`, `a150`, `a200` - Alpha variants (9%, 18%, 24%, 32% opacity for overlays)

#### Neutral Colors

The neutral palette includes light and dark scales for text and backgrounds:

- `neutral.light` - Light neutral color scale (shades 0-1300 + alpha variants)
- `neutral.dark` - Dark neutral color scale (shades 0-1300 + alpha variants)
- `neutral.blackNWhite` - Black and white colors with transparency shades
  - `black` - Black color scale with transparency (10, 25, 50, 100, 200, 300, 400, 450, 500)
  - `white` - White color scale with transparency (10, 25, 50, 100, 200, 300, 400, 450, 500)

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
  WorkIndiaChromaticColorScale,
} from '@workindia/tokens';

// Access color scale
const primaryScale: WorkIndiaChromaticColorScale =
  WorkIndiaColors.chromatic.brand;

// TypeScript enforces only valid shade keys
const shade = primaryScale[500]; // ✅ Valid
// const invalid = primaryScale[999]; // ❌ TypeScript error

// This ensures only valid color tokens are used
function useColor(color: keyof WorkIndiaColorTokens['chromatic']) {
  // Implementation
}
```

## Color Scale Structure

Each chromatic color scale provides locked-down gradient variations **manually defined by the design team**:

- **50, 100, 200, 300, 400**: Light to medium shades for backgrounds and subtle elements
- **500**: Base color - the primary shade
- **600, 700, 800, 900, 1000**: Medium-dark to darkest shades for emphasis and contrast
- **a50, a100, a150, a200**: Alpha variants with opacity (9%, 18%, 24%, 32%) for overlays and effects

Neutral color scales provide:

- **0-1300**: Full range of neutral shades from lightest to darkest
- **a25, a50, a100, a200**: Alpha variants with opacity (6%, 9%, 18%, 32%) for overlays

**Important**: All color scale values are manually defined hex codes provided by the design team. They are not auto-generated. To update colors, edit `packages/tokens/src/colors.ts` with the design team's approved hex codes.

This ensures:

- ✅ Design team controls all color values
- ✅ No arbitrary color values
- ✅ Type-safe access to all variations
- ✅ Single source of truth for color scales
- ✅ Manual control over every gradient step

## License

MIT
