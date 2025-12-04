// Export types
export type {
  IconComponent,
  IconProps,
  IconSize,
  IconColors,
} from './components/Icons/types';
export type { SvgProps } from './components/_Svg/types';
export type { PathProps } from './components/_Svg/Path/types';

// Export utilities
export { isIconComponent } from './utils/is-icon-component';

// Export base components (for creating new icons)
export { Svg, Path } from './components/_Svg';
export { useIconProps } from './components/Icons';
