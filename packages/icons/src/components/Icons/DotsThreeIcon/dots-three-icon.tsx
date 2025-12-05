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
        fill={iconColor}
        d="M1.125 0C1.74632 0 2.25 0.50368 2.25 1.125C2.25 1.74632 1.74632 2.25 1.125 2.25C0.50368 2.25 0 1.74632 0 1.125C0 0.50368 0.50368 0 1.125 0Z"
      />
      <Path
        fill={iconColor}
        d="M7.5 0C8.12132 0 8.625 0.50368 8.625 1.125C8.625 1.74632 8.12132 2.25 7.5 2.25C6.87868 2.25 6.375 1.74632 6.375 1.125C6.375 0.50368 6.87868 0 7.5 0Z"
      />
      <Path
        fill={iconColor}
        d="M13.875 0C14.4963 0 15 0.50368 15 1.125C15 1.74632 14.4963 2.25 13.875 2.25C13.2537 2.25 12.75 1.74632 12.75 1.125C12.75 0.50368 13.2537 0 13.875 0Z"
      />
    </Svg>
  );
};

const DotsThreeIcon = assignWithoutSideEffects(_DotsThreeIcon, {
  componentId: 'DotsThreeIcon',
});

export default DotsThreeIcon;
