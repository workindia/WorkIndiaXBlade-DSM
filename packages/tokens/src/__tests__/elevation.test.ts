/**
 * Tests for WorkIndia elevation tokens (Web only)
 */

import {
  Elevation,
  type ElevationTokens,
  type ElevationWithColorModes,
  type ElevationLevels,
} from '../elevation';

describe('Elevation', () => {
  describe('Elevation structure validation', () => {
    it('should export Elevation object', () => {
      expect(Elevation).toBeDefined();
      expect(typeof Elevation).toBe('object');
    });

    it('should have onLight and onDark properties', () => {
      expect(Elevation.onLight).toBeDefined();
      expect(Elevation.onDark).toBeDefined();
      expect(typeof Elevation.onLight).toBe('object');
      expect(typeof Elevation.onDark).toBe('object');
    });
  });

  describe('Elevation levels validation', () => {
    const requiredLevels: ElevationLevels[] = [
      'none',
      'lowRaised',
      'midRaised',
      'highRaised',
    ];

    it('should have all required elevation levels in onLight', () => {
      requiredLevels.forEach((level) => {
        expect(Elevation.onLight[level]).toBeDefined();
      });
    });

    it('should have all required elevation levels in onDark', () => {
      requiredLevels.forEach((level) => {
        expect(Elevation.onDark[level]).toBeDefined();
      });
    });

    it('should have string elevation values in onLight', () => {
      requiredLevels.forEach((level) => {
        expect(typeof Elevation.onLight[level]).toBe('string');
      });
    });

    it('should have string elevation values in onDark', () => {
      requiredLevels.forEach((level) => {
        expect(typeof Elevation.onDark[level]).toBe('string');
      });
    });
  });

  describe('Elevation values validation', () => {
    it('should have correct onLight elevation values', () => {
      expect(Elevation.onLight.none).toBe('none');
      expect(Elevation.onLight.lowRaised).toBe(
        `0px 2px 16px 0px hsla(217, 56%, 17%, 0.10)`,
      );
      expect(Elevation.onLight.midRaised).toBe(
        `0px 8px 24px 0px hsla(217, 56%, 17%, 0.12)`,
      );
      expect(Elevation.onLight.highRaised).toBe(
        `0px 16px 48px -4px hsla(217, 56%, 17%, 0.18)`,
      );
    });

    it('should have correct onDark elevation values', () => {
      expect(Elevation.onDark.none).toBe('none');
      expect(Elevation.onDark.lowRaised).toBe(
        `0px 2px 16px 0px hsla(217, 56%, 17%, 0.10)`,
      );
      expect(Elevation.onDark.midRaised).toBe(
        `0px 8px 24px 0px hsla(217, 56%, 17%, 0.12)`,
      );
      expect(Elevation.onDark.highRaised).toBe(
        `0px 16px 48px -4px hsla(217, 56%, 17%, 0.18)`,
      );
    });

    it('should have non-empty elevation values (except none)', () => {
      expect(Elevation.onLight.lowRaised.length).toBeGreaterThan(0);
      expect(Elevation.onLight.midRaised.length).toBeGreaterThan(0);
      expect(Elevation.onLight.highRaised.length).toBeGreaterThan(0);
      expect(Elevation.onDark.lowRaised.length).toBeGreaterThan(0);
      expect(Elevation.onDark.midRaised.length).toBeGreaterThan(0);
      expect(Elevation.onDark.highRaised.length).toBeGreaterThan(0);
    });
  });

  describe('Type safety', () => {
    it('should match ElevationWithColorModes interface', () => {
      const elevation: ElevationWithColorModes = Elevation;
      expect(elevation).toBeDefined();
    });

    it('should have correct property types', () => {
      expect(typeof Elevation.onLight).toBe('object');
      expect(typeof Elevation.onDark).toBe('object');
    });

    it('should have ElevationTokens type for onLight and onDark', () => {
      const onLight: ElevationTokens = Elevation.onLight;
      const onDark: ElevationTokens = Elevation.onDark;
      expect(onLight).toBeDefined();
      expect(onDark).toBeDefined();
    });
  });

  describe('Elevation consistency', () => {
    it('should match Blade elevation scale exactly', () => {
      // Verify all values match Blade's elevation scale
      expect(Elevation.onLight.none).toBe('none');
      expect(Elevation.onLight.lowRaised).toBe(
        `0px 2px 16px 0px hsla(217, 56%, 17%, 0.10)`,
      );
      expect(Elevation.onLight.midRaised).toBe(
        `0px 8px 24px 0px hsla(217, 56%, 17%, 0.12)`,
      );
      expect(Elevation.onLight.highRaised).toBe(
        `0px 16px 48px -4px hsla(217, 56%, 17%, 0.18)`,
      );

      expect(Elevation.onDark.none).toBe('none');
      expect(Elevation.onDark.lowRaised).toBe(
        `0px 2px 16px 0px hsla(217, 56%, 17%, 0.10)`,
      );
      expect(Elevation.onDark.midRaised).toBe(
        `0px 8px 24px 0px hsla(217, 56%, 17%, 0.12)`,
      );
      expect(Elevation.onDark.highRaised).toBe(
        `0px 16px 48px -4px hsla(217, 56%, 17%, 0.18)`,
      );
    });

    it('should have same structure for onLight and onDark', () => {
      const onLightKeys = Object.keys(Elevation.onLight);
      const onDarkKeys = Object.keys(Elevation.onDark);
      expect(onLightKeys.sort()).toEqual(onDarkKeys.sort());
    });
  });
});
