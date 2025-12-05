import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ListBulletsIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 18 15"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M2.25 1.125C2.25 1.74632 1.74632 2.25 1.125 2.25C0.50368 2.25 0 1.74632 0 1.125C0 0.50368 0.50368 0 1.125 0C1.74632 0 2.25 0.50368 2.25 1.125Z"
      />
      <Path
        fill={iconColor}
        d="M5.25 0.375C4.83579 0.375 4.5 0.710786 4.5 1.125C4.5 1.53921 4.83579 1.875 5.25 1.875H17.25C17.6642 1.875 18 1.53921 18 1.125C18 0.710786 17.6642 0.375 17.25 0.375H5.25Z"
      />
      <Path
        fill={iconColor}
        d="M5.25 6.375C4.83579 6.375 4.5 6.71079 4.5 7.125C4.5 7.53921 4.83579 7.875 5.25 7.875H17.25C17.6642 7.875 18 7.53921 18 7.125C18 6.71079 17.6642 6.375 17.25 6.375H5.25Z"
      />
      <Path
        fill={iconColor}
        d="M4.5 13.125C4.5 12.7108 4.83579 12.375 5.25 12.375H17.25C17.6642 12.375 18 12.7108 18 13.125C18 13.5392 17.6642 13.875 17.25 13.875H5.25C4.83579 13.875 4.5 13.5392 4.5 13.125Z"
      />
      <Path
        fill={iconColor}
        d="M1.125 8.25C1.74632 8.25 2.25 7.74632 2.25 7.125C2.25 6.50368 1.74632 6 1.125 6C0.50368 6 0 6.50368 0 7.125C0 7.74632 0.50368 8.25 1.125 8.25Z"
      />
      <Path
        fill={iconColor}
        d="M2.25 13.125C2.25 13.7463 1.74632 14.25 1.125 14.25C0.50368 14.25 0 13.7463 0 13.125C0 12.5037 0.50368 12 1.125 12C1.74632 12 2.25 12.5037 2.25 13.125Z"
      />
    </Svg>
  );
};

const ListBulletsIcon = assignWithoutSideEffects(_ListBulletsIcon, {
  componentId: 'ListBulletsIcon',
});

export default ListBulletsIcon;
