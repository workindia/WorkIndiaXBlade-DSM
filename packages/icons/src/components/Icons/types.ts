import type { Theme } from '@workindia/dsm';
import type { DotNotationToken } from '@workindia/dsm';

export type IconSize =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | '2xlarge';

type InteractiveIcon = DotNotationToken<Theme['colors']['interactive']['icon']>;
type FeedbackIcon = DotNotationToken<Theme['colors']['feedback']['icon']>;
type SurfaceIcon = DotNotationToken<Theme['colors']['surface']['icon']>;

/**
 * Icon color type that only allows theme token paths.
 * Supports:
 * - Interactive icon tokens: `interactive.icon.${InteractiveIcon}`
 * - Feedback icon tokens: `feedback.icon.${FeedbackIcon}`
 * - Surface icon tokens: `surface.icon.${SurfaceIcon}`
 * - 'currentColor' for inheriting from parent
 */
export type IconColors =
  | `interactive.icon.${InteractiveIcon}`
  | `feedback.icon.${FeedbackIcon}`
  | `surface.icon.${SurfaceIcon}`
  | 'currentColor';

export interface IconProps {
  /**
   * Color token (not to be confused with actual color value)
   */
  color?: IconColors;
  /**
   * Size of the icon
   */
  size?: IconSize;
  /**
   * Test ID for testing
   */
  testID?: string;
}

export type IconComponent = React.ComponentType<IconProps>;
