/**
 * Tests for getThemeColor utility function
 */

import getThemeColor from '../../../../components/Icons/useIconProps/get-theme-color';
import type { Theme } from '@workindia/dsm';

describe('getThemeColor', () => {
  const mockThemeColors: Theme['colors'] = {
    interactive: {
      icon: {
        primary: '#0066FF',
        secondary: '#6B7280',
      },
    },
    feedback: {
      icon: {
        neutral: {
          intense: '#1F2937',
        },
      },
    },
    surface: {
      icon: {
        gray: {
          normal: '#6B7280',
          subtle: '#9CA3AF',
        },
      },
    },
  } as Theme['colors'];

  describe('Valid color tokens', () => {
    it('should resolve single-level color token', () => {
      const themeColors = {
        primary: '#FF0000',
      } as Theme['colors'];

      expect(getThemeColor(themeColors, 'primary')).toBe('#FF0000');
    });

    it('should return empty string for two-level color token that leads to object', () => {
      // When path leads to an object instead of a string, should return empty string
      expect(getThemeColor(mockThemeColors, 'interactive.icon')).toBe('');
    });

    it('should resolve three-level color token', () => {
      expect(getThemeColor(mockThemeColors, 'interactive.icon.primary')).toBe(
        '#0066FF',
      );
    });

    it('should resolve four-level color token', () => {
      expect(getThemeColor(mockThemeColors, 'surface.icon.gray.normal')).toBe(
        '#6B7280',
      );
    });

    it('should return empty string for nested color token that leads to object (not string)', () => {
      // When path leads to an object instead of a string, should return empty string
      const result = getThemeColor(mockThemeColors, 'feedback.icon.neutral');
      expect(result).toBe('');
    });
  });

  describe('Invalid color tokens', () => {
    it('should return empty string for empty token', () => {
      expect(getThemeColor(mockThemeColors, '')).toBe('');
    });

    it('should return empty string for non-existent single-level path', () => {
      expect(getThemeColor(mockThemeColors, 'nonexistent')).toBe('');
    });

    it('should return empty string for non-existent nested path', () => {
      expect(
        getThemeColor(mockThemeColors, 'interactive.icon.nonexistent'),
      ).toBe('');
    });

    it('should return empty string for path with undefined value', () => {
      const themeColors = {
        interactive: {
          icon: {
            primary: undefined,
          },
        },
      } as unknown as Theme['colors'];

      expect(getThemeColor(themeColors, 'interactive.icon.primary')).toBe('');
    });

    it('should return empty string for path with null value', () => {
      const themeColors = {
        interactive: {
          icon: {
            primary: null,
          },
        },
      } as unknown as Theme['colors'];

      expect(getThemeColor(themeColors, 'interactive.icon.primary')).toBe('');
    });

    it('should return empty string for path that leads to non-string value', () => {
      const themeColors = {
        interactive: {
          icon: {
            primary: 123,
          },
        },
      } as unknown as Theme['colors'];

      expect(getThemeColor(themeColors, 'interactive.icon.primary')).toBe('');
    });

    it('should return empty string for path that leads to object instead of string', () => {
      // When path leads to an object instead of a string, should return empty string
      expect(getThemeColor(mockThemeColors, 'interactive.icon')).toBe('');
    });

    it('should return empty string for deeply nested non-existent path', () => {
      expect(
        getThemeColor(mockThemeColors, 'surface.icon.gray.nonexistent.deep'),
      ).toBe('');
    });

    it('should return empty string when path traverses through null', () => {
      const themeColors = {
        interactive: {
          icon: null,
        },
      } as unknown as Theme['colors'];

      expect(getThemeColor(themeColors, 'interactive.icon.primary')).toBe('');
    });

    it('should return empty string when path traverses through undefined', () => {
      const themeColors = {
        interactive: {
          icon: undefined,
        },
      } as unknown as Theme['colors'];

      expect(getThemeColor(themeColors, 'interactive.icon.primary')).toBe('');
    });
  });

  describe('Edge cases', () => {
    it('should handle themeColors with empty object', () => {
      const emptyTheme = {} as Theme['colors'];
      expect(getThemeColor(emptyTheme, 'any.path')).toBe('');
    });

    it('should handle very long paths', () => {
      const themeColors = {
        level1: {
          level2: {
            level3: {
              level4: {
                level5: '#DEEPFIVE',
              },
            },
          },
        },
      } as unknown as Theme['colors'];

      expect(
        getThemeColor(themeColors, 'level1.level2.level3.level4.level5'),
      ).toBe('#DEEPFIVE');
    });

    it('should handle paths with numeric keys', () => {
      const themeColors = {
        '0': {
          '1': '#NUMERIC',
        },
      } as unknown as Theme['colors'];

      expect(getThemeColor(themeColors, '0.1')).toBe('#NUMERIC');
    });

    it('should return empty string when result is not a string', () => {
      const themeColors = {
        interactive: {
          icon: {
            primary: true,
          },
        },
      } as unknown as Theme['colors'];

      expect(getThemeColor(themeColors, 'interactive.icon.primary')).toBe('');
    });
  });
});
