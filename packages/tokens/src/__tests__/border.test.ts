/**
 * Tests for WorkIndia border tokens
 */

import {
  Border,
  type BorderTokens,
  type BorderRadiusTokens,
  type BorderWidthTokens,
} from '../border';

describe('Border', () => {
  describe('Border structure validation', () => {
    it('should export Border object', () => {
      expect(Border).toBeDefined();
      expect(typeof Border).toBe('object');
    });

    it('should have radius and width properties', () => {
      expect(Border.radius).toBeDefined();
      expect(Border.width).toBeDefined();
      expect(typeof Border.radius).toBe('object');
      expect(typeof Border.width).toBe('object');
    });
  });

  describe('Border radius validation', () => {
    it('should have all required border radius values', () => {
      const requiredRadius = [
        'none',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        '2xlarge',
        'max',
        'round',
      ];
      requiredRadius.forEach((radius) => {
        expect(Border.radius[radius as keyof BorderRadiusTokens]).toBeDefined();
      });
    });

    it('should have correct border radius values', () => {
      expect(Border.radius.none).toBe(0);
      expect(Border.radius.xsmall).toBe(1);
      expect(Border.radius.small).toBe(2);
      expect(Border.radius.medium).toBe(4);
      expect(Border.radius.large).toBe(8);
      expect(Border.radius.xlarge).toBe(12);
      expect(Border.radius['2xlarge']).toBe(16);
      expect(Border.radius.max).toBe(9999);
      expect(Border.radius.round).toBe('50%');
    });

    it('should have numeric border radius values (except round)', () => {
      expect(typeof Border.radius.none).toBe('number');
      expect(typeof Border.radius.xsmall).toBe('number');
      expect(typeof Border.radius.small).toBe('number');
      expect(typeof Border.radius.medium).toBe('number');
      expect(typeof Border.radius.large).toBe('number');
      expect(typeof Border.radius.xlarge).toBe('number');
      expect(typeof Border.radius['2xlarge']).toBe('number');
      expect(typeof Border.radius.max).toBe('number');
      expect(typeof Border.radius.round).toBe('string');
    });

    it('should have border radius values in ascending order (except round and max)', () => {
      expect(Border.radius.none).toBeLessThanOrEqual(Border.radius.xsmall);
      expect(Border.radius.xsmall).toBeLessThan(Border.radius.small);
      expect(Border.radius.small).toBeLessThan(Border.radius.medium);
      expect(Border.radius.medium).toBeLessThan(Border.radius.large);
      expect(Border.radius.large).toBeLessThan(Border.radius.xlarge);
      expect(Border.radius.xlarge).toBeLessThan(Border.radius['2xlarge']);
    });
  });

  describe('Border width validation', () => {
    it('should have all required border width values', () => {
      const requiredWidth = ['none', 'thinner', 'thin', 'thick', 'thicker'];
      requiredWidth.forEach((width) => {
        expect(Border.width[width as keyof BorderWidthTokens]).toBeDefined();
      });
    });

    it('should have correct border width values', () => {
      expect(Border.width.none).toBe(0);
      expect(Border.width.thinner).toBe(0.5);
      expect(Border.width.thin).toBe(1);
      expect(Border.width.thick).toBe(1.5);
      expect(Border.width.thicker).toBe(2);
    });

    it('should have numeric border width values', () => {
      const widths = ['none', 'thinner', 'thin', 'thick', 'thicker'];
      widths.forEach((width) => {
        expect(typeof Border.width[width as keyof BorderWidthTokens]).toBe(
          'number',
        );
      });
    });

    it('should have border width values in ascending order', () => {
      expect(Border.width.none).toBeLessThanOrEqual(Border.width.thinner);
      expect(Border.width.thinner).toBeLessThan(Border.width.thin);
      expect(Border.width.thin).toBeLessThan(Border.width.thick);
      expect(Border.width.thick).toBeLessThan(Border.width.thicker);
    });
  });

  describe('Type safety', () => {
    it('should match BorderTokens interface', () => {
      const border: BorderTokens = Border;
      expect(border).toBeDefined();
    });

    it('should have correct property types', () => {
      expect(typeof Border.radius).toBe('object');
      expect(typeof Border.width).toBe('object');
    });
  });

  describe('Border consistency', () => {
    it('should match Blade border scale exactly', () => {
      // Verify all values match Blade's border scale
      expect(Border.radius.none).toBe(0);
      expect(Border.radius.xsmall).toBe(1);
      expect(Border.radius.small).toBe(2);
      expect(Border.radius.medium).toBe(4);
      expect(Border.radius.large).toBe(8);
      expect(Border.radius.xlarge).toBe(12);
      expect(Border.radius['2xlarge']).toBe(16);
      expect(Border.radius.max).toBe(9999);
      expect(Border.radius.round).toBe('50%');

      expect(Border.width.none).toBe(0);
      expect(Border.width.thinner).toBe(0.5);
      expect(Border.width.thin).toBe(1);
      expect(Border.width.thick).toBe(1.5);
      expect(Border.width.thicker).toBe(2);
    });

    it('should have all border radius values as non-negative', () => {
      const numericRadius = [
        'none',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        '2xlarge',
        'max',
      ];
      numericRadius.forEach((radius) => {
        const value = Border.radius[radius as keyof BorderRadiusTokens];
        if (typeof value === 'number') {
          expect(value).toBeGreaterThanOrEqual(0);
        }
      });
    });

    it('should have all border width values as non-negative', () => {
      const widths = ['none', 'thinner', 'thin', 'thick', 'thicker'];
      widths.forEach((width) => {
        expect(
          Border.width[width as keyof BorderWidthTokens],
        ).toBeGreaterThanOrEqual(0);
      });
    });
  });
});
