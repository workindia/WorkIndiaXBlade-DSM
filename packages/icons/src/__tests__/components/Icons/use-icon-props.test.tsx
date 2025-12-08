/**
 * Tests for useIconProps hook
 */

import { renderHook } from '@testing-library/react';
import useIconProps from '../../../components/Icons/useIconProps/use-icon-props';
import type { IconProps } from '../../../components/Icons/types';

describe('useIconProps', () => {
  describe('Default values', () => {
    it('should return default size (medium) when size is not provided', () => {
      const { result } = renderHook(() => useIconProps({} as IconProps));

      expect(result.current.width).toBe('16px');
      expect(result.current.height).toBe('16px');
    });

    it('should return default color (currentColor) when color is not provided', () => {
      const { result } = renderHook(() => useIconProps({} as IconProps));

      expect(result.current.iconColor).toBe('currentColor');
    });
  });

  describe('Size handling', () => {
    it('should return correct size for xsmall', () => {
      const { result } = renderHook(() =>
        useIconProps({ size: 'xsmall' } as IconProps),
      );

      expect(result.current.width).toBe('8px');
      expect(result.current.height).toBe('8px');
    });

    it('should return correct size for small', () => {
      const { result } = renderHook(() =>
        useIconProps({ size: 'small' } as IconProps),
      );

      expect(result.current.width).toBe('12px');
      expect(result.current.height).toBe('12px');
    });

    it('should return correct size for medium', () => {
      const { result } = renderHook(() =>
        useIconProps({ size: 'medium' } as IconProps),
      );

      expect(result.current.width).toBe('16px');
      expect(result.current.height).toBe('16px');
    });

    it('should return correct size for large', () => {
      const { result } = renderHook(() =>
        useIconProps({ size: 'large' } as IconProps),
      );

      expect(result.current.width).toBe('20px');
      expect(result.current.height).toBe('20px');
    });

    it('should return correct size for xlarge', () => {
      const { result } = renderHook(() =>
        useIconProps({ size: 'xlarge' } as IconProps),
      );

      expect(result.current.width).toBe('24px');
      expect(result.current.height).toBe('24px');
    });

    it('should return correct size for 2xlarge', () => {
      const { result } = renderHook(() =>
        useIconProps({ size: '2xlarge' } as IconProps),
      );

      expect(result.current.width).toBe('32px');
      expect(result.current.height).toBe('32px');
    });
  });

  describe('Color handling', () => {
    it('should return currentColor when color is currentColor', () => {
      const { result } = renderHook(() =>
        useIconProps({ color: 'currentColor' } as IconProps),
      );

      expect(result.current.iconColor).toBe('currentColor');
    });

    it('should return the resolved theme color when color token is provided', () => {
      const { result } = renderHook(() =>
        useIconProps({
          color: 'interactive.icon.primary',
        } as unknown as IconProps),
      );

      expect(result.current.iconColor).toBe('#0066FF');
    });

    it('should return the resolved theme color for surface.icon.gray.normal', () => {
      const { result } = renderHook(() =>
        useIconProps({
          color: 'surface.icon.gray.normal',
        } as unknown as IconProps),
      );

      expect(result.current.iconColor).toBe('#6B7280');
    });
  });

  describe('Combined props', () => {
    it('should handle both size and color props together', () => {
      const { result } = renderHook(() =>
        useIconProps({
          size: 'large',
          color: 'interactive.icon.primary',
        } as unknown as IconProps),
      );

      expect(result.current.width).toBe('20px');
      expect(result.current.height).toBe('20px');
      expect(result.current.iconColor).toBe('#0066FF');
    });
  });
});
