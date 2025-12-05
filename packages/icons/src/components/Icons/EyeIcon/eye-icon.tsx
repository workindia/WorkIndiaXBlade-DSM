import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _EyeIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 23 16"
      fill="none"
    >
      <Path
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M11.5 1C4 1 1 7.75 1 7.75C1 7.75 4 14.5 11.5 14.5C19 14.5 22 7.75 22 7.75C22 7.75 19 1 11.5 1Z"
      />
      <Path
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M11.5 11.5C13.5711 11.5 15.25 9.82107 15.25 7.75C15.25 5.67893 13.5711 4 11.5 4C9.42893 4 7.75 5.67893 7.75 7.75C7.75 9.82107 9.42893 11.5 11.5 11.5Z"
      />
    </Svg>
  );
};

const EyeIcon = assignWithoutSideEffects(_EyeIcon, {
  componentId: 'EyeIcon',
});

export default EyeIcon;
