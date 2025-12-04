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
      viewBox="0 0 17 19"
      fill="none"
    >
      <Path d="M1 1L16 17.5" fill={iconColor} />
    </Svg>
  );
};

const EyeIcon = assignWithoutSideEffects(_EyeIcon, {
  componentId: 'EyeIcon',
});

export default EyeIcon;
