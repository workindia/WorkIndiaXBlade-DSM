import type { IconProps } from '../types';
import { iconSizeMap } from './icon-size-map';
import { useTheme } from '@workindia/dsm';
import getThemeColor from './get-theme-color';

/**
 * Parse viewBox string to extract width and height
 * @param viewBox - ViewBox string in format "0 0 width height"
 * @returns Object with width and height
 */
const parseViewBox = (viewBox: string): { width: number; height: number } => {
  const parts = viewBox.split(' ');
  if (parts.length !== 4) {
    throw new Error(
      `Invalid viewBox format: ${viewBox}. Expected format: "0 0 width height"`,
    );
  }
  return {
    width: parseFloat(parts[2]),
    height: parseFloat(parts[3]),
  };
};

/**
 * Hook to get the props for rectangular Icon components
 * Scales the icon size based on the aspect ratio from the viewBox
 * @param root0 - The props for the Icon component
 * @param root0.size - The size of the icon (this will be used as the base size)
 * @param root0.color - The color of the icon
 * @param root0.viewBox - The viewBox string (e.g., "0 0 172 25")
 * @returns The props for the Icon component with scaled width and height
 */
function useRectangularIconProps({
  size = 'medium',
  color = 'currentColor',
  viewBox,
}: IconProps & { viewBox: string }): {
  height: `${number}px`;
  width: `${number}px`;
  iconColor: string;
} {
  const { theme } = useTheme();
  const { width: viewBoxWidth, height: viewBoxHeight } = parseViewBox(viewBox);
  const aspectRatio = viewBoxWidth / viewBoxHeight;
  const baseSize = iconSizeMap[size];

  // For rectangular icons, we use the base size as the height
  // and scale the width based on the aspect ratio
  const height = baseSize;
  const width = Math.round(baseSize * aspectRatio);

  let iconColor: string;
  if (color === 'currentColor') {
    iconColor = 'currentColor';
  } else {
    // theme.colors is already resolved by Blade's useBladeProvider to the appropriate
    // color scheme (onLight or onDark), so we can use it directly
    const resolvedColor = getThemeColor(theme.colors, color);
    // Fall back to currentColor if color token couldn't be resolved
    iconColor = resolvedColor || 'currentColor';
  }

  return {
    height: `${String(height)}px` as `${number}px`,
    width: `${String(width)}px` as `${number}px`,
    iconColor,
  };
}

export default useRectangularIconProps;
