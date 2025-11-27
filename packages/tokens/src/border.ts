/**
 * Border tokens for WorkIndia Design System
 * Matches Blade's border scale exactly.
 */

export interface BorderRadiusTokens {
  /** none: 0px */
  none: 0;
  /** xsmall: 1px */
  xsmall: 1;
  /** small: 2px */
  small: 2;
  /** medium: 4px */
  medium: 4;
  /** large: 8px */
  large: 8;
  /** xlarge: 12px */
  xlarge: 12;
  /** 2xlarge: 16px */
  '2xlarge': 16;
  /** max: 9999px. This will round the left and right side of the box element */
  max: 9999;
  /** round: 50%. This will turn the box element into a circle */
  round: '50%';
}

export interface BorderWidthTokens {
  /** none: 0px */
  none: 0;
  /** thinner: 0.5px */
  thinner: 0.5;
  /** thin: 1px */
  thin: 1;
  /** thick: 1.5px */
  thick: 1.5;
  /** thicker: 2px */
  thicker: 2;
}

export interface BorderTokens {
  radius: BorderRadiusTokens;
  width: BorderWidthTokens;
}

/**
 * WorkIndia border token values
 * Matches Blade's border scale exactly.
 */
export const Border: BorderTokens = {
  radius: {
    none: 0,
    xsmall: 1,
    small: 2,
    medium: 4,
    large: 8,
    xlarge: 12,
    '2xlarge': 16,
    max: 9999,
    round: '50%',
  },
  width: {
    none: 0,
    thinner: 0.5,
    thin: 1,
    thick: 1.5,
    thicker: 2,
  },
};
