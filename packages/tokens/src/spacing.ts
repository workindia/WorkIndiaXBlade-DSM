/**
 * Restricted spacing tokens for WorkIndia Design System
 * Only these spacing values should be used across the design system.
 */

export interface WorkIndiaSpacingTokens {
  /** Small spacing (8px) */
  small: number;
  /** Medium spacing (16px) */
  medium: number;
  /** Large spacing (24px) */
  large: number;
  /** Extra large spacing (32px) */
  xlarge: number;
}

/**
 * WorkIndia spacing token values
 * These are the only allowed spacing values in the design system.
 */
export const WorkIndiaSpacing: WorkIndiaSpacingTokens = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};
