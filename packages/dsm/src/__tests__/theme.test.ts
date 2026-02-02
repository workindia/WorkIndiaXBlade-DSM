/**
 * Tests for WorkIndia theme
 */

import { workIndiaTheme } from '../theme';
import { Colors } from '@workindia/tokens';

describe('workIndiaTheme', () => {
  describe('Theme structure validation', () => {
    it('should export workIndiaTheme', () => {
      expect(workIndiaTheme).toBeDefined();
      expect(typeof workIndiaTheme).toBe('object');
    });

    it('should have name property', () => {
      expect(workIndiaTheme.name).toBeDefined();
      expect(workIndiaTheme.name).toBe('workIndiaTheme');
    });

    it('should have colors property', () => {
      expect(workIndiaTheme.colors).toBeDefined();
      expect(typeof workIndiaTheme.colors).toBe('object');
    });

    it('should have onLight and onDark color schemes', () => {
      expect(workIndiaTheme.colors.onLight).toBeDefined();
      expect(workIndiaTheme.colors.onDark).toBeDefined();
    });
  });

  describe('Color mapping validation', () => {
    describe('onLight colors', () => {
      it('should map WorkIndia brand colors to primary colors', () => {
        const primary =
          workIndiaTheme.colors.onLight.interactive.background.primary;

        expect(primary.default).toBe(Colors.chromatic.brand[500]);
        expect(primary.highlighted).toBe(Colors.chromatic.brand[600]);
      });

      it('should map WorkIndia brand colors to primary border colors', () => {
        const primaryBorder =
          workIndiaTheme.colors.onLight.interactive.border.primary;

        expect(primaryBorder.default).toBe(Colors.chromatic.brand[500]);
        expect(primaryBorder.highlighted).toBe(Colors.chromatic.brand[500]);
      });

      it('should map WorkIndia brand colors to primary text colors', () => {
        const primaryText =
          workIndiaTheme.colors.onLight.interactive.text.primary;

        expect(primaryText.normal).toBe(Colors.chromatic.brand[600]);
        expect(primaryText.subtle).toBe(Colors.chromatic.brand[500]);
      });

      it('should map WorkIndia brand colors to primary icon colors', () => {
        const primaryIcon =
          workIndiaTheme.colors.onLight.interactive.icon.primary;

        expect(primaryIcon.normal).toBe(Colors.chromatic.brand[600]);
        expect(primaryIcon.subtle).toBe(Colors.chromatic.brand[500]);
      });

      it('should map WorkIndia emerald colors to positive feedback colors', () => {
        const positive =
          workIndiaTheme.colors.onLight.feedback.background.positive;

        // subtle is not overridden, uses baseTheme default
        expect(positive.intense).toBe(Colors.chromatic.emerald[600]);
      });

      it('should map WorkIndia crimson colors to negative feedback colors', () => {
        const negative =
          workIndiaTheme.colors.onLight.feedback.background.negative;

        expect(negative.subtle).toBe(Colors.chromatic.crimson.a50);
        expect(negative.intense).toBe(Colors.chromatic.crimson[600]);
      });

      it('should map WorkIndia neutral colors to surface text colors', () => {
        const grayText = workIndiaTheme.colors.onLight.surface.text.gray;

        expect(grayText.normal).toBe(Colors.neutral.light[1200]);
        expect(grayText.subtle).toBe(Colors.neutral.light[900]);
      });

      it('should map WorkIndia brand colors to surface background', () => {
        const surfaceBg =
          workIndiaTheme.colors.onLight.surface.background.primary;

        expect(surfaceBg.subtle).toBe(Colors.chromatic.brand.a50);
        expect(surfaceBg.intense).toBe(Colors.chromatic.brand[500]);
      });
    });

    describe('onDark colors', () => {
      it('should map WorkIndia brand colors to primary colors in dark mode', () => {
        const primary =
          workIndiaTheme.colors.onDark.interactive.background.primary;

        expect(primary.default).toBe(Colors.chromatic.brand[400]);
        expect(primary.highlighted).toBe(Colors.chromatic.brand[500]);
      });

      it('should map WorkIndia emerald colors to positive feedback colors in dark mode', () => {
        const positive =
          workIndiaTheme.colors.onDark.feedback.background.positive;

        // subtle is not overridden, uses baseTheme default
        expect(positive.intense).toBe(Colors.chromatic.emerald[700]);
      });

      it('should map WorkIndia crimson colors to negative feedback colors in dark mode', () => {
        const negative =
          workIndiaTheme.colors.onDark.feedback.background.negative;

        expect(negative.subtle).toBe(Colors.chromatic.crimson.a100);
        expect(negative.intense).toBe(Colors.chromatic.crimson[700]);
      });
    });
  });

  describe('Alpha color variants', () => {
    it('should use WorkIndia brand alpha colors for primary faded variants', () => {
      const primaryFaded =
        workIndiaTheme.colors.onLight.interactive.background.primary.faded;
      const primaryFadedHighlighted =
        workIndiaTheme.colors.onLight.interactive.background.primary
          .fadedHighlighted;

      expect(primaryFaded).toBe(Colors.chromatic.brand.a50);
      expect(primaryFadedHighlighted).toBe(Colors.chromatic.brand.a100);
    });

    it('should use WorkIndia brand alpha colors for primary border faded variants', () => {
      const primaryBorderFaded =
        workIndiaTheme.colors.onLight.interactive.border.primary.faded;

      expect(primaryBorderFaded).toBe(Colors.chromatic.brand.a100);
    });
  });

  describe('Theme consistency', () => {
    it('should have consistent structure between onLight and onDark', () => {
      const lightKeys = Object.keys(workIndiaTheme.colors.onLight);
      const darkKeys = Object.keys(workIndiaTheme.colors.onDark);

      expect(lightKeys.sort()).toEqual(darkKeys.sort());
    });

    it('should preserve Blade default colors where not overridden', () => {
      // Check that disabled colors are preserved from Blade defaults
      const primaryDisabled =
        workIndiaTheme.colors.onLight.interactive.background.primary.disabled;

      // Should exist and be a string (from Blade defaults)
      expect(primaryDisabled).toBeDefined();
      expect(typeof primaryDisabled).toBe('string');
    });
  });

  describe('Spacing tokens', () => {
    it('should have spacing property', () => {
      expect(workIndiaTheme.spacing).toBeDefined();
      expect(typeof workIndiaTheme.spacing).toBe('object');
    });
  });

  describe('Typography tokens', () => {
    it('should have typography property', () => {
      expect(workIndiaTheme.typography).toBeDefined();
      expect(typeof workIndiaTheme.typography).toBe('object');
    });

    it('should have onDesktop typography', () => {
      expect(workIndiaTheme.typography.onDesktop).toBeDefined();
      expect(workIndiaTheme.typography.onDesktop.fonts).toBeDefined();
    });

    it('should have onMobile typography', () => {
      expect(workIndiaTheme.typography.onMobile).toBeDefined();
      expect(workIndiaTheme.typography.onMobile.fonts).toBeDefined();
    });

    it('should have correct font families', () => {
      const { onDesktop, onMobile } = workIndiaTheme.typography;

      // Desktop fonts
      expect(onDesktop.fonts.family).toBeDefined();
      expect(onDesktop.fonts.family.text).toBeDefined();
      expect(onDesktop.fonts.family.heading).toBeDefined();
      expect(onDesktop.fonts.family.code).toBeDefined();

      // Mobile fonts
      expect(onMobile.fonts.family).toBeDefined();
      expect(onMobile.fonts.family.text).toBeDefined();
      expect(onMobile.fonts.family.heading).toBeDefined();
      expect(onMobile.fonts.family.code).toBeDefined();
    });
  });

  describe('Dark mode feedback colors', () => {
    it('should have correct positive border colors in dark mode', () => {
      const positiveBorder =
        workIndiaTheme.colors.onDark.feedback.border.positive;

      expect(positiveBorder.subtle).toBe(Colors.chromatic.emerald.a200);
      expect(positiveBorder.intense).toBe(Colors.chromatic.emerald[800]);
    });

    it('should have correct negative border colors in dark mode', () => {
      const negativeBorder =
        workIndiaTheme.colors.onDark.feedback.border.negative;

      expect(negativeBorder.subtle).toBe(Colors.chromatic.crimson.a200);
      expect(negativeBorder.intense).toBe(Colors.chromatic.crimson[800]);
    });

    it('should have correct positive text colors in dark mode', () => {
      const positiveText = workIndiaTheme.colors.onDark.feedback.text.positive;

      expect(positiveText.subtle).toBe(Colors.chromatic.emerald[50]);
      expect(positiveText.intense).toBe(Colors.chromatic.emerald[400]);
    });

    it('should have correct negative text colors in dark mode', () => {
      const negativeText = workIndiaTheme.colors.onDark.feedback.text.negative;

      expect(negativeText.subtle).toBe(Colors.chromatic.crimson[50]);
      expect(negativeText.intense).toBe(Colors.chromatic.crimson[400]);
    });

    it('should have correct positive icon colors in dark mode', () => {
      const positiveIcon = workIndiaTheme.colors.onDark.feedback.icon.positive;

      expect(positiveIcon.subtle).toBe(Colors.chromatic.emerald[50]);
      expect(positiveIcon.intense).toBe(Colors.chromatic.emerald[400]);
    });

    it('should have correct negative icon colors in dark mode', () => {
      const negativeIcon = workIndiaTheme.colors.onDark.feedback.icon.negative;

      expect(negativeIcon.subtle).toBe(Colors.chromatic.crimson[50]);
      expect(negativeIcon.intense).toBe(Colors.chromatic.crimson[400]);
    });

    it('should have correct dark mode surface background colors', () => {
      const surfaceBg = workIndiaTheme.colors.onDark.surface.background.primary;

      expect(surfaceBg.subtle).toBe(Colors.chromatic.brand.a200);
      expect(surfaceBg.intense).toBe(Colors.chromatic.brand[500]);
    });

    it('should have correct dark mode surface text colors', () => {
      const grayText = workIndiaTheme.colors.onDark.surface.text.gray;

      expect(grayText.normal).toBe(Colors.neutral.dark[0]);
      expect(grayText.subtle).toBe(Colors.neutral.dark[50]);
    });

    it('should have correct dark mode staticBlack text colors', () => {
      const staticBlackText =
        workIndiaTheme.colors.onDark.surface.text.staticBlack;

      // staticBlack is not overridden in onDark, uses baseTheme default
      expect(staticBlackText.normal).toBeDefined();
      expect(typeof staticBlackText.normal).toBe('string');
    });

    it('should have correct dark mode interactive colors', () => {
      const primary =
        workIndiaTheme.colors.onDark.interactive.background.primary;

      expect(primary.default).toBe(Colors.chromatic.brand[400]);
      expect(primary.highlighted).toBe(Colors.chromatic.brand[500]);
    });

    it('should have correct dark mode interactive border colors', () => {
      const primaryBorder =
        workIndiaTheme.colors.onDark.interactive.border.primary;

      expect(primaryBorder.default).toBe(Colors.chromatic.brand[400]);
      expect(primaryBorder.highlighted).toBe(Colors.chromatic.brand[500]);
    });

    it('should have correct dark mode interactive text colors', () => {
      const primaryText = workIndiaTheme.colors.onDark.interactive.text.primary;

      expect(primaryText.normal).toBe(Colors.chromatic.brand[300]);
      expect(primaryText.subtle).toBe(Colors.chromatic.brand[400]);
    });

    it('should have correct dark mode interactive icon colors', () => {
      const primaryIcon = workIndiaTheme.colors.onDark.interactive.icon.primary;

      expect(primaryIcon.normal).toBe(Colors.chromatic.brand[300]);
      expect(primaryIcon.subtle).toBe(Colors.chromatic.brand[400]);
    });
  });

  describe('Light mode feedback colors - extended', () => {
    it('should have correct positive border colors in light mode', () => {
      const positiveBorder =
        workIndiaTheme.colors.onLight.feedback.border.positive;

      expect(positiveBorder.subtle).toBe(Colors.chromatic.emerald.a100);
      expect(positiveBorder.intense).toBe(Colors.chromatic.emerald[700]);
    });

    it('should have correct negative border colors in light mode', () => {
      const negativeBorder =
        workIndiaTheme.colors.onLight.feedback.border.negative;

      expect(negativeBorder.subtle).toBe(Colors.chromatic.crimson.a100);
      expect(negativeBorder.intense).toBe(Colors.chromatic.crimson[700]);
    });

    it('should have correct positive text colors in light mode', () => {
      const positiveText = workIndiaTheme.colors.onLight.feedback.text.positive;

      expect(positiveText.subtle).toBe(Colors.chromatic.emerald[100]);
      expect(positiveText.intense).toBe(Colors.chromatic.emerald[700]);
    });

    it('should have correct negative text colors in light mode', () => {
      const negativeText = workIndiaTheme.colors.onLight.feedback.text.negative;

      expect(negativeText.subtle).toBe(Colors.chromatic.crimson[100]);
      expect(negativeText.intense).toBe(Colors.chromatic.crimson[600]);
    });

    it('should have correct positive icon colors in light mode', () => {
      const positiveIcon = workIndiaTheme.colors.onLight.feedback.icon.positive;

      expect(positiveIcon.subtle).toBe(Colors.chromatic.emerald[100]);
      expect(positiveIcon.intense).toBe(Colors.chromatic.emerald[700]);
    });

    it('should have correct negative icon colors in light mode', () => {
      const negativeIcon = workIndiaTheme.colors.onLight.feedback.icon.negative;

      expect(negativeIcon.subtle).toBe(Colors.chromatic.crimson[100]);
      expect(negativeIcon.intense).toBe(Colors.chromatic.crimson[600]);
    });

    it('should have correct staticBlack text colors in light mode', () => {
      const staticBlackText =
        workIndiaTheme.colors.onLight.surface.text.staticBlack;

      // staticBlack is not overridden in onLight, uses baseTheme default
      expect(staticBlackText.normal).toBeDefined();
      expect(typeof staticBlackText.normal).toBe('string');
    });
  });
});
