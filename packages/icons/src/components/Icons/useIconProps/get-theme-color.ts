import type { Theme } from '@workindia/dsm';

/**
 * Utility function to get theme color value from dot notation token path
 * @param themeColors - The theme colors object from Theme
 * @param colorToken - Dot notation color token path (e.g., 'surface.icon.gray.normal')
 * @returns The resolved color value as a string, or empty string if not found
 */
function getThemeColor(
  themeColors: Theme['colors'],
  colorToken: string,
): string {
  if (!colorToken) {
    return '';
  }

  const keys = colorToken.split('.');
  let result: unknown = themeColors;

  for (const key of keys) {
    if (result && typeof result === 'object') {
      result = (result as Record<string, unknown>)[key];
      if (result === undefined || result === null) {
        return '';
      }
    } else {
      return '';
    }
  }

  return typeof result === 'string' ? result : '';
}

export default getThemeColor;
