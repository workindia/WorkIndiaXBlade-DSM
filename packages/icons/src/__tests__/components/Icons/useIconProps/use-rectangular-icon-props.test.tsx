/**
 * Tests for useRectangularIconProps hook
 */

import { renderHook } from '@testing-library/react';
import useRectangularIconProps from '../../../../components/Icons/useIconProps/use-rectangular-icon-props';
import type { IconProps } from '../../../../components/Icons/types';

describe('useRectangularIconProps', () => {
  describe('Default values', () => {
    it('should return default size (medium) when size is not provided', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          viewBox: '0 0 172 25',
        } as IconProps & { viewBox: string }),
      );

      // Medium size is 16px, aspect ratio 172/25 = 6.88
      // Width = 16 * 6.88 = 110.08 ≈ 110px (rounded)
      expect(result.current.height).toBe('16px');
      expect(result.current.width).toBe('110px');
    });

    it('should return default color (currentColor) when color is not provided', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          viewBox: '0 0 172 25',
        } as IconProps & { viewBox: string }),
      );

      expect(result.current.iconColor).toBe('currentColor');
    });
  });

  describe('Size handling', () => {
    const wordmarkViewBox = '0 0 172 25';

    it('should return correct size for xsmall', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'xsmall',
          viewBox: wordmarkViewBox,
        } as IconProps & { viewBox: string }),
      );

      // xsmall: 8px height, width = 8 * 6.88 = 55.04 ≈ 55px
      expect(result.current.height).toBe('8px');
      expect(result.current.width).toBe('55px');
    });

    it('should return correct size for small', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'small',
          viewBox: wordmarkViewBox,
        } as IconProps & { viewBox: string }),
      );

      // small: 12px height, width = 12 * 6.88 = 82.56 ≈ 83px
      expect(result.current.height).toBe('12px');
      expect(result.current.width).toBe('83px');
    });

    it('should return correct size for medium', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'medium',
          viewBox: wordmarkViewBox,
        } as IconProps & { viewBox: string }),
      );

      // medium: 16px height, width = 16 * 6.88 = 110.08 ≈ 110px
      expect(result.current.height).toBe('16px');
      expect(result.current.width).toBe('110px');
    });

    it('should return correct size for large', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'large',
          viewBox: wordmarkViewBox,
        } as IconProps & { viewBox: string }),
      );

      // large: 20px height, width = 20 * 6.88 = 137.6 ≈ 138px
      expect(result.current.height).toBe('20px');
      expect(result.current.width).toBe('138px');
    });

    it('should return correct size for xlarge', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'xlarge',
          viewBox: wordmarkViewBox,
        } as IconProps & { viewBox: string }),
      );

      // xlarge: 24px height, width = 24 * 6.88 = 165.12 ≈ 165px
      expect(result.current.height).toBe('24px');
      expect(result.current.width).toBe('165px');
    });

    it('should return correct size for 2xlarge', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: '2xlarge',
          viewBox: wordmarkViewBox,
        } as IconProps & { viewBox: string }),
      );

      // 2xlarge: 32px height, width = 32 * 6.88 = 220.16 ≈ 220px
      expect(result.current.height).toBe('32px');
      expect(result.current.width).toBe('220px');
    });
  });

  describe('ViewBox parsing', () => {
    it('should handle different viewBox formats correctly', () => {
      const { result: result1 } = renderHook(() =>
        useRectangularIconProps({
          size: 'medium',
          viewBox: '0 0 100 50',
        } as IconProps & { viewBox: string }),
      );

      // Aspect ratio: 100/50 = 2.0
      // Height: 16px, Width: 16 * 2 = 32px
      expect(result1.current.height).toBe('16px');
      expect(result1.current.width).toBe('32px');
    });

    it('should handle wide aspect ratios', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'medium',
          viewBox: '0 0 200 20',
        } as IconProps & { viewBox: string }),
      );

      // Aspect ratio: 200/20 = 10.0
      // Height: 16px, Width: 16 * 10 = 160px
      expect(result.current.height).toBe('16px');
      expect(result.current.width).toBe('160px');
    });

    it('should handle tall aspect ratios', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'medium',
          viewBox: '0 0 50 100',
        } as IconProps & { viewBox: string }),
      );

      // Aspect ratio: 50/100 = 0.5
      // Height: 16px, Width: 16 * 0.5 = 8px
      expect(result.current.height).toBe('16px');
      expect(result.current.width).toBe('8px');
    });

    it('should throw error for invalid viewBox format', () => {
      expect(() => {
        renderHook(() =>
          useRectangularIconProps({
            size: 'medium',
            viewBox: 'invalid',
          } as IconProps & { viewBox: string }),
        );
      }).toThrow('Invalid viewBox format');
    });

    it('should throw error for viewBox with wrong number of parts', () => {
      expect(() => {
        renderHook(() =>
          useRectangularIconProps({
            size: 'medium',
            viewBox: '0 0 100',
          } as IconProps & { viewBox: string }),
        );
      }).toThrow('Invalid viewBox format');
    });
  });

  describe('Aspect ratio calculations', () => {
    it('should maintain aspect ratio across different sizes', () => {
      const viewBox = '0 0 172 25';
      const expectedAspectRatio = 172 / 25;

      const sizes = [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        '2xlarge',
      ] as const;
      const sizeMap = {
        xsmall: 8,
        small: 12,
        medium: 16,
        large: 20,
        xlarge: 24,
        '2xlarge': 32,
      };

      sizes.forEach((size) => {
        const { result } = renderHook(() =>
          useRectangularIconProps({
            size,
            viewBox,
          } as IconProps & { viewBox: string }),
        );

        const height = parseInt(result.current.height, 10);
        const width = parseInt(result.current.width, 10);
        const actualAspectRatio = width / height;

        expect(height).toBe(sizeMap[size]);
        expect(actualAspectRatio).toBeCloseTo(expectedAspectRatio, 1);
      });
    });

    it('should round width correctly', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'medium',
          viewBox: '0 0 100 33',
        } as IconProps & { viewBox: string }),
      );

      // Aspect ratio: 100/33 ≈ 3.0303
      // Height: 16px, Width: 16 * 3.0303 = 48.4848 ≈ 48px (rounded)
      expect(result.current.height).toBe('16px');
      expect(result.current.width).toBe('48px');
    });
  });

  describe('Color handling', () => {
    it('should return currentColor when color is currentColor', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          color: 'currentColor',
          viewBox: '0 0 172 25',
        } as IconProps & { viewBox: string }),
      );

      expect(result.current.iconColor).toBe('currentColor');
    });

    it('should return the resolved theme color when color token is provided', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          color: 'interactive.icon.primary',
          viewBox: '0 0 172 25',
        } as unknown as IconProps & { viewBox: string }),
      );

      expect(result.current.iconColor).toBe('#0066FF');
    });

    it('should return the resolved theme color for surface.icon.gray.normal', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          color: 'surface.icon.gray.normal',
          viewBox: '0 0 172 25',
        } as unknown as IconProps & { viewBox: string }),
      );

      expect(result.current.iconColor).toBe('#6B7280');
    });
  });

  describe('Combined props', () => {
    it('should handle size, color, and viewBox props together', () => {
      const { result } = renderHook(() =>
        useRectangularIconProps({
          size: 'large',
          color: 'interactive.icon.primary',
          viewBox: '0 0 172 25',
        } as unknown as IconProps & { viewBox: string }),
      );

      expect(result.current.height).toBe('20px');
      expect(result.current.width).toBe('138px');
      expect(result.current.iconColor).toBe('#0066FF');
    });
  });
});
