/**
 * Tests for WorkIndia spacing tokens
 */

import { WorkIndiaSpacing, type WorkIndiaSpacingTokens } from '../spacing';

describe('WorkIndiaSpacing', () => {
  describe('Spacing structure validation', () => {
    it('should export WorkIndiaSpacing object', () => {
      expect(WorkIndiaSpacing).toBeDefined();
      expect(typeof WorkIndiaSpacing).toBe('object');
    });

    it('should have all required spacing values', () => {
      expect(WorkIndiaSpacing.small).toBeDefined();
      expect(WorkIndiaSpacing.medium).toBeDefined();
      expect(WorkIndiaSpacing.large).toBeDefined();
      expect(WorkIndiaSpacing.xlarge).toBeDefined();
    });

    it('should have correct spacing values', () => {
      expect(WorkIndiaSpacing.small).toBe(8);
      expect(WorkIndiaSpacing.medium).toBe(16);
      expect(WorkIndiaSpacing.large).toBe(24);
      expect(WorkIndiaSpacing.xlarge).toBe(32);
    });

    it('should have numeric spacing values', () => {
      expect(typeof WorkIndiaSpacing.small).toBe('number');
      expect(typeof WorkIndiaSpacing.medium).toBe('number');
      expect(typeof WorkIndiaSpacing.large).toBe('number');
      expect(typeof WorkIndiaSpacing.xlarge).toBe('number');
    });

    it('should have positive spacing values', () => {
      expect(WorkIndiaSpacing.small).toBeGreaterThan(0);
      expect(WorkIndiaSpacing.medium).toBeGreaterThan(0);
      expect(WorkIndiaSpacing.large).toBeGreaterThan(0);
      expect(WorkIndiaSpacing.xlarge).toBeGreaterThan(0);
    });

    it('should have spacing values in ascending order', () => {
      expect(WorkIndiaSpacing.small).toBeLessThan(WorkIndiaSpacing.medium);
      expect(WorkIndiaSpacing.medium).toBeLessThan(WorkIndiaSpacing.large);
      expect(WorkIndiaSpacing.large).toBeLessThan(WorkIndiaSpacing.xlarge);
    });
  });

  describe('Type safety', () => {
    it('should match WorkIndiaSpacingTokens interface', () => {
      const spacing: WorkIndiaSpacingTokens = WorkIndiaSpacing;
      expect(spacing).toBeDefined();
    });

    it('should have correct property types', () => {
      expect(typeof WorkIndiaSpacing.small).toBe('number');
      expect(typeof WorkIndiaSpacing.medium).toBe('number');
      expect(typeof WorkIndiaSpacing.large).toBe('number');
      expect(typeof WorkIndiaSpacing.xlarge).toBe('number');
    });
  });

  describe('Spacing consistency', () => {
    it('should have consistent spacing ratio', () => {
      // Small to medium ratio should be 1:2
      expect(WorkIndiaSpacing.medium / WorkIndiaSpacing.small).toBe(2);

      // Medium to large ratio should be 2:3
      expect(WorkIndiaSpacing.large / WorkIndiaSpacing.medium).toBe(1.5);

      // Large to xlarge ratio should be 3:4
      expect(WorkIndiaSpacing.xlarge / WorkIndiaSpacing.large).toBeCloseTo(
        4 / 3,
        2,
      );
    });

    it('should have spacing values that are multiples of 8', () => {
      expect(WorkIndiaSpacing.small % 8).toBe(0);
      expect(WorkIndiaSpacing.medium % 8).toBe(0);
      expect(WorkIndiaSpacing.large % 8).toBe(0);
      expect(WorkIndiaSpacing.xlarge % 8).toBe(0);
    });
  });
});
