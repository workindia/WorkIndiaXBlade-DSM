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
  Colors,
  Spacing,
  Breakpoints,
  Typography,
  Border,
  Elevation,
} from '@workindia/tokens';

// Use color scales - locked-down gradient variations
const primaryBase = Colors.chromatic.brand[500]; // '#3C50C8' - Base color
const primaryLight = Colors.chromatic.brand[50]; // Lightest shade
const primaryDark = Colors.chromatic.brand[900]; // Dark shade
const primaryOverlay = Colors.chromatic.brand.a50; // 9% opacity variant

// Use restricted spacing
const padding = Spacing[5]; // 16

// Use breakpoints
const mobileBreakpoint = Breakpoints.m; // 768

// Use typography tokens
const fontSize = Typography.fontSize.base; // 14

// Use border tokens
const borderRadius = Border.radius.medium; // 4
const borderWidth = Border.width.thin; // 1

// Use elevation tokens (web only)
const boxShadow = Elevation.onLight.lowRaised; // CSS box-shadow string
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

- `0` - 0px
- `1` - 2px
- `2` - 4px
- `3` - 8px
- `4` - 12px
- `5` - 16px
- `6` - 20px
- `7` - 24px
- `8` - 32px
- `9` - 40px
- `10` - 48px
- `11` - 56px

### Breakpoints

- `base` - 0px (styles without any media query, mobile-first base)
- `xs` - 320px (Small Mobiles)
- `s` - 480px (Mobiles and Small Tablets)
- `m` - 768px (Medium and Large Tablets, can be treated as desktop in mobile-first approach)
- `l` - 1024px (Desktop)
- `xl` - 1200px (HD Desktop)

**Usage Example:**

```typescript
// In responsive components, use breakpoints for media queries
const isDesktop = window.innerWidth >= Breakpoints.m; // 768px

// With Blade's Box component (mobile-first approach)
<Box margin={{ base: 'spacing.1', m: 'spacing.2' }} />
// This sets margin as spacing.2 on screens >= 768px, and spacing.1 on smaller screens
```

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

### Border

**Border Radius:**

- `none` - 0px
- `xsmall` - 1px
- `small` - 2px
- `medium` - 4px
- `large` - 8px
- `xlarge` - 12px
- `2xlarge` - 16px
- `max` - 9999px (rounds left and right sides of box element)
- `round` - 50% (turns box element into a circle)

**Border Width:**

- `none` - 0px
- `thinner` - 0.5px
- `thin` - 1px
- `thick` - 1.5px
- `thicker` - 2px

### Elevation (Web only)

These are CSS box-shadow values for web applications:

**Elevation Levels:**

- `none` - No elevation/shadow
- `lowRaised` - Low elevation with subtle shadow (for slightly raised elements)
- `midRaised` - Mid elevation with moderate shadow (for raised elements)
- `highRaised` - High elevation with strong shadow (for highly raised elements)

**Color Modes:**

- `onLight` - Elevation values for light mode
- `onDark` - Elevation values for dark mode

**Usage Example:**

```typescript
// Use elevation for box-shadow CSS property
const cardStyle = {
  boxShadow: Elevation.onLight.midRaised,
};

// For dark mode
const darkCardStyle = {
  boxShadow: Elevation.onDark.midRaised,
};
```

## Type Safety

All tokens are strongly typed. TypeScript will prevent you from using undefined token values or invalid gradient shades.

```typescript
import type { ColorTokens, ChromaticColorScale } from '@workindia/tokens';

// Access color scale
const primaryScale: ChromaticColorScale = Colors.chromatic.brand;

// TypeScript enforces only valid shade keys
const shade = primaryScale[500]; // ✅ Valid
// const invalid = primaryScale[999]; // ❌ TypeScript error

// This ensures only valid color tokens are used
function useColor(color: keyof ColorTokens['chromatic']) {
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
