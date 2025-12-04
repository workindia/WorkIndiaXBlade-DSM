import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _MoonFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M19.0819 12.1954C18.4763 14.1726 17.2624 15.9083 15.6132 17.1557C14.1652 18.2455 12.4421 18.9102 10.6373 19.0751C8.83256 19.24 7.01754 18.8987 5.396 18.0894C3.77446 17.2801 2.41057 16.0348 1.45743 14.4934C0.504283 12.952 -0.000393014 11.1755 4.58827e-05 9.36321C-0.00647008 7.24789 0.681196 5.18884 1.95755 3.50196C3.20493 1.8527 4.9407 0.638878 6.91786 0.0332109C7.04817 -0.00691387 7.18695 -0.0107561 7.31928 0.0220974C7.45162 0.0549509 7.57249 0.123257 7.6689 0.21967C7.76531 0.316083 7.83362 0.436954 7.86647 0.569286C7.89933 0.701617 7.89548 0.8404 7.85536 0.970711C7.42302 2.4008 7.38677 3.92139 7.75047 5.37046C8.11417 6.81952 8.8642 8.14277 9.92062 9.1992C10.977 10.2556 12.3003 11.0056 13.7494 11.3693C15.1984 11.733 16.719 11.6968 18.1491 11.2645C18.2794 11.2243 18.4182 11.2205 18.5505 11.2533C18.6829 11.2862 18.8037 11.3545 18.9002 11.4509C18.9966 11.5473 19.0649 11.6682 19.0977 11.8005C19.1306 11.9329 19.1267 12.0717 19.0866 12.202L19.0819 12.1954Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const MoonFillIcon = assignWithoutSideEffects(_MoonFillIcon, {
  componentId: 'MoonFillIcon',
});

export default MoonFillIcon;
