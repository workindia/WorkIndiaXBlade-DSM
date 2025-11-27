/**
 * Tests for WorkIndia breakpoint tokens
 */

import { Breakpoints, type BreakpointTokens } from '../breakpoints';

describe('Breakpoints', () => {
  describe('Breakpoint structure validation', () => {
    it('should export Breakpoints object', () => {
      expect(Breakpoints).toBeDefined();
      expect(typeof Breakpoints).toBe('object');
    });

    it('should have all required breakpoint values', () => {
      const requiredBreakpoints = ['base', 'xs', 's', 'm', 'l', 'xl'];
      requiredBreakpoints.forEach((breakpoint) => {
        expect(Breakpoints[breakpoint as keyof BreakpointTokens]).toBeDefined();
      });
    });

    it('should have correct breakpoint values', () => {
      expect(Breakpoints.base).toBe(0);
      expect(Breakpoints.xs).toBe(320);
      expect(Breakpoints.s).toBe(480);
      expect(Breakpoints.m).toBe(768);
      expect(Breakpoints.l).toBe(1024);
      expect(Breakpoints.xl).toBe(1200);
    });

    it('should have numeric breakpoint values', () => {
      const breakpoints = ['base', 'xs', 's', 'm', 'l', 'xl'];
      breakpoints.forEach((breakpoint) => {
        expect(typeof Breakpoints[breakpoint as keyof BreakpointTokens]).toBe(
          'number',
        );
      });
    });

    it('should have breakpoint values in ascending order', () => {
      expect(Breakpoints.base).toBeLessThanOrEqual(Breakpoints.xs);
      expect(Breakpoints.xs).toBeLessThan(Breakpoints.s);
      expect(Breakpoints.s).toBeLessThan(Breakpoints.m);
      expect(Breakpoints.m).toBeLessThan(Breakpoints.l);
      expect(Breakpoints.l).toBeLessThan(Breakpoints.xl);
    });
  });

  describe('Type safety', () => {
    it('should match BreakpointTokens interface', () => {
      const breakpoints: BreakpointTokens = Breakpoints;
      expect(breakpoints).toBeDefined();
    });

    it('should have correct property types', () => {
      const breakpoints = ['base', 'xs', 's', 'm', 'l', 'xl'];
      breakpoints.forEach((breakpoint) => {
        expect(typeof Breakpoints[breakpoint as keyof BreakpointTokens]).toBe(
          'number',
        );
      });
    });
  });

  describe('Breakpoint consistency', () => {
    it('should match Blade breakpoint scale exactly', () => {
      // Verify all values match Blade's breakpoint scale
      expect(Breakpoints.base).toBe(0);
      expect(Breakpoints.xs).toBe(320);
      expect(Breakpoints.s).toBe(480);
      expect(Breakpoints.m).toBe(768);
      expect(Breakpoints.l).toBe(1024);
      expect(Breakpoints.xl).toBe(1200);
    });

    it('should have base breakpoint as 0', () => {
      expect(Breakpoints.base).toBe(0);
    });

    it('should have all breakpoints as non-negative values', () => {
      const breakpoints = ['base', 'xs', 's', 'm', 'l', 'xl'];
      breakpoints.forEach((breakpoint) => {
        expect(
          Breakpoints[breakpoint as keyof BreakpointTokens],
        ).toBeGreaterThanOrEqual(0);
      });
    });
  });
});
