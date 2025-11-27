/**
 * Tests for WorkIndia typography tokens
 */

import { Typography, type TypographyTokens } from '../typography';

describe('Typography', () => {
  describe('Typography structure validation', () => {
    it('should export Typography object', () => {
      expect(Typography).toBeDefined();
      expect(typeof Typography).toBe('object');
    });

    it('should have fontFamily property', () => {
      expect(Typography.fontFamily).toBeDefined();
      expect(typeof Typography.fontFamily).toBe('object');
    });

    it('should have fontSize property', () => {
      expect(Typography.fontSize).toBeDefined();
      expect(typeof Typography.fontSize).toBe('object');
    });

    it('should have fontWeight property', () => {
      expect(Typography.fontWeight).toBeDefined();
      expect(typeof Typography.fontWeight).toBe('object');
    });
  });

  describe('Font family validation', () => {
    it('should have all required font families', () => {
      expect(Typography.fontFamily.text).toBeDefined();
      expect(Typography.fontFamily.heading).toBeDefined();
      expect(Typography.fontFamily.code).toBeDefined();
    });

    it('should have string font family values', () => {
      expect(typeof Typography.fontFamily.text).toBe('string');
      expect(typeof Typography.fontFamily.heading).toBe('string');
      expect(typeof Typography.fontFamily.code).toBe('string');
    });

    it('should include Inter font in text and heading families', () => {
      expect(Typography.fontFamily.text).toContain('Inter');
      expect(Typography.fontFamily.heading).toContain('Inter');
    });

    it('should include monospace fonts in code family', () => {
      expect(Typography.fontFamily.code).toContain('monospace');
    });

    it('should have non-empty font family strings', () => {
      expect(Typography.fontFamily.text.length).toBeGreaterThan(0);
      expect(Typography.fontFamily.heading.length).toBeGreaterThan(0);
      expect(Typography.fontFamily.code.length).toBeGreaterThan(0);
    });
  });

  describe('Font size validation', () => {
    it('should have all required font sizes', () => {
      expect(Typography.fontSize.small).toBeDefined();
      expect(Typography.fontSize.base).toBeDefined();
      expect(Typography.fontSize.medium).toBeDefined();
      expect(Typography.fontSize.large).toBeDefined();
      expect(Typography.fontSize.xlarge).toBeDefined();
    });

    it('should have numeric font size values', () => {
      expect(typeof Typography.fontSize.small).toBe('number');
      expect(typeof Typography.fontSize.base).toBe('number');
      expect(typeof Typography.fontSize.medium).toBe('number');
      expect(typeof Typography.fontSize.large).toBe('number');
      expect(typeof Typography.fontSize.xlarge).toBe('number');
    });

    it('should have correct font size values', () => {
      expect(Typography.fontSize.small).toBe(12);
      expect(Typography.fontSize.base).toBe(14);
      expect(Typography.fontSize.medium).toBe(16);
      expect(Typography.fontSize.large).toBe(20);
      expect(Typography.fontSize.xlarge).toBe(24);
    });

    it('should have positive font size values', () => {
      expect(Typography.fontSize.small).toBeGreaterThan(0);
      expect(Typography.fontSize.base).toBeGreaterThan(0);
      expect(Typography.fontSize.medium).toBeGreaterThan(0);
      expect(Typography.fontSize.large).toBeGreaterThan(0);
      expect(Typography.fontSize.xlarge).toBeGreaterThan(0);
    });

    it('should have font sizes in ascending order', () => {
      expect(Typography.fontSize.small).toBeLessThan(Typography.fontSize.base);
      expect(Typography.fontSize.base).toBeLessThan(Typography.fontSize.medium);
      expect(Typography.fontSize.medium).toBeLessThan(
        Typography.fontSize.large,
      );
      expect(Typography.fontSize.large).toBeLessThan(
        Typography.fontSize.xlarge,
      );
    });
  });

  describe('Font weight validation', () => {
    it('should have all required font weights', () => {
      expect(Typography.fontWeight.regular).toBeDefined();
      expect(Typography.fontWeight.medium).toBeDefined();
      expect(Typography.fontWeight.bold).toBeDefined();
    });

    it('should have numeric font weight values', () => {
      expect(typeof Typography.fontWeight.regular).toBe('number');
      expect(typeof Typography.fontWeight.medium).toBe('number');
      expect(typeof Typography.fontWeight.bold).toBe('number');
    });

    it('should have correct font weight values', () => {
      expect(Typography.fontWeight.regular).toBe(400);
      expect(Typography.fontWeight.medium).toBe(500);
      expect(Typography.fontWeight.bold).toBe(700);
    });

    it('should have font weights in ascending order', () => {
      expect(Typography.fontWeight.regular).toBeLessThan(
        Typography.fontWeight.medium,
      );
      expect(Typography.fontWeight.medium).toBeLessThan(
        Typography.fontWeight.bold,
      );
    });

    it('should have valid CSS font weight values (100-900)', () => {
      expect(Typography.fontWeight.regular).toBeGreaterThanOrEqual(100);
      expect(Typography.fontWeight.regular).toBeLessThanOrEqual(900);
      expect(Typography.fontWeight.medium).toBeGreaterThanOrEqual(100);
      expect(Typography.fontWeight.medium).toBeLessThanOrEqual(900);
      expect(Typography.fontWeight.bold).toBeGreaterThanOrEqual(100);
      expect(Typography.fontWeight.bold).toBeLessThanOrEqual(900);
    });
  });

  describe('Type safety', () => {
    it('should match TypographyTokens interface', () => {
      const typography: TypographyTokens = Typography;
      expect(typography).toBeDefined();
    });

    it('should have correct property types', () => {
      expect(typeof Typography.fontFamily).toBe('object');
      expect(typeof Typography.fontSize).toBe('object');
      expect(typeof Typography.fontWeight).toBe('object');
    });
  });
});
