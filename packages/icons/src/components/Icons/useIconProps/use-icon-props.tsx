import type { IconProps } from '../types';
import { iconSizeMap } from './icon-size-map';

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
  const height = `${String(iconSizeMap[size])}px` as `${number}px`;
  const width = `${String(iconSizeMap[size])}px` as `${number}px`;
  const iconColor = color === 'currentColor' ? 'currentColor' : color;

  return { height, width, iconColor };
}

export default useIconProps;
