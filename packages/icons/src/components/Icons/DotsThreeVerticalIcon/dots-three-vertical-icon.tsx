import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _DotsThreeVerticalIcon: IconComponent = ({
  size,
  color,
  ...styledProps
}) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 3 15"
      fill="none"
    >
      <Path
        d="M1.125 8.625C1.74632 8.625 2.25 8.12132 2.25 7.5C2.25 6.87868 1.74632 6.375 1.125 6.375C0.50368 6.375 0 6.87868 0 7.5C0 8.12132 0.50368 8.625 1.125 8.625Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const DotsThreeVerticalIcon = assignWithoutSideEffects(_DotsThreeVerticalIcon, {
  componentId: 'DotsThreeVerticalIcon',
});

export default DotsThreeVerticalIcon;
