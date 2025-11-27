/**
 * Restricted design tokens for WorkIndia Design System
 *
 * This package provides the locked-down token definitions that serve as
 * the single source of truth for colors, spacing, and typography.
 * Package: @workindia/tokens
 */

export type {
  ColorTokens,
  ChromaticColorScale,
  NeutralColorScale,
  BlackNWhite,
} from './colors';
export { Colors } from './colors';

export type { SpacingTokens } from './spacing';
export { Spacing } from './spacing';

export type { BreakpointTokens } from './breakpoints';
export { Breakpoints } from './breakpoints';

export type { TypographyTokens } from './typography';
export { Typography } from './typography';

export type {
  BorderTokens,
  BorderRadiusTokens,
  BorderWidthTokens,
} from './border';
export { Border } from './border';

export type {
  ElevationTokens,
  ElevationWithColorModes,
  ElevationLevels,
} from './elevation';
export { Elevation } from './elevation';
