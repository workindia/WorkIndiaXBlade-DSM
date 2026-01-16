/**
 * WorkIndia Theme Mapping
 * Maps restricted WorkIndia tokens to Blade's ThemeTokens structure
 */

import type { ThemeTokens } from '@razorpay/blade/tokens';
import { bladeTheme } from '@razorpay/blade/tokens';
import { Colors, Typography, type ColorTokens } from '@workindia/tokens';
import { deepMerge } from './utils/deep-merge';

/**
 * Creates WorkIndia theme by mapping restricted tokens to Blade's theme structure
 * This ensures only WorkIndia-approved colors are used while maintaining Blade compatibility
 * @returns The WorkIndia theme
 */
const createWorkIndiaTheme = (): ThemeTokens => {
  // Start with Blade's default theme as base
  const baseTheme = { ...bladeTheme };

  const colors: ColorTokens = Colors;

  // Map WorkIndia restricted colors to Blade's color structure
  // We override only the colors we've restricted, keeping Blade defaults for others
  const workIndiaTheme = deepMerge(baseTheme, {
    name: 'workIndiaTheme',
    colors: {
      onLight: {
        ...baseTheme.colors.onLight,
        surface: {
          ...baseTheme.colors.onLight.surface,
          background: {
            ...baseTheme.colors.onLight.surface.background,
            gray: {
              subtle: colors.neutral.light[100],
              moderate: colors.neutral.light[50],
              intense: colors.neutral.light[0],
            },
            primary: {
              subtle: colors.chromatic.brand.a50,
              intense: colors.chromatic.brand[500],
            },
          },
          border: {
            ...baseTheme.colors.onLight.surface.border,
            gray: {
              normal: colors.neutral.light[400],
              subtle: colors.neutral.light[300],
              muted: colors.neutral.light.a100,
            },
            primary: {
              ...baseTheme.colors.onLight.surface.border.primary,
              normal: colors.chromatic.brand[500],
              muted: colors.chromatic.brand.a100,
            },
          },
          text: {
            ...baseTheme.colors.onLight.surface.text,
            primary: {
              normal: colors.chromatic.brand[500],
            },
            gray: {
              normal: colors.neutral.light[1200],
              subtle: colors.neutral.light[900],
              muted: colors.neutral.light[600],
              disabled: colors.neutral.light.a200,
            },
          },
          icon: {
            ...baseTheme.colors.onLight.surface.icon,
            gray: {
              normal: colors.neutral.light[1200],
              subtle: colors.neutral.light[900],
              muted: colors.neutral.light[600],
              disabled: colors.neutral.light.a200,
            },
            primary: {
              normal: colors.chromatic.brand[500],
            },
          },
        },
        interactive: {
          ...baseTheme.colors.onLight.interactive,
          background: {
            ...baseTheme.colors.onLight.interactive.background,
            positive: {
              default: colors.chromatic.emerald[600],
              highlighted: colors.chromatic.emerald[700],
              disabled: colors.chromatic.emerald.a50,
              faded: colors.chromatic.emerald.a50,
              fadedHighlighted: colors.chromatic.emerald.a100,
            },
            negative: {
              default: colors.chromatic.crimson[600],
              highlighted: colors.chromatic.crimson[700],
              disabled: colors.chromatic.crimson.a50,
              faded: colors.chromatic.crimson.a50,
              fadedHighlighted: colors.chromatic.crimson.a100,
            },
            notice: {
              default: colors.chromatic.amber[600],
              highlighted: colors.chromatic.amber[700],
              disabled: colors.chromatic.amber.a50,
              faded: colors.chromatic.amber.a50,
              fadedHighlighted: colors.chromatic.amber.a100,
            },
            information: {
              default: colors.chromatic.sky[600],
              highlighted: colors.chromatic.sky[700],
              disabled: colors.chromatic.sky.a50,
              faded: colors.chromatic.sky.a50,
              fadedHighlighted: colors.chromatic.sky.a100,
            },
            neutral: {
              default: colors.neutral.light[1000],
              highlighted: colors.neutral.light[1100],
              disabled: colors.neutral.light.a100,
              faded: colors.neutral.light.a100,
              fadedHighlighted: colors.neutral.light.a200,
            },
            gray: {
              default: colors.neutral.light.a50,
              highlighted: colors.neutral.light.a100,
              disabled: colors.neutral.light.a100,
              faded: colors.neutral.light.a25,
              fadedHighlighted: colors.neutral.light.a50,
            },
            primary: {
              default: colors.chromatic.brand[500],
              highlighted: colors.chromatic.brand[600],
              disabled: colors.chromatic.brand.a100,
              faded: colors.chromatic.brand.a50,
              fadedHighlighted: colors.chromatic.brand.a100,
            },
            staticBlack: {
              default: colors.neutral.blackNWhite.black[500],
              highlighted: colors.neutral.blackNWhite.black[500],
              disabled: colors.neutral.blackNWhite.black[200],
              faded: colors.neutral.blackNWhite.black[50],
              fadedHighlighted: colors.neutral.blackNWhite.black[100],
            },
            staticWhite: {
              default: colors.neutral.blackNWhite.white[500],
              highlighted: colors.neutral.blackNWhite.white[400],
              disabled: colors.neutral.blackNWhite.white[50],
              faded: colors.neutral.blackNWhite.white[50],
              fadedHighlighted: colors.neutral.blackNWhite.white[100],
            },
          },
          border: {
            ...baseTheme.colors.onLight.interactive.border,
            positive: {
              default: colors.chromatic.emerald[600],
              highlighted: colors.chromatic.emerald[700],
              disabled: colors.chromatic.emerald.a100,
              faded: colors.chromatic.emerald.a100,
            },
            negative: {
              default: colors.chromatic.crimson[600],
              highlighted: colors.chromatic.crimson[700],
              disabled: colors.chromatic.crimson.a100,
              faded: colors.chromatic.crimson.a100,
            },
            notice: {
              default: colors.chromatic.amber[600],
              highlighted: colors.chromatic.amber[700],
              disabled: colors.chromatic.amber.a100,
              faded: colors.chromatic.amber.a100,
            },
            information: {
              default: colors.chromatic.sky[600],
              highlighted: colors.chromatic.sky[700],
              disabled: colors.chromatic.sky.a100,
              faded: colors.chromatic.sky.a100,
            },
            neutral: {
              default: colors.neutral.light[700],
              highlighted: colors.neutral.light[700],
              disabled: colors.neutral.light[300],
              faded: colors.neutral.light.a100,
            },
            gray: {
              default: colors.neutral.light[200],
              highlighted: colors.neutral.light[300],
              disabled: colors.neutral.light[200],
              faded: colors.neutral.light.a100,
            },
            primary: {
              default: colors.chromatic.brand[500],
              highlighted: colors.chromatic.brand[500],
              disabled: colors.chromatic.brand.a100,
              faded: colors.chromatic.brand.a100,
            },
            staticBlack: {
              default: colors.neutral.blackNWhite.black[500],
              highlighted: colors.neutral.blackNWhite.black[500],
              disabled: colors.neutral.blackNWhite.black[100],
              faded: colors.neutral.blackNWhite.black[100],
            },
            staticWhite: {
              default: colors.neutral.blackNWhite.white[500],
              highlighted: colors.neutral.blackNWhite.white[400],
              disabled: colors.neutral.blackNWhite.white[100],
              faded: colors.neutral.blackNWhite.white[50],
            },
          },
          text: {
            ...baseTheme.colors.onLight.interactive.text,
            positive: {
              normal: colors.chromatic.emerald[700],
              subtle: colors.chromatic.emerald[600],
              muted: colors.chromatic.emerald[400],
              disabled: colors.chromatic.emerald.a200,
            },
            negative: {
              normal: colors.chromatic.crimson[600],
              subtle: colors.chromatic.crimson[500],
              muted: colors.chromatic.crimson[400],
              disabled: colors.chromatic.crimson.a200,
            },
            notice: {
              normal: colors.chromatic.amber[700],
              subtle: colors.chromatic.amber[600],
              muted: colors.chromatic.amber[400],
              disabled: colors.chromatic.amber.a200,
            },
            information: {
              normal: colors.chromatic.sky[700],
              subtle: colors.chromatic.sky[600],
              muted: colors.chromatic.sky[400],
              disabled: colors.chromatic.sky.a200,
            },
            neutral: {
              normal: colors.neutral.light[1100],
              subtle: colors.neutral.light[900],
              muted: colors.neutral.light[600],
              disabled: colors.neutral.light.a200,
            },
            gray: {
              normal: colors.neutral.light[1200],
              subtle: colors.neutral.light[900],
              muted: colors.neutral.light[600],
              disabled: colors.neutral.light.a200,
            },
            primary: {
              normal: colors.chromatic.brand[600],
              subtle: colors.chromatic.brand[500],
              muted: colors.chromatic.brand[400],
              disabled: colors.chromatic.brand.a200,
            },
            onPrimary: {
              normal: colors.neutral.blackNWhite.white[500],
              subtle: colors.neutral.blackNWhite.white[400],
              muted: colors.neutral.blackNWhite.white[300],
              disabled: colors.neutral.blackNWhite.white[100],
            },
            staticBlack: {
              normal: colors.neutral.blackNWhite.black[500],
              subtle: colors.neutral.blackNWhite.black[400],
              muted: colors.neutral.blackNWhite.black[300],
              disabled: colors.neutral.blackNWhite.black[100],
            },
            staticWhite: {
              normal: colors.neutral.blackNWhite.white[500],
              subtle: colors.neutral.blackNWhite.white[400],
              muted: colors.neutral.blackNWhite.white[300],
              disabled: colors.neutral.blackNWhite.white[100],
            },
          },
          icon: {
            ...baseTheme.colors.onLight.interactive.icon,
            positive: {
              normal: colors.chromatic.emerald[700],
              subtle: colors.chromatic.emerald[600],
              muted: colors.chromatic.emerald[400],
              disabled: colors.chromatic.emerald.a200,
            },
            negative: {
              normal: colors.chromatic.crimson[600],
              subtle: colors.chromatic.crimson[500],
              muted: colors.chromatic.crimson[400],
              disabled: colors.chromatic.crimson.a200,
            },
            notice: {
              normal: colors.chromatic.amber[700],
              subtle: colors.chromatic.amber[600],
              muted: colors.chromatic.amber[400],
              disabled: colors.chromatic.amber.a200,
            },
            information: {
              normal: colors.chromatic.sky[700],
              subtle: colors.chromatic.sky[600],
              muted: colors.chromatic.sky[400],
              disabled: colors.chromatic.sky.a200,
            },
            neutral: {
              normal: colors.neutral.light[1100],
              subtle: colors.neutral.light[900],
              muted: colors.neutral.light[600],
              disabled: colors.neutral.light.a200,
            },
            gray: {
              normal: colors.neutral.light[1200],
              subtle: colors.neutral.light[900],
              muted: colors.neutral.light[600],
              disabled: colors.neutral.light.a200,
            },
            primary: {
              normal: colors.chromatic.brand[600],
              subtle: colors.chromatic.brand[500],
              muted: colors.chromatic.brand[400],
              disabled: colors.chromatic.brand.a200,
            },
            onPrimary: {
              normal: colors.neutral.blackNWhite.white[500],
              subtle: colors.neutral.blackNWhite.white[400],
              muted: colors.neutral.blackNWhite.white[300],
              disabled: colors.neutral.blackNWhite.white[100],
            },
            staticBlack: {
              normal: colors.neutral.blackNWhite.black[500],
              subtle: colors.neutral.blackNWhite.black[400],
              muted: colors.neutral.blackNWhite.black[300],
              disabled: colors.neutral.blackNWhite.black[100],
            },
            staticWhite: {
              normal: colors.neutral.blackNWhite.white[500],
              subtle: colors.neutral.blackNWhite.white[400],
              muted: colors.neutral.blackNWhite.white[300],
              disabled: colors.neutral.blackNWhite.white[100],
            },
          },
        },
        feedback: {
          ...baseTheme.colors.onLight.feedback,
          background: {
            ...baseTheme.colors.onLight.feedback.background,
            positive: {
              ...baseTheme.colors.onLight.feedback.background.positive,
              intense: colors.chromatic.emerald[600],
            },
            negative: {
              subtle: colors.chromatic.crimson.a50,
              intense: colors.chromatic.crimson[600],
            },
            notice: {
              subtle: colors.chromatic.amber.a50,
              intense: colors.chromatic.amber[600],
            },
            information: {
              subtle: colors.chromatic.sky.a50,
              intense: colors.chromatic.sky[600],
            },
            neutral: {
              subtle: colors.neutral.light.a50,
              intense: colors.neutral.light[1000],
            },
          },
          border: {
            ...baseTheme.colors.onLight.feedback.border,
            positive: {
              subtle: colors.chromatic.emerald.a100,
              intense: colors.chromatic.emerald[700],
            },
            negative: {
              subtle: colors.chromatic.crimson.a100,
              intense: colors.chromatic.crimson[700],
            },
            notice: {
              subtle: colors.chromatic.amber.a100,
              intense: colors.chromatic.amber[700],
            },
            information: {
              subtle: colors.chromatic.sky.a100,
              intense: colors.chromatic.sky[700],
            },
            neutral: {
              subtle: colors.neutral.light.a100,
              intense: colors.neutral.light[1100],
            },
          },
          text: {
            ...baseTheme.colors.onLight.feedback.text,
            positive: {
              subtle: colors.chromatic.emerald[100],
              intense: colors.chromatic.emerald[700],
            },
            negative: {
              subtle: colors.chromatic.crimson[100],
              intense: colors.chromatic.crimson[600],
            },
            notice: {
              subtle: colors.chromatic.amber[100],
              intense: colors.chromatic.amber[700],
            },
            information: {
              subtle: colors.chromatic.sky[100],
              intense: colors.chromatic.sky[700],
            },
            neutral: {
              subtle: colors.neutral.light[500],
              intense: colors.neutral.light[1100],
            },
          },
          icon: {
            ...baseTheme.colors.onLight.feedback.icon,
            positive: {
              subtle: colors.chromatic.emerald[100],
              intense: colors.chromatic.emerald[700],
            },
            negative: {
              subtle: colors.chromatic.crimson[100],
              intense: colors.chromatic.crimson[600],
            },
            notice: {
              subtle: colors.chromatic.amber[100],
              intense: colors.chromatic.amber[700],
            },
            information: {
              subtle: colors.chromatic.sky[100],
              intense: colors.chromatic.sky[700],
            },
            neutral: {
              subtle: colors.neutral.light[500],
              intense: colors.neutral.light[1100],
            },
          },
        },
        overlay: {
          background: {
            moderate: colors.neutral.light.a200,
            subtle: colors.neutral.blackNWhite.black[200],
          },
        },
        popup: {
          ...baseTheme.colors.onLight.popup,
          background: {
            subtle: colors.neutral.light[0],
            intense: colors.neutral.light[1000],
          },
          border: {
            subtle: colors.neutral.light.a100,
            intense: colors.neutral.light[900],
          },
        },
        data: {
          ...baseTheme.colors.onLight.data,
          background: {
            ...baseTheme.colors.onLight.data.background,
            categorical: {
              ...baseTheme.colors.onLight.data.background.categorical,
              blue: {
                faint: colors.chromatic.brand[100],
                subtle: colors.chromatic.brand[200],
                moderate: colors.chromatic.brand[300],
                intense: colors.chromatic.brand[400],
                strong: colors.chromatic.brand[500],
              },
            },
            sequential: {
              ...baseTheme.colors.onLight.data.background.sequential,
              blue: {
                ...baseTheme.colors.onLight.data.background.sequential.blue,
                50: colors.chromatic.brand[50],
                100: colors.chromatic.brand[100],
                200: colors.chromatic.brand[200],
                300: colors.chromatic.brand[300],
                400: colors.chromatic.brand[400],
                500: colors.chromatic.brand[500],
                600: colors.chromatic.brand[600],
                700: colors.chromatic.brand[700],
                800: colors.chromatic.brand[800],
                900: colors.chromatic.brand[900],
                1000: colors.chromatic.brand[1000],
              },
            },
          },
        },
      },
      onDark: {
        ...baseTheme.colors.onDark,
        surface: {
          ...baseTheme.colors.onDark.surface,
          background: {
            ...baseTheme.colors.onDark.surface.background,
            gray: {
              subtle: colors.neutral.dark[1300],
              moderate: colors.neutral.dark[1100],
              intense: colors.neutral.dark[1000],
            },
            primary: {
              subtle: colors.chromatic.brand.a200,
              intense: colors.chromatic.brand[500],
            },
          },
          border: {
            ...baseTheme.colors.onDark.surface.border,
            gray: {
              normal: colors.neutral.dark[600],
              subtle: colors.neutral.dark[800],
              muted: colors.neutral.dark.a100,
            },
            primary: {
              normal: colors.chromatic.brand[500],
              muted: colors.chromatic.brand.a200,
            },
          },
          text: {
            ...baseTheme.colors.onDark.surface.text,
            primary: {
              normal: colors.chromatic.brand[300],
            },
            gray: {
              normal: colors.neutral.dark[0],
              subtle: colors.neutral.dark[50],
              muted: colors.neutral.dark[300],
              disabled: colors.neutral.dark.a200,
            },
          },
          icon: {
            ...baseTheme.colors.onDark.surface.icon,
            gray: {
              normal: colors.neutral.dark[0],
              subtle: colors.neutral.dark[50],
              muted: colors.neutral.dark[300],
              disabled: colors.neutral.dark.a200,
            },
            primary: {
              normal: colors.chromatic.brand[300],
            },
          },
        },
        interactive: {
          ...baseTheme.colors.onDark.interactive,
          background: {
            ...baseTheme.colors.onDark.interactive.background,
            positive: {
              default: colors.chromatic.emerald[600],
              highlighted: colors.chromatic.emerald[700],
              disabled: colors.chromatic.emerald.a100,
              faded: colors.chromatic.emerald.a150,
              fadedHighlighted: colors.chromatic.emerald.a200,
            },
            negative: {
              default: colors.chromatic.crimson[600],
              highlighted: colors.chromatic.crimson[700],
              disabled: colors.chromatic.crimson.a100,
              faded: colors.chromatic.crimson.a50,
              fadedHighlighted: colors.chromatic.crimson.a200,
            },
            notice: {
              default: colors.chromatic.amber[600],
              highlighted: colors.chromatic.amber[700],
              disabled: colors.chromatic.amber.a100,
              faded: colors.chromatic.amber.a150,
              fadedHighlighted: colors.chromatic.amber.a200,
            },
            information: {
              default: colors.chromatic.sky[600],
              highlighted: colors.chromatic.sky[700],
              disabled: colors.chromatic.sky.a100,
              faded: colors.chromatic.sky.a150,
              fadedHighlighted: colors.chromatic.sky.a200,
            },
            neutral: {
              default: colors.neutral.dark[50],
              highlighted: colors.neutral.dark[200],
              disabled: colors.neutral.dark.a100,
              faded: colors.neutral.dark.a50,
              fadedHighlighted: colors.neutral.dark.a100,
            },
            gray: {
              default: colors.neutral.dark.a50,
              highlighted: colors.neutral.dark.a100,
              disabled: colors.neutral.dark.a100,
              faded: colors.neutral.dark.a25,
              fadedHighlighted: colors.neutral.dark.a50,
            },
            primary: {
              default: colors.chromatic.brand[400],
              highlighted: colors.chromatic.brand[500],
              disabled: colors.chromatic.brand.a150,
              faded: colors.chromatic.brand.a150,
              fadedHighlighted: colors.chromatic.brand.a200,
            },
            staticBlack: {
              default: colors.neutral.blackNWhite.black[500],
              highlighted: colors.neutral.blackNWhite.black[500],
              disabled: colors.neutral.blackNWhite.black[200],
              faded: colors.neutral.blackNWhite.black[50],
              fadedHighlighted: colors.neutral.blackNWhite.black[100],
            },
            staticWhite: {
              default: colors.neutral.blackNWhite.white[500],
              highlighted: colors.neutral.blackNWhite.white[400],
              disabled: colors.neutral.blackNWhite.white[50],
              faded: colors.neutral.blackNWhite.white[50],
              fadedHighlighted: colors.neutral.blackNWhite.white[100],
            },
          },
          border: {
            ...baseTheme.colors.onDark.interactive.border,
            positive: {
              default: colors.chromatic.emerald[600],
              highlighted: colors.chromatic.emerald[700],
              disabled: colors.chromatic.emerald.a100,
              faded: colors.chromatic.emerald.a100,
            },
            negative: {
              default: colors.chromatic.crimson[600],
              highlighted: colors.chromatic.crimson[700],
              disabled: colors.chromatic.crimson.a100,
              faded: colors.chromatic.crimson.a100,
            },
            notice: {
              default: colors.chromatic.amber[600],
              highlighted: colors.chromatic.amber[700],
              disabled: colors.chromatic.amber.a100,
              faded: colors.chromatic.amber.a100,
            },
            information: {
              default: colors.chromatic.sky[600],
              highlighted: colors.chromatic.sky[700],
              disabled: colors.chromatic.sky.a100,
              faded: colors.chromatic.sky.a100,
            },
            neutral: {
              default: colors.neutral.dark[200],
              highlighted: colors.neutral.dark[200],
              disabled: colors.neutral.dark[800],
              faded: colors.neutral.dark.a100,
            },
            gray: {
              default: colors.neutral.dark[600],
              highlighted: colors.neutral.dark[600],
              disabled: colors.neutral.dark[700],
              faded: colors.neutral.dark.a100,
            },
            primary: {
              default: colors.chromatic.brand[400],
              highlighted: colors.chromatic.brand[500],
              disabled: colors.chromatic.brand.a200,
              faded: colors.chromatic.brand.a150,
            },
            staticBlack: {
              default: colors.neutral.blackNWhite.black[500],
              highlighted: colors.neutral.blackNWhite.black[500],
              disabled: colors.neutral.blackNWhite.black[100],
              faded: colors.neutral.blackNWhite.black[100],
            },
            staticWhite: {
              default: colors.neutral.blackNWhite.white[500],
              highlighted: colors.neutral.blackNWhite.white[400],
              disabled: colors.neutral.blackNWhite.white[100],
              faded: colors.neutral.blackNWhite.white[50],
            },
          },
          text: {
            ...baseTheme.colors.onDark.interactive.text,
            positive: {
              normal: colors.chromatic.emerald[400],
              subtle: colors.chromatic.emerald[500],
              muted: colors.chromatic.emerald[700],
              disabled: colors.chromatic.emerald.a200,
            },
            negative: {
              normal: colors.chromatic.crimson[400],
              subtle: colors.chromatic.crimson[500],
              muted: colors.chromatic.crimson[700],
              disabled: colors.chromatic.crimson.a200,
            },
            notice: {
              normal: colors.chromatic.amber[400],
              subtle: colors.chromatic.amber[500],
              muted: colors.chromatic.amber[700],
              disabled: colors.chromatic.amber.a200,
            },
            information: {
              normal: colors.chromatic.sky[400],
              subtle: colors.chromatic.sky[500],
              muted: colors.chromatic.sky[700],
              disabled: colors.chromatic.sky.a200,
            },
            neutral: {
              normal: colors.neutral.dark[50],
              subtle: colors.neutral.dark[300],
              muted: colors.neutral.dark[600],
              disabled: colors.neutral.dark.a200,
            },
            gray: {
              normal: colors.neutral.dark[0],
              subtle: colors.neutral.dark[50],
              muted: colors.neutral.dark[300],
              disabled: colors.neutral.dark.a200,
            },
            primary: {
              normal: colors.chromatic.brand[300],
              subtle: colors.chromatic.brand[400],
              muted: colors.chromatic.brand[600],
              disabled: colors.chromatic.brand.a400,
            },
            onPrimary: {
              normal: colors.neutral.blackNWhite.white[500],
              subtle: colors.neutral.blackNWhite.white[400],
              muted: colors.neutral.blackNWhite.white[300],
              disabled: colors.neutral.blackNWhite.white[100],
            },
            staticBlack: {
              normal: colors.neutral.blackNWhite.black[500],
              subtle: colors.neutral.blackNWhite.black[400],
              muted: colors.neutral.blackNWhite.black[300],
              disabled: colors.neutral.blackNWhite.black[100],
            },
            staticWhite: {
              normal: colors.neutral.blackNWhite.white[500],
              subtle: colors.neutral.blackNWhite.white[400],
              muted: colors.neutral.blackNWhite.white[300],
              disabled: colors.neutral.blackNWhite.white[100],
            },
          },
          icon: {
            ...baseTheme.colors.onDark.interactive.icon,
            positive: {
              normal: colors.chromatic.emerald[400],
              subtle: colors.chromatic.emerald[500],
              muted: colors.chromatic.emerald[700],
              disabled: colors.chromatic.emerald.a200,
            },
            negative: {
              normal: colors.chromatic.crimson[400],
              subtle: colors.chromatic.crimson[500],
              muted: colors.chromatic.crimson[700],
              disabled: colors.chromatic.crimson.a200,
            },
            notice: {
              normal: colors.chromatic.amber[400],
              subtle: colors.chromatic.amber[600],
              muted: colors.chromatic.amber[700],
              disabled: colors.chromatic.amber.a200,
            },
            information: {
              normal: colors.chromatic.sky[400],
              subtle: colors.chromatic.sky[500],
              muted: colors.chromatic.sky[700],
              disabled: colors.chromatic.sky.a200,
            },
            neutral: {
              normal: colors.neutral.dark[50],
              subtle: colors.neutral.dark[300],
              muted: colors.neutral.dark[600],
              disabled: colors.neutral.dark.a200,
            },
            gray: {
              normal: colors.neutral.dark[0],
              subtle: colors.neutral.dark[50],
              muted: colors.neutral.dark[300],
              disabled: colors.neutral.dark.a200,
            },
            primary: {
              normal: colors.chromatic.brand[300],
              subtle: colors.chromatic.brand[400],
              muted: colors.chromatic.brand[600],
              disabled: colors.chromatic.brand.a400,
            },
            onPrimary: {
              normal: colors.neutral.blackNWhite.white[500],
              subtle: colors.neutral.blackNWhite.white[400],
              muted: colors.neutral.blackNWhite.white[300],
              disabled: colors.neutral.blackNWhite.white[100],
            },
            staticBlack: {
              normal: colors.neutral.blackNWhite.black[500],
              subtle: colors.neutral.blackNWhite.black[400],
              muted: colors.neutral.blackNWhite.black[300],
              disabled: colors.neutral.blackNWhite.black[100],
            },
            staticWhite: {
              normal: colors.neutral.blackNWhite.white[500],
              subtle: colors.neutral.blackNWhite.white[400],
              muted: colors.neutral.blackNWhite.white[300],
              disabled: colors.neutral.blackNWhite.white[100],
            },
          },
        },
        feedback: {
          ...baseTheme.colors.onDark.feedback,
          background: {
            ...baseTheme.colors.onDark.feedback.background,
            positive: {
              ...baseTheme.colors.onDark.feedback.background.positive,
              intense: colors.chromatic.emerald[700],
            },
            negative: {
              subtle: colors.chromatic.crimson.a100,
              intense: colors.chromatic.crimson[700],
            },
            notice: {
              subtle: colors.chromatic.amber.a100,
              intense: colors.chromatic.amber[700],
            },
            information: {
              subtle: colors.chromatic.sky.a100,
              intense: colors.chromatic.sky[700],
            },
            neutral: {
              subtle: colors.neutral.dark.a100,
              intense: colors.neutral.dark[900],
            },
          },
          border: {
            ...baseTheme.colors.onDark.feedback.border,
            positive: {
              subtle: colors.chromatic.emerald.a200,
              intense: colors.chromatic.emerald[800],
            },
            negative: {
              subtle: colors.chromatic.crimson.a200,
              intense: colors.chromatic.crimson[800],
            },
            notice: {
              subtle: colors.chromatic.amber.a200,
              intense: colors.chromatic.amber[800],
            },
            information: {
              subtle: colors.chromatic.sky.a200,
              intense: colors.chromatic.sky[800],
            },
            neutral: {
              subtle: colors.neutral.dark.a100,
              intense: colors.neutral.dark[900],
            },
          },
          text: {
            ...baseTheme.colors.onDark.feedback.text,
            positive: {
              subtle: colors.chromatic.emerald[50],
              intense: colors.chromatic.emerald[400],
            },
            negative: {
              subtle: colors.chromatic.crimson[50],
              intense: colors.chromatic.crimson[400],
            },
            notice: {
              subtle: colors.chromatic.amber[50],
              intense: colors.chromatic.amber[400],
            },
            information: {
              subtle: colors.chromatic.sky[50],
              intense: colors.chromatic.sky[400],
            },
            neutral: {
              subtle: colors.neutral.dark[400],
              intense: colors.neutral.dark[50],
            },
          },
          icon: {
            ...baseTheme.colors.onDark.feedback.icon,
            positive: {
              subtle: colors.chromatic.emerald[50],
              intense: colors.chromatic.emerald[400],
            },
            negative: {
              subtle: colors.chromatic.crimson[50],
              intense: colors.chromatic.crimson[400],
            },
            notice: {
              subtle: colors.chromatic.amber[50],
              intense: colors.chromatic.amber[400],
            },
            information: {
              subtle: colors.chromatic.sky[50],
              intense: colors.chromatic.sky[400],
            },
            neutral: {
              subtle: colors.neutral.dark[700],
              intense: colors.neutral.dark[50],
            },
          },
        },
        overlay: {
          background: {
            moderate: colors.neutral.dark.a200,
            subtle: colors.neutral.blackNWhite.black[400],
          },
        },
        popup: {
          ...baseTheme.colors.onDark.popup,
          background: {
            subtle: colors.neutral.dark[1000],
            intense: colors.neutral.dark[700],
          },
          border: {
            subtle: colors.neutral.dark.a100,
            intense: colors.neutral.dark.a100,
          },
        },
        data: {
          ...baseTheme.colors.onDark.data,
          background: {
            ...baseTheme.colors.onDark.data.background,
            categorical: {
              ...baseTheme.colors.onDark.data.background.categorical,
              blue: {
                faint: colors.chromatic.brand[800],
                subtle: colors.chromatic.brand[700],
                moderate: colors.chromatic.brand[600],
                intense: colors.chromatic.brand[500],
                strong: colors.chromatic.brand[400],
              },
            },
            sequential: {
              ...baseTheme.colors.onDark.data.background.sequential,
              blue: {
                ...baseTheme.colors.onDark.data.background.sequential.blue,
                50: colors.chromatic.brand[1000],
                100: colors.chromatic.brand[900],
                200: colors.chromatic.brand[800],
                300: colors.chromatic.brand[700],
                400: colors.chromatic.brand[600],
                500: colors.chromatic.brand[500],
                600: colors.chromatic.brand[400],
                700: colors.chromatic.brand[300],
                800: colors.chromatic.brand[200],
                900: colors.chromatic.brand[100],
                1000: colors.chromatic.brand[50],
              },
            },
          },
        },
      },
    },
    spacing: {
      ...baseTheme.spacing,
    },
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
