/**
 * Tests for WorkIndia color tokens
 */

import {
  Colors,
  type ColorTokens,
  type ChromaticColorScale,
  type NeutralColorScale,
  type BlackNWhite,
} from '../colors';

describe('Colors', () => {
  describe('Color structure validation', () => {
    it('should export Colors object', () => {
      expect(Colors).toBeDefined();
      expect(typeof Colors).toBe('object');
    });

    it('should have chromatic colors', () => {
      expect(Colors.chromatic).toBeDefined();
      expect(typeof Colors.chromatic).toBe('object');
    });

    it('should have neutral colors', () => {
      expect(Colors.neutral).toBeDefined();
      expect(typeof Colors.neutral).toBe('object');
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
          Colors.chromatic[color as keyof typeof Colors.chromatic],
        ).toBeDefined();
      });
    });

    it('should have neutral light and dark scales', () => {
      expect(Colors.neutral.light).toBeDefined();
      expect(Colors.neutral.dark).toBeDefined();
      expect(Colors.neutral.blackNWhite).toBeDefined();
    });
  });

  describe('Chromatic color scale validation', () => {
    const chromaticScales: (keyof typeof Colors.chromatic)[] = [
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
        const scale = Colors.chromatic[scaleName];

        it('should have all required numeric shades (50-1000)', () => {
          const requiredShades = [
            50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
          ];
          requiredShades.forEach((shade) => {
            expect(scale[shade as keyof ChromaticColorScale]).toBeDefined();
            expect(typeof scale[shade as keyof ChromaticColorScale]).toBe(
              'string',
            );
          });
        });

        it('should have all required alpha variants', () => {
          const alphaVariants = ['a50', 'a100', 'a150', 'a200', 'a400'];
          alphaVariants.forEach((alpha) => {
            expect(scale[alpha as keyof ChromaticColorScale]).toBeDefined();
            expect(typeof scale[alpha as keyof ChromaticColorScale]).toBe(
              'string',
            );
          });
        });

        it('should have valid hex color format for numeric shades', () => {
          const numericShades = [
            50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
          ];
          numericShades.forEach((shade) => {
            const color = scale[shade as keyof ChromaticColorScale];
            // Hex color format: #RRGGBB
            expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
          });
        });

        it('should have valid rgba format for alpha variants', () => {
          const alphaVariants = ['a50', 'a100', 'a150', 'a200', 'a400'];
          alphaVariants.forEach((alpha) => {
            const color = scale[alpha as keyof ChromaticColorScale];
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
      const lightScale = Colors.neutral.light;

      it('should have all required numeric shades (0-1300)', () => {
        const requiredShades = [
          0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          1300,
        ];
        requiredShades.forEach((shade) => {
          expect(lightScale[shade as keyof NeutralColorScale]).toBeDefined();
          expect(typeof lightScale[shade as keyof NeutralColorScale]).toBe(
            'string',
          );
        });
      });

      it('should have all required alpha variants', () => {
        const alphaVariants = ['a25', 'a50', 'a100', 'a200', 'a400'];
        alphaVariants.forEach((alpha) => {
          expect(lightScale[alpha as keyof NeutralColorScale]).toBeDefined();
          expect(typeof lightScale[alpha as keyof NeutralColorScale]).toBe(
            'string',
          );
        });
      });

      it('should have valid color format for numeric shades', () => {
        const numericShades = [
          0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          1300,
        ];
        numericShades.forEach((shade) => {
          const color = lightScale[shade as keyof NeutralColorScale];
          expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
        });
      });
    });

    describe('dark scale', () => {
      const darkScale = Colors.neutral.dark;

      it('should have all required numeric shades (0-1300)', () => {
        const requiredShades = [
          0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          1300,
        ];
        requiredShades.forEach((shade) => {
          expect(darkScale[shade as keyof NeutralColorScale]).toBeDefined();
          expect(typeof darkScale[shade as keyof NeutralColorScale]).toBe(
            'string',
          );
        });
      });

      it('should have all required alpha variants', () => {
        const alphaVariants = ['a25', 'a50', 'a100', 'a200', 'a400'];
        alphaVariants.forEach((alpha) => {
          expect(darkScale[alpha as keyof NeutralColorScale]).toBeDefined();
          expect(typeof darkScale[alpha as keyof NeutralColorScale]).toBe(
            'string',
          );
        });
      });
    });

    describe('blackNWhite', () => {
      const blackNWhite = Colors.neutral.blackNWhite;

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
    it('should match ColorTokens interface', () => {
      const colors: ColorTokens = Colors;
      expect(colors).toBeDefined();
    });

    it('should have correct chromatic color scale types', () => {
      const brandScale: ChromaticColorScale = Colors.chromatic.brand;
      expect(brandScale).toBeDefined();
    });

    it('should have correct neutral color scale types', () => {
      const lightScale: NeutralColorScale = Colors.neutral.light;
      const darkScale: NeutralColorScale = Colors.neutral.dark;
      expect(lightScale).toBeDefined();
      expect(darkScale).toBeDefined();
    });

    it('should have correct blackNWhite type', () => {
      const blackNWhite: BlackNWhite = Colors.neutral.blackNWhite;
      expect(blackNWhite).toBeDefined();
    });
  });

  describe('Color consistency', () => {
    it('should have consistent color values across scales', () => {
      // All chromatic scales should have the same structure
      const scales = Object.values(Colors.chromatic);
      const firstScaleKeys = Object.keys(scales[0]);

      scales.forEach((scale) => {
        expect(Object.keys(scale).sort()).toEqual(firstScaleKeys.sort());
      });
    });

    it('should have consistent neutral scale structure', () => {
      const lightKeys = Object.keys(Colors.neutral.light);
      const darkKeys = Object.keys(Colors.neutral.dark);

      expect(lightKeys.sort()).toEqual(darkKeys.sort());
    });
  });
});
