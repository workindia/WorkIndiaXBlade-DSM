import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _SkipBackIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 15 18"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 0C1.16421 0 1.5 0.335786 1.5 0.75V17.25C1.5 17.6642 1.16421 18 0.75 18C0.335786 18 0 17.6642 0 17.25V0.75C0 0.335786 0.335786 0 0.75 0Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SkipBackIcon = assignWithoutSideEffects(_SkipBackIcon, {
  componentId: 'SkipBackIcon',
});

export default SkipBackIcon;
