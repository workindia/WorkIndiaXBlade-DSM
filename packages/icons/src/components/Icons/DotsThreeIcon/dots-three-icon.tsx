import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _DotsThreeIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 15 3"
      fill="none"
    >
      <Path
        d="M1.125 0C1.74632 0 2.25 0.50368 2.25 1.125C2.25 1.74632 1.74632 2.25 1.125 2.25C0.50368 2.25 0 1.74632 0 1.125C0 0.50368 0.50368 0 1.125 0Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const DotsThreeIcon = assignWithoutSideEffects(_DotsThreeIcon, {
  componentId: 'DotsThreeIcon',
});

export default DotsThreeIcon;
