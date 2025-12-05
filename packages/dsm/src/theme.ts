/**
 * WorkIndia Theme Mapping
 * Maps restricted WorkIndia tokens to Blade's ThemeTokens structure
 */

import type { ThemeTokens } from '@razorpay/blade/tokens';
import { bladeTheme } from '@razorpay/blade/tokens';
import {
  Colors,
  Typography,
  type ChromaticColorScale,
  type ColorTokens,
} from '@workindia/tokens';
import { deepMerge } from './utils/deep-merge';

/**
 * Creates WorkIndia theme by mapping restricted tokens to Blade's theme structure
 * This ensures only WorkIndia-approved colors are used while maintaining Blade compatibility
 * @returns The WorkIndia theme
 */
const createWorkIndiaTheme = (): ThemeTokens => {
  // Start with Blade's default theme as base
  const baseTheme = { ...bladeTheme };

  // Extract alpha color values to avoid type inference issues in nested object
  // Accessing through the scale object ensures proper type inference
  const colors: ColorTokens = Colors;
  const primaryScale: ChromaticColorScale = colors.chromatic.brand;
  const primaryFaded = primaryScale.a50;
  const primaryFadedHighlighted = primaryScale.a100;

  // Map WorkIndia restricted colors to Blade's color structure
  // We override only the colors we've restricted, keeping Blade defaults for others
  const workIndiaTheme = deepMerge(baseTheme, {
    name: 'workIndiaTheme',
    colors: {
      onLight: {
        ...baseTheme.colors.onLight,
        // Map brand colors
        surface: {
          ...baseTheme.colors.onLight.surface,
          background: {
            ...baseTheme.colors.onLight.surface.background,
            primary: {
              subtle: colors.chromatic.brand[50],
              intense: colors.chromatic.brand[500],
            },
          },
          text: {
            ...baseTheme.colors.onLight.surface.text,
            gray: {
              normal: colors.neutral.light[900],
              subtle: colors.neutral.light[700],
              muted: baseTheme.colors.onLight.surface.text.gray.muted,
              disabled: baseTheme.colors.onLight.surface.text.gray.disabled,
            },
            staticBlack: {
              normal: colors.neutral.blackNWhite.black[500],
              subtle: baseTheme.colors.onLight.surface.text.staticBlack.subtle,
              muted: baseTheme.colors.onLight.surface.text.staticBlack.muted,
              disabled:
                baseTheme.colors.onLight.surface.text.staticBlack.disabled,
            },
          },
        },
        interactive: {
          ...baseTheme.colors.onLight.interactive,
          background: {
            ...baseTheme.colors.onLight.interactive.background,
            primary: {
              default: colors.chromatic.brand[500],
              highlighted: colors.chromatic.brand[700],
              disabled:
                baseTheme.colors.onLight.interactive.background.primary
                  .disabled,
              faded: primaryFaded,
              fadedHighlighted: primaryFadedHighlighted,
            },
          },
          border: {
            ...baseTheme.colors.onLight.interactive.border,
            primary: {
              default: colors.chromatic.brand[500],
              highlighted: colors.chromatic.brand[700],
              disabled:
                baseTheme.colors.onLight.interactive.border.primary.disabled,
              faded: primaryFadedHighlighted,
            },
          },
          text: {
            ...baseTheme.colors.onLight.interactive.text,
            primary: {
              normal: colors.chromatic.brand[500],
              subtle: colors.chromatic.brand[700],
              muted: baseTheme.colors.onLight.interactive.text.primary.muted,
              disabled:
                baseTheme.colors.onLight.interactive.text.primary.disabled,
            },
          },
          icon: {
            ...baseTheme.colors.onLight.interactive.icon,
            primary: {
              normal: colors.chromatic.brand[500],
              subtle: colors.chromatic.brand[700],
              muted: baseTheme.colors.onLight.interactive.icon.primary.muted,
              disabled:
                baseTheme.colors.onLight.interactive.icon.primary.disabled,
            },
          },
        },
        // Map feedback colors
        feedback: {
          ...baseTheme.colors.onLight.feedback,
          background: {
            ...baseTheme.colors.onLight.feedback.background,
            positive: {
              subtle: colors.chromatic.emerald[50],
              intense: colors.chromatic.emerald[500],
            },
            negative: {
              subtle: colors.chromatic.crimson[50],
              intense: colors.chromatic.crimson[500],
            },
          },
          border: {
            ...baseTheme.colors.onLight.feedback.border,
            positive: {
              subtle: colors.chromatic.emerald[200],
              intense: colors.chromatic.emerald[500],
            },
            negative: {
              subtle: colors.chromatic.crimson[200],
              intense: colors.chromatic.crimson[500],
            },
          },
          text: {
            ...baseTheme.colors.onLight.feedback.text,
            positive: {
              subtle: colors.chromatic.emerald[700],
              intense: colors.chromatic.emerald[900],
            },
            negative: {
              subtle: colors.chromatic.crimson[700],
              intense: colors.chromatic.crimson[900],
            },
          },
          icon: {
            ...baseTheme.colors.onLight.feedback.icon,
            positive: {
              subtle: colors.chromatic.emerald[500],
              intense: colors.chromatic.emerald[700],
            },
            negative: {
              subtle: colors.chromatic.crimson[500],
              intense: colors.chromatic.crimson[700],
            },
          },
        },
      },
      // Map dark mode colors (using same restricted colors)
      onDark: {
        ...baseTheme.colors.onDark,
        // Similar mappings for dark mode
        surface: {
          ...baseTheme.colors.onDark.surface,
          background: {
            ...baseTheme.colors.onDark.surface.background,
            primary: {
              subtle: colors.chromatic.brand[50],
              intense: colors.chromatic.brand[500],
            },
          },
          text: {
            ...baseTheme.colors.onDark.surface.text,
            gray: {
              normal: colors.neutral.light[900],
              subtle: colors.neutral.light[700],
              muted: baseTheme.colors.onDark.surface.text.gray.muted,
              disabled: baseTheme.colors.onDark.surface.text.gray.disabled,
            },
            staticBlack: {
              normal: colors.neutral.blackNWhite.black[500],
              subtle: baseTheme.colors.onDark.surface.text.staticBlack.subtle,
              muted: baseTheme.colors.onDark.surface.text.staticBlack.muted,
              disabled:
                baseTheme.colors.onDark.surface.text.staticBlack.disabled,
            },
          },
        },
        interactive: {
          ...baseTheme.colors.onDark.interactive,
          background: {
            ...baseTheme.colors.onDark.interactive.background,
            primary: {
              default: colors.chromatic.brand[500],
              highlighted: colors.chromatic.brand[700],
              disabled:
                baseTheme.colors.onDark.interactive.background.primary.disabled,
              faded: primaryFaded,
              fadedHighlighted: primaryFadedHighlighted,
            },
          },
          border: {
            ...baseTheme.colors.onDark.interactive.border,
            primary: {
              default: colors.chromatic.brand[500],
              highlighted: colors.chromatic.brand[700],
              disabled:
                baseTheme.colors.onDark.interactive.border.primary.disabled,
              faded: primaryFadedHighlighted,
            },
          },
          text: {
            ...baseTheme.colors.onDark.interactive.text,
            primary: {
              normal: colors.chromatic.brand[500],
              subtle: colors.chromatic.brand[700],
              muted: baseTheme.colors.onDark.interactive.text.primary.muted,
              disabled:
                baseTheme.colors.onDark.interactive.text.primary.disabled,
            },
          },
          icon: {
            ...baseTheme.colors.onDark.interactive.icon,
            primary: {
              normal: colors.chromatic.brand[500],
              subtle: colors.chromatic.brand[700],
              muted: baseTheme.colors.onDark.interactive.icon.primary.muted,
              disabled:
                baseTheme.colors.onDark.interactive.icon.primary.disabled,
            },
          },
        },
        feedback: {
          ...baseTheme.colors.onDark.feedback,
          background: {
            ...baseTheme.colors.onDark.feedback.background,
            positive: {
              subtle: colors.chromatic.emerald[50],
              intense: colors.chromatic.emerald[500],
            },
            negative: {
              subtle: colors.chromatic.crimson[50],
              intense: colors.chromatic.crimson[500],
            },
          },
          border: {
            ...baseTheme.colors.onDark.feedback.border,
            positive: {
              subtle: colors.chromatic.emerald[50],
              intense: colors.chromatic.emerald[500],
            },
            negative: {
              subtle: colors.chromatic.crimson[50],
              intense: colors.chromatic.crimson[500],
            },
          },
          text: {
            ...baseTheme.colors.onDark.feedback.text,
            positive: {
              subtle: colors.chromatic.emerald[50],
              intense: colors.chromatic.emerald[500],
            },
            negative: {
              subtle: colors.chromatic.crimson[50],
              intense: colors.chromatic.crimson[500],
            },
          },
          icon: {
            ...baseTheme.colors.onDark.feedback.icon,
            positive: {
              subtle: colors.chromatic.emerald[50],
              intense: colors.chromatic.emerald[500],
            },
            negative: {
              subtle: colors.chromatic.crimson[50],
              intense: colors.chromatic.crimson[500],
            },
          },
        },
      },
    },
    // Map spacing tokens (if we want to restrict spacing)
    spacing: {
      ...baseTheme.spacing,
      // Override specific spacing values if needed
      // For now, we keep Blade defaults but can restrict later
    },
    // Map typography tokens - override font families to use Inter for headings
    typography: {
      onDesktop: {
        ...baseTheme.typography.onDesktop,
        fonts: {
          ...baseTheme.typography.onDesktop.fonts,
          family: {
            text: Typography.fontFamily.text,
            heading: Typography.fontFamily.heading,
            code: Typography.fontFamily.code,
          },
        },
      },
      onMobile: {
        ...baseTheme.typography.onMobile,
        fonts: {
          ...baseTheme.typography.onMobile.fonts,
          family: {
            text: Typography.fontFamily.text,
            heading: Typography.fontFamily.heading,
            code: Typography.fontFamily.code,
          },
        },
      },
    },
  }) as ThemeTokens;

  return workIndiaTheme;
};

export const workIndiaTheme = createWorkIndiaTheme();
