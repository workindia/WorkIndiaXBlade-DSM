/**
 * WorkIndia Theme Mapping
 * Maps restricted WorkIndia tokens to Blade's ThemeTokens structure
 */

import type { ThemeTokens } from '@razorpay/blade/tokens';
import { bladeTheme } from '@razorpay/blade/tokens';
import { WorkIndiaColors, type WorkIndiaColorScale } from '@workindia/tokens';
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
  const primaryScale: WorkIndiaColorScale = WorkIndiaColors.brand.primary;
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
              subtle: WorkIndiaColors.brand.primary[50],
              intense: WorkIndiaColors.brand.primary[500],
            },
          },
          text: {
            ...baseTheme.colors.onLight.surface.text,
            gray: {
              normal: WorkIndiaColors.text.body,
              subtle: WorkIndiaColors.text.subtle,
              muted: baseTheme.colors.onLight.surface.text.gray.muted,
              disabled: baseTheme.colors.onLight.surface.text.gray.disabled,
            },
            staticBlack: {
              normal: WorkIndiaColors.text.heading,
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
              default: WorkIndiaColors.brand.primary[500],
              highlighted: WorkIndiaColors.brand.primary[700],
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
              default: WorkIndiaColors.brand.primary[500],
              highlighted: WorkIndiaColors.brand.primary[700],
              disabled:
                baseTheme.colors.onLight.interactive.border.primary.disabled,
              faded: primaryFadedHighlighted,
            },
          },
          text: {
            ...baseTheme.colors.onLight.interactive.text,
            primary: {
              normal: WorkIndiaColors.brand.primary[500],
              subtle: WorkIndiaColors.brand.primary[700],
              muted: baseTheme.colors.onLight.interactive.text.primary.muted,
              disabled:
                baseTheme.colors.onLight.interactive.text.primary.disabled,
            },
          },
          icon: {
            ...baseTheme.colors.onLight.interactive.icon,
            primary: {
              normal: WorkIndiaColors.brand.primary[500],
              subtle: WorkIndiaColors.brand.primary[700],
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
              subtle: WorkIndiaColors.feedback.success[50],
              intense: WorkIndiaColors.feedback.success[500],
            },
            negative: {
              subtle: WorkIndiaColors.feedback.error[50],
              intense: WorkIndiaColors.feedback.error[500],
            },
          },
          border: {
            ...baseTheme.colors.onLight.feedback.border,
            positive: {
              subtle: WorkIndiaColors.feedback.success[200],
              intense: WorkIndiaColors.feedback.success[500],
            },
            negative: {
              subtle: WorkIndiaColors.feedback.error[200],
              intense: WorkIndiaColors.feedback.error[500],
            },
          },
          text: {
            ...baseTheme.colors.onLight.feedback.text,
            positive: {
              subtle: WorkIndiaColors.feedback.success[700],
              intense: WorkIndiaColors.feedback.success[900],
            },
            negative: {
              subtle: WorkIndiaColors.feedback.error[700],
              intense: WorkIndiaColors.feedback.error[900],
            },
          },
          icon: {
            ...baseTheme.colors.onLight.feedback.icon,
            positive: {
              subtle: WorkIndiaColors.feedback.success[500],
              intense: WorkIndiaColors.feedback.success[700],
            },
            negative: {
              subtle: WorkIndiaColors.feedback.error[500],
              intense: WorkIndiaColors.feedback.error[700],
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
              subtle: WorkIndiaColors.brand.primary[50],
              intense: WorkIndiaColors.brand.primary[500],
            },
          },
          text: {
            ...baseTheme.colors.onDark.surface.text,
            gray: {
              normal: WorkIndiaColors.text.body,
              subtle: WorkIndiaColors.text.subtle,
              muted: baseTheme.colors.onDark.surface.text.gray.muted,
              disabled: baseTheme.colors.onDark.surface.text.gray.disabled,
            },
            staticBlack: {
              normal: WorkIndiaColors.text.heading,
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
              default: WorkIndiaColors.brand.primary[500],
              highlighted: WorkIndiaColors.brand.primary[700],
              disabled:
                baseTheme.colors.onDark.interactive.background.primary.disabled,
              faded: primaryFaded,
              fadedHighlighted: primaryFadedHighlighted,
            },
          },
          border: {
            ...baseTheme.colors.onDark.interactive.border,
            primary: {
              default: WorkIndiaColors.brand.primary[500],
              highlighted: WorkIndiaColors.brand.primary[700],
              disabled:
                baseTheme.colors.onDark.interactive.border.primary.disabled,
              faded: primaryFadedHighlighted,
            },
          },
          text: {
            ...baseTheme.colors.onDark.interactive.text,
            primary: {
              normal: WorkIndiaColors.brand.primary[500],
              subtle: WorkIndiaColors.brand.primary[700],
              muted: baseTheme.colors.onDark.interactive.text.primary.muted,
              disabled:
                baseTheme.colors.onDark.interactive.text.primary.disabled,
            },
          },
          icon: {
            ...baseTheme.colors.onDark.interactive.icon,
            primary: {
              normal: WorkIndiaColors.brand.primary[500],
              subtle: WorkIndiaColors.brand.primary[700],
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
              subtle: WorkIndiaColors.feedback.success[50],
              intense: WorkIndiaColors.feedback.success[500],
            },
            negative: {
              subtle: WorkIndiaColors.feedback.error[50],
              intense: WorkIndiaColors.feedback.error[500],
            },
          },
          border: {
            ...baseTheme.colors.onDark.feedback.border,
            positive: {
              subtle: WorkIndiaColors.feedback.success[50],
              intense: WorkIndiaColors.feedback.success[500],
            },
            negative: {
              subtle: WorkIndiaColors.feedback.error[50],
              intense: WorkIndiaColors.feedback.error[500],
            },
          },
          text: {
            ...baseTheme.colors.onDark.feedback.text,
            positive: {
              subtle: WorkIndiaColors.feedback.success[50],
              intense: WorkIndiaColors.feedback.success[500],
            },
            negative: {
              subtle: WorkIndiaColors.feedback.error[50],
              intense: WorkIndiaColors.feedback.error[500],
            },
          },
          icon: {
            ...baseTheme.colors.onDark.feedback.icon,
            positive: {
              subtle: WorkIndiaColors.feedback.success[50],
              intense: WorkIndiaColors.feedback.success[500],
            },
            negative: {
              subtle: WorkIndiaColors.feedback.error[50],
              intense: WorkIndiaColors.feedback.error[500],
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
  }) as ThemeTokens;

  return workIndiaTheme;
};

export const workIndiaTheme = createWorkIndiaTheme();
