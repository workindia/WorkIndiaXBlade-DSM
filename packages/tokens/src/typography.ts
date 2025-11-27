/**
 * Typography tokens for WorkIndia Design System
 * Uses Inter font family as the primary typeface.
 *
 * IMPORTANT: To use Inter font, you must import Blade's fonts.css:
 * import '@razorpay/blade/fonts.css';
 */

export interface TypographyTokens {
  fontFamily: {
    /** Text font family - Inter for body text and UI elements */
    text: string;
    /** Heading font family - Inter for headings */
    heading: string;
    /** Code font family - Monospace for code snippets */
    code: string;
  };
  fontSize: {
    /** Small font size (12px) */
    small: number;
    /** Base font size (14px) */
    base: number;
    /** Medium font size (16px) */
    medium: number;
    /** Large font size (20px) */
    large: number;
    /** Extra large font size (24px) */
    xlarge: number;
  };
  fontWeight: {
    /** Regular weight */
    regular: number;
    /** Medium weight */
    medium: number;
    /** Bold weight */
    bold: number;
  };
}

/**
 * WorkIndia typography token values
 * Uses Inter font family for all text and headings.
 */
export const Typography: TypographyTokens = {
  fontFamily: {
    /** Inter font with fallbacks - matches Blade's Inter font setup */
    text: '"Inter", "Inter Fallback Arial", Arial, sans-serif',
    /** Inter font for headings */
    heading: '"Inter", "Inter Fallback Arial", Arial, sans-serif',
    /** Monospace font for code */
    code: '"Menlo", "San Francisco Mono", "Courier New", "Roboto Mono", monospace',
  },
  fontSize: {
    small: 12,
    base: 14,
    medium: 16,
    large: 20,
    xlarge: 24,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};
