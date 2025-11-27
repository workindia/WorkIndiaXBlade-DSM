/**
 * Tests for WorkIndia spacing tokens
 */

import { Spacing, type SpacingTokens } from '../spacing';

describe('Spacing', () => {
  describe('Spacing structure validation', () => {
    it('should export Spacing object', () => {
      expect(Spacing).toBeDefined();
      expect(typeof Spacing).toBe('object');
    });

    it('should have all required spacing values (0-11)', () => {
      const requiredSpacings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      requiredSpacings.forEach((spacing) => {
        expect(Spacing[spacing as keyof SpacingTokens]).toBeDefined();
      });
    });

    it('should have correct spacing values', () => {
      expect(Spacing[0]).toBe(0);
      expect(Spacing[1]).toBe(2);
      expect(Spacing[2]).toBe(4);
      expect(Spacing[3]).toBe(8);
      expect(Spacing[4]).toBe(12);
      expect(Spacing[5]).toBe(16);
      expect(Spacing[6]).toBe(20);
      expect(Spacing[7]).toBe(24);
      expect(Spacing[8]).toBe(32);
      expect(Spacing[9]).toBe(40);
      expect(Spacing[10]).toBe(48);
      expect(Spacing[11]).toBe(56);
    });

    it('should have numeric spacing values', () => {
      const spacings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      spacings.forEach((spacing) => {
        expect(typeof Spacing[spacing as keyof SpacingTokens]).toBe('number');
      });
    });

    it('should have spacing values in ascending order', () => {
      expect(Spacing[0]).toBeLessThanOrEqual(Spacing[1]);
      expect(Spacing[1]).toBeLessThan(Spacing[2]);
      expect(Spacing[2]).toBeLessThan(Spacing[3]);
      expect(Spacing[3]).toBeLessThan(Spacing[4]);
      expect(Spacing[4]).toBeLessThan(Spacing[5]);
      expect(Spacing[5]).toBeLessThan(Spacing[6]);
      expect(Spacing[6]).toBeLessThan(Spacing[7]);
      expect(Spacing[7]).toBeLessThan(Spacing[8]);
      expect(Spacing[8]).toBeLessThan(Spacing[9]);
      expect(Spacing[9]).toBeLessThan(Spacing[10]);
      expect(Spacing[10]).toBeLessThan(Spacing[11]);
    });
  });

  describe('Type safety', () => {
    it('should match SpacingTokens interface', () => {
      const spacing: SpacingTokens = Spacing;
      expect(spacing).toBeDefined();
    });

    it('should have correct property types', () => {
      const spacings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      spacings.forEach((spacing) => {
        expect(typeof Spacing[spacing as keyof SpacingTokens]).toBe('number');
      });
    });
  });

  describe('Spacing consistency', () => {
    it('should match Blade spacing scale exactly', () => {
      // Verify all values match Blade's spacing scale
      expect(Spacing[0]).toBe(0);
      expect(Spacing[1]).toBe(2);
      expect(Spacing[2]).toBe(4);
      expect(Spacing[3]).toBe(8);
      expect(Spacing[4]).toBe(12);
      expect(Spacing[5]).toBe(16);
      expect(Spacing[6]).toBe(20);
      expect(Spacing[7]).toBe(24);
      expect(Spacing[8]).toBe(32);
      expect(Spacing[9]).toBe(40);
      expect(Spacing[10]).toBe(48);
      expect(Spacing[11]).toBe(56);
    });
  });
});
