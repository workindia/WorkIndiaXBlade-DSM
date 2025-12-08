import type { IconProps } from '../types';
import { iconSizeMap } from './icon-size-map';
import { useTheme } from '@workindia/dsm';
import getThemeColor from './get-theme-color';

/**
 * Hook to get the props for the Icon component
 * @param root0 - The props for the Icon component
 * @param root0.size - The size of the icon
 * @param root0.color - The color of the icon
 * @returns The props for the Icon component
 */
function useIconProps({ size = 'medium', color = 'currentColor' }: IconProps): {
  height: `${number}px`;
  width: `${number}px`;
  iconColor: string;
} {
  const { theme } = useTheme();
  const height = `${String(iconSizeMap[size])}px` as `${number}px`;
  const width = `${String(iconSizeMap[size])}px` as `${number}px`;

  let iconColor: string;
  if (color === 'currentColor') {
    iconColor = 'currentColor';
  } else {
    const resolvedColor = getThemeColor(theme.colors, color);
    // Fall back to currentColor if color token couldn't be resolved
    iconColor = resolvedColor || 'currentColor';
  }

  return { height, width, iconColor };
}

export default useIconProps;
