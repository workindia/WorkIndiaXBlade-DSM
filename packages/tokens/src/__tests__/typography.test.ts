/**
 * Tests for WorkIndia typography tokens
 */

import {
  WorkIndiaTypography,
  type WorkIndiaTypographyTokens,
} from '../typography';

describe('WorkIndiaTypography', () => {
  describe('Typography structure validation', () => {
    it('should export WorkIndiaTypography object', () => {
      expect(WorkIndiaTypography).toBeDefined();
      expect(typeof WorkIndiaTypography).toBe('object');
    });

    it('should have fontFamily property', () => {
      expect(WorkIndiaTypography.fontFamily).toBeDefined();
      expect(typeof WorkIndiaTypography.fontFamily).toBe('object');
    });

    it('should have fontSize property', () => {
      expect(WorkIndiaTypography.fontSize).toBeDefined();
      expect(typeof WorkIndiaTypography.fontSize).toBe('object');
    });

    it('should have fontWeight property', () => {
      expect(WorkIndiaTypography.fontWeight).toBeDefined();
      expect(typeof WorkIndiaTypography.fontWeight).toBe('object');
    });
  });

  describe('Font family validation', () => {
    it('should have all required font families', () => {
      expect(WorkIndiaTypography.fontFamily.text).toBeDefined();
      expect(WorkIndiaTypography.fontFamily.heading).toBeDefined();
      expect(WorkIndiaTypography.fontFamily.code).toBeDefined();
    });

    it('should have string font family values', () => {
      expect(typeof WorkIndiaTypography.fontFamily.text).toBe('string');
      expect(typeof WorkIndiaTypography.fontFamily.heading).toBe('string');
      expect(typeof WorkIndiaTypography.fontFamily.code).toBe('string');
    });

    it('should include Inter font in text and heading families', () => {
      expect(WorkIndiaTypography.fontFamily.text).toContain('Inter');
      expect(WorkIndiaTypography.fontFamily.heading).toContain('Inter');
    });

    it('should include monospace fonts in code family', () => {
      expect(WorkIndiaTypography.fontFamily.code).toContain('monospace');
    });

    it('should have non-empty font family strings', () => {
      expect(WorkIndiaTypography.fontFamily.text.length).toBeGreaterThan(0);
      expect(WorkIndiaTypography.fontFamily.heading.length).toBeGreaterThan(0);
      expect(WorkIndiaTypography.fontFamily.code.length).toBeGreaterThan(0);
    });
  });

  describe('Font size validation', () => {
    it('should have all required font sizes', () => {
      expect(WorkIndiaTypography.fontSize.small).toBeDefined();
      expect(WorkIndiaTypography.fontSize.base).toBeDefined();
      expect(WorkIndiaTypography.fontSize.medium).toBeDefined();
      expect(WorkIndiaTypography.fontSize.large).toBeDefined();
      expect(WorkIndiaTypography.fontSize.xlarge).toBeDefined();
    });

    it('should have numeric font size values', () => {
      expect(typeof WorkIndiaTypography.fontSize.small).toBe('number');
      expect(typeof WorkIndiaTypography.fontSize.base).toBe('number');
      expect(typeof WorkIndiaTypography.fontSize.medium).toBe('number');
      expect(typeof WorkIndiaTypography.fontSize.large).toBe('number');
      expect(typeof WorkIndiaTypography.fontSize.xlarge).toBe('number');
    });

    it('should have correct font size values', () => {
      expect(WorkIndiaTypography.fontSize.small).toBe(12);
      expect(WorkIndiaTypography.fontSize.base).toBe(14);
      expect(WorkIndiaTypography.fontSize.medium).toBe(16);
      expect(WorkIndiaTypography.fontSize.large).toBe(20);
      expect(WorkIndiaTypography.fontSize.xlarge).toBe(24);
    });

    it('should have positive font size values', () => {
      expect(WorkIndiaTypography.fontSize.small).toBeGreaterThan(0);
      expect(WorkIndiaTypography.fontSize.base).toBeGreaterThan(0);
      expect(WorkIndiaTypography.fontSize.medium).toBeGreaterThan(0);
      expect(WorkIndiaTypography.fontSize.large).toBeGreaterThan(0);
      expect(WorkIndiaTypography.fontSize.xlarge).toBeGreaterThan(0);
    });

    it('should have font sizes in ascending order', () => {
      expect(WorkIndiaTypography.fontSize.small).toBeLessThan(
        WorkIndiaTypography.fontSize.base,
      );
      expect(WorkIndiaTypography.fontSize.base).toBeLessThan(
        WorkIndiaTypography.fontSize.medium,
      );
      expect(WorkIndiaTypography.fontSize.medium).toBeLessThan(
        WorkIndiaTypography.fontSize.large,
      );
      expect(WorkIndiaTypography.fontSize.large).toBeLessThan(
        WorkIndiaTypography.fontSize.xlarge,
      );
    });
  });

  describe('Font weight validation', () => {
    it('should have all required font weights', () => {
      expect(WorkIndiaTypography.fontWeight.regular).toBeDefined();
      expect(WorkIndiaTypography.fontWeight.medium).toBeDefined();
      expect(WorkIndiaTypography.fontWeight.bold).toBeDefined();
    });

    it('should have numeric font weight values', () => {
      expect(typeof WorkIndiaTypography.fontWeight.regular).toBe('number');
      expect(typeof WorkIndiaTypography.fontWeight.medium).toBe('number');
      expect(typeof WorkIndiaTypography.fontWeight.bold).toBe('number');
    });

    it('should have correct font weight values', () => {
      expect(WorkIndiaTypography.fontWeight.regular).toBe(400);
      expect(WorkIndiaTypography.fontWeight.medium).toBe(500);
      expect(WorkIndiaTypography.fontWeight.bold).toBe(700);
    });

    it('should have font weights in ascending order', () => {
      expect(WorkIndiaTypography.fontWeight.regular).toBeLessThan(
        WorkIndiaTypography.fontWeight.medium,
      );
      expect(WorkIndiaTypography.fontWeight.medium).toBeLessThan(
        WorkIndiaTypography.fontWeight.bold,
      );
    });

    it('should have valid CSS font weight values (100-900)', () => {
      expect(WorkIndiaTypography.fontWeight.regular).toBeGreaterThanOrEqual(
        100,
      );
      expect(WorkIndiaTypography.fontWeight.regular).toBeLessThanOrEqual(900);
      expect(WorkIndiaTypography.fontWeight.medium).toBeGreaterThanOrEqual(100);
      expect(WorkIndiaTypography.fontWeight.medium).toBeLessThanOrEqual(900);
      expect(WorkIndiaTypography.fontWeight.bold).toBeGreaterThanOrEqual(100);
      expect(WorkIndiaTypography.fontWeight.bold).toBeLessThanOrEqual(900);
    });
  });

  describe('Type safety', () => {
    it('should match WorkIndiaTypographyTokens interface', () => {
      const typography: WorkIndiaTypographyTokens = WorkIndiaTypography;
      expect(typography).toBeDefined();
    });

    it('should have correct property types', () => {
      expect(typeof WorkIndiaTypography.fontFamily).toBe('object');
      expect(typeof WorkIndiaTypography.fontSize).toBe('object');
      expect(typeof WorkIndiaTypography.fontWeight).toBe('object');
    });
  });
});
