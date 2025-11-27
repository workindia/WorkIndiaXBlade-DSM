/**
 * Elevation tokens for WorkIndia Design System (Web only)
 * Matches Blade's elevation scale exactly.
 *
 * Elevation tokens are used for box-shadow CSS values.
 */

export type ElevationLevels = 'none' | 'lowRaised' | 'midRaised' | 'highRaised';

export interface ElevationTokens {
  /** No elevation/shadow */
  none: string;
  /** Low elevation - subtle shadow for slightly raised elements */
  lowRaised: string;
  /** Mid elevation - moderate shadow for raised elements */
  midRaised: string;
  /** High elevation - strong shadow for highly raised elements */
  highRaised: string;
}

export interface ElevationWithColorModes {
  /** Elevation values for light mode */
  onLight: ElevationTokens;
  /** Elevation values for dark mode */
  onDark: ElevationTokens;
}

/**
 * WorkIndia elevation token values (Web only)
 * Matches Blade's elevation scale exactly.
 *
 * Values are CSS box-shadow strings in the format:
 * offset-x | offset-y | blur-radius | spread-radius | color
 */
export const Elevation: ElevationWithColorModes = {
  onLight: {
    none: 'none',
    /** offset-x | offset-y | blur-radius | spread-radius | color */
    lowRaised: `0px 2px 16px 0px hsla(217, 56%, 17%, 0.10)`,
    midRaised: `0px 8px 24px 0px hsla(217, 56%, 17%, 0.12)`,
    highRaised: `0px 16px 48px -4px hsla(217, 56%, 17%, 0.18)`,
  },
  onDark: {
    none: 'none',
    // @TODO: replace the values with correct dark mode values
    lowRaised: `0px 2px 16px 0px hsla(217, 56%, 17%, 0.10)`,
    midRaised: `0px 8px 24px 0px hsla(217, 56%, 17%, 0.12)`,
    highRaised: `0px 16px 48px -4px hsla(217, 56%, 17%, 0.18)`,
  },
};
