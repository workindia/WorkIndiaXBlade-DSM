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
        fill={iconColor}
        d="M1.125 8.625C1.74632 8.625 2.25 8.12132 2.25 7.5C2.25 6.87868 1.74632 6.375 1.125 6.375C0.50368 6.375 0 6.87868 0 7.5C0 8.12132 0.50368 8.625 1.125 8.625Z"
      />
      <Path
        fill={iconColor}
        d="M1.125 2.25C1.74632 2.25 2.25 1.74632 2.25 1.125C2.25 0.50368 1.74632 0 1.125 0C0.50368 0 0 0.50368 0 1.125C0 1.74632 0.50368 2.25 1.125 2.25Z"
      />
      <Path
        fill={iconColor}
        d="M1.125 15C1.74632 15 2.25 14.4963 2.25 13.875C2.25 13.2537 1.74632 12.75 1.125 12.75C0.50368 12.75 0 13.2537 0 13.875C0 14.4963 0.50368 15 1.125 15Z"
      />
    </Svg>
  );
};

const DotsThreeVerticalIcon = assignWithoutSideEffects(_DotsThreeVerticalIcon, {
  componentId: 'DotsThreeVerticalIcon',
});

export default DotsThreeVerticalIcon;
