/**
 * Tests for WorkIndia color tokens
 */

import {
  WorkIndiaColors,
  type WorkIndiaColorTokens,
  type WorkIndiaChromaticColorScale,
  type WorkIndiaNeutralColorScale,
  type WorkIndiaBlackNWhite,
} from '../colors';

describe('WorkIndiaColors', () => {
  describe('Color structure validation', () => {
    it('should export WorkIndiaColors object', () => {
      expect(WorkIndiaColors).toBeDefined();
      expect(typeof WorkIndiaColors).toBe('object');
    });

    it('should have chromatic colors', () => {
      expect(WorkIndiaColors.chromatic).toBeDefined();
      expect(typeof WorkIndiaColors.chromatic).toBe('object');
    });

    it('should have neutral colors', () => {
      expect(WorkIndiaColors.neutral).toBeDefined();
      expect(typeof WorkIndiaColors.neutral).toBe('object');
    });

    it('should have all required chromatic color scales', () => {
      const chromaticColors = [
        'brand',
        'rose',
        'cerulean',
        'emerald',
        'crimson',
        'amber',
        'sky',
      ];

      chromaticColors.forEach((color) => {
        expect(
          WorkIndiaColors.chromatic[
            color as keyof typeof WorkIndiaColors.chromatic
          ],
        ).toBeDefined();
      });
    });

    it('should have neutral light and dark scales', () => {
      expect(WorkIndiaColors.neutral.light).toBeDefined();
      expect(WorkIndiaColors.neutral.dark).toBeDefined();
      expect(WorkIndiaColors.neutral.blackNWhite).toBeDefined();
    });
  });

  describe('Chromatic color scale validation', () => {
    const chromaticScales: (keyof typeof WorkIndiaColors.chromatic)[] = [
      'brand',
      'rose',
      'cerulean',
      'emerald',
      'crimson',
      'amber',
      'sky',
    ];

    chromaticScales.forEach((scaleName) => {
      describe(`${scaleName} scale`, () => {
        const scale = WorkIndiaColors.chromatic[scaleName];

        it('should have all required numeric shades (50-1000)', () => {
          const requiredShades = [
            50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
          ];
          requiredShades.forEach((shade) => {
            expect(
              scale[shade as keyof WorkIndiaChromaticColorScale],
            ).toBeDefined();
            expect(
              typeof scale[shade as keyof WorkIndiaChromaticColorScale],
            ).toBe('string');
          });
        });

        it('should have all required alpha variants', () => {
          const alphaVariants = ['a50', 'a100', 'a150', 'a200', 'a400'];
          alphaVariants.forEach((alpha) => {
            expect(
              scale[alpha as keyof WorkIndiaChromaticColorScale],
            ).toBeDefined();
            expect(
              typeof scale[alpha as keyof WorkIndiaChromaticColorScale],
            ).toBe('string');
          });
        });

        it('should have valid hex color format for numeric shades', () => {
          const numericShades = [
            50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
          ];
          numericShades.forEach((shade) => {
            const color = scale[shade as keyof WorkIndiaChromaticColorScale];
            // Hex color format: #RRGGBB
            expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
          });
        });

        it('should have valid rgba format for alpha variants', () => {
          const alphaVariants = ['a50', 'a100', 'a150', 'a200', 'a400'];
          alphaVariants.forEach((alpha) => {
            const color = scale[alpha as keyof WorkIndiaChromaticColorScale];
            // RGBA format: rgba(r, g, b, a)
            expect(color).toMatch(/^rgba\(\d+,\s*\d+,\s*\d+,\s*[\d.]+\)$/);
          });
        });

        it('should have base color (500) defined', () => {
          expect(scale[500]).toBeDefined();
          expect(scale[500]).toMatch(/^#[0-9A-Fa-f]{6}$/);
        });
      });
    });
  });

  describe('Neutral color scale validation', () => {
    describe('light scale', () => {
      const lightScale = WorkIndiaColors.neutral.light;

      it('should have all required numeric shades (0-1300)', () => {
        const requiredShades = [
          0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          1300,
        ];
        requiredShades.forEach((shade) => {
          expect(
            lightScale[shade as keyof WorkIndiaNeutralColorScale],
          ).toBeDefined();
          expect(
            typeof lightScale[shade as keyof WorkIndiaNeutralColorScale],
          ).toBe('string');
        });
      });

      it('should have all required alpha variants', () => {
        const alphaVariants = ['a25', 'a50', 'a100', 'a200', 'a400'];
        alphaVariants.forEach((alpha) => {
          expect(
            lightScale[alpha as keyof WorkIndiaNeutralColorScale],
          ).toBeDefined();
          expect(
            typeof lightScale[alpha as keyof WorkIndiaNeutralColorScale],
          ).toBe('string');
        });
      });

      it('should have valid color format for numeric shades', () => {
        const numericShades = [
          0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          1300,
        ];
        numericShades.forEach((shade) => {
          const color = lightScale[shade as keyof WorkIndiaNeutralColorScale];
          expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
        });
      });
    });

    describe('dark scale', () => {
      const darkScale = WorkIndiaColors.neutral.dark;

      it('should have all required numeric shades (0-1300)', () => {
        const requiredShades = [
          0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          1300,
        ];
        requiredShades.forEach((shade) => {
          expect(
            darkScale[shade as keyof WorkIndiaNeutralColorScale],
          ).toBeDefined();
          expect(
            typeof darkScale[shade as keyof WorkIndiaNeutralColorScale],
          ).toBe('string');
        });
      });

      it('should have all required alpha variants', () => {
        const alphaVariants = ['a25', 'a50', 'a100', 'a200', 'a400'];
        alphaVariants.forEach((alpha) => {
          expect(
            darkScale[alpha as keyof WorkIndiaNeutralColorScale],
          ).toBeDefined();
          expect(
            typeof darkScale[alpha as keyof WorkIndiaNeutralColorScale],
          ).toBe('string');
        });
      });
    });

    describe('blackNWhite', () => {
      const blackNWhite = WorkIndiaColors.neutral.blackNWhite;

      it('should have black and white color objects', () => {
        expect(blackNWhite.black).toBeDefined();
        expect(blackNWhite.white).toBeDefined();
        expect(typeof blackNWhite.black).toBe('object');
        expect(typeof blackNWhite.white).toBe('object');
      });

      it('should have all required black shades', () => {
        const requiredShades = [10, 25, 50, 100, 200, 300, 400, 450, 500];
        requiredShades.forEach((shade) => {
          expect(
            blackNWhite.black[shade as keyof typeof blackNWhite.black],
          ).toBeDefined();
          expect(
            typeof blackNWhite.black[shade as keyof typeof blackNWhite.black],
          ).toBe('string');
        });
      });

      it('should have all required white shades', () => {
        const requiredShades = [10, 25, 50, 100, 200, 300, 400, 450, 500];
        requiredShades.forEach((shade) => {
          expect(
            blackNWhite.white[shade as keyof typeof blackNWhite.white],
          ).toBeDefined();
          expect(
            typeof blackNWhite.white[shade as keyof typeof blackNWhite.white],
          ).toBe('string');
        });
      });

      it('should have valid rgba format for black shades with opacity', () => {
        const opacityShades = [10, 25, 50, 100, 200, 300, 400, 450];
        opacityShades.forEach((shade) => {
          const color =
            blackNWhite.black[shade as keyof typeof blackNWhite.black];
          expect(color).toMatch(/^rgba\(\d+,\s*\d+,\s*\d+,\s*[\d.]+\)$/);
        });
      });

      it('should have valid rgba format for white shades with opacity', () => {
        const opacityShades = [10, 25, 50, 100, 200, 300, 400, 450];
        opacityShades.forEach((shade) => {
          const color =
            blackNWhite.white[shade as keyof typeof blackNWhite.white];
          expect(color).toMatch(/^rgba\(\d+,\s*\d+,\s*\d+,\s*[\d.]+\)$/);
        });
      });

      it('should have valid hex format for black and white 500 (full opacity)', () => {
        expect(blackNWhite.black[500]).toMatch(/^#[0-9A-Fa-f]{6}$/);
        expect(blackNWhite.white[500]).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });

      it('should have correct black and white 500 values', () => {
        expect(blackNWhite.black[500]).toBe('#000000');
        expect(blackNWhite.white[500]).toBe('#FFFFFF');
      });
    });
  });

  describe('Type safety', () => {
    it('should match WorkIndiaColorTokens interface', () => {
      const colors: WorkIndiaColorTokens = WorkIndiaColors;
      expect(colors).toBeDefined();
    });

    it('should have correct chromatic color scale types', () => {
      const brandScale: WorkIndiaChromaticColorScale =
        WorkIndiaColors.chromatic.brand;
      expect(brandScale).toBeDefined();
    });

    it('should have correct neutral color scale types', () => {
      const lightScale: WorkIndiaNeutralColorScale =
        WorkIndiaColors.neutral.light;
      const darkScale: WorkIndiaNeutralColorScale =
        WorkIndiaColors.neutral.dark;
      expect(lightScale).toBeDefined();
      expect(darkScale).toBeDefined();
    });

    it('should have correct blackNWhite type', () => {
      const blackNWhite: WorkIndiaBlackNWhite =
        WorkIndiaColors.neutral.blackNWhite;
      expect(blackNWhite).toBeDefined();
    });
  });

  describe('Color consistency', () => {
    it('should have consistent color values across scales', () => {
      // All chromatic scales should have the same structure
      const scales = Object.values(WorkIndiaColors.chromatic);
      const firstScaleKeys = Object.keys(scales[0]);

      scales.forEach((scale) => {
        expect(Object.keys(scale).sort()).toEqual(firstScaleKeys.sort());
      });
    });

    it('should have consistent neutral scale structure', () => {
      const lightKeys = Object.keys(WorkIndiaColors.neutral.light);
      const darkKeys = Object.keys(WorkIndiaColors.neutral.dark);

      expect(lightKeys.sort()).toEqual(darkKeys.sort());
    });
  });
});
