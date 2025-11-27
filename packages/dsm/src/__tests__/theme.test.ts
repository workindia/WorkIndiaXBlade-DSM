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
        expect(primary.highlighted).toBe(Colors.chromatic.brand[700]);
      });

      it('should map WorkIndia brand colors to primary border colors', () => {
        const primaryBorder =
          workIndiaTheme.colors.onLight.interactive.border.primary;

        expect(primaryBorder.default).toBe(Colors.chromatic.brand[500]);
        expect(primaryBorder.highlighted).toBe(Colors.chromatic.brand[700]);
      });

      it('should map WorkIndia brand colors to primary text colors', () => {
        const primaryText =
          workIndiaTheme.colors.onLight.interactive.text.primary;

        expect(primaryText.normal).toBe(Colors.chromatic.brand[500]);
        expect(primaryText.subtle).toBe(Colors.chromatic.brand[700]);
      });

      it('should map WorkIndia brand colors to primary icon colors', () => {
        const primaryIcon =
          workIndiaTheme.colors.onLight.interactive.icon.primary;

        expect(primaryIcon.normal).toBe(Colors.chromatic.brand[500]);
        expect(primaryIcon.subtle).toBe(Colors.chromatic.brand[700]);
      });

      it('should map WorkIndia emerald colors to positive feedback colors', () => {
        const positive =
          workIndiaTheme.colors.onLight.feedback.background.positive;

        expect(positive.subtle).toBe(Colors.chromatic.emerald[50]);
        expect(positive.intense).toBe(Colors.chromatic.emerald[500]);
      });

      it('should map WorkIndia crimson colors to negative feedback colors', () => {
        const negative =
          workIndiaTheme.colors.onLight.feedback.background.negative;

        expect(negative.subtle).toBe(Colors.chromatic.crimson[50]);
        expect(negative.intense).toBe(Colors.chromatic.crimson[500]);
      });

      it('should map WorkIndia neutral colors to surface text colors', () => {
        const grayText = workIndiaTheme.colors.onLight.surface.text.gray;

        expect(grayText.normal).toBe(Colors.neutral.light[900]);
        expect(grayText.subtle).toBe(Colors.neutral.light[700]);
      });

      it('should map WorkIndia brand colors to surface background', () => {
        const surfaceBg =
          workIndiaTheme.colors.onLight.surface.background.primary;

        expect(surfaceBg.subtle).toBe(Colors.chromatic.brand[50]);
        expect(surfaceBg.intense).toBe(Colors.chromatic.brand[500]);
      });
    });

    describe('onDark colors', () => {
      it('should map WorkIndia brand colors to primary colors in dark mode', () => {
        const primary =
          workIndiaTheme.colors.onDark.interactive.background.primary;

        expect(primary.default).toBe(Colors.chromatic.brand[500]);
        expect(primary.highlighted).toBe(Colors.chromatic.brand[700]);
      });

      it('should map WorkIndia emerald colors to positive feedback colors in dark mode', () => {
        const positive =
          workIndiaTheme.colors.onDark.feedback.background.positive;

        expect(positive.subtle).toBe(Colors.chromatic.emerald[50]);
        expect(positive.intense).toBe(Colors.chromatic.emerald[500]);
      });

      it('should map WorkIndia crimson colors to negative feedback colors in dark mode', () => {
        const negative =
          workIndiaTheme.colors.onDark.feedback.background.negative;

        expect(negative.subtle).toBe(Colors.chromatic.crimson[50]);
        expect(negative.intense).toBe(Colors.chromatic.crimson[500]);
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
});
