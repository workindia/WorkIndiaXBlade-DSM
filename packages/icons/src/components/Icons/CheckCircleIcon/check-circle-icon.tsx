import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _CheckCircleIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0303 6.96967C14.3232 7.26256 14.3232 7.73744 14.0303 8.03033L8.78033 13.2803C8.48744 13.5732 8.01256 13.5732 7.71967 13.2803L5.46967 11.0303C5.17678 10.7374 5.17678 10.2626 5.46967 9.96967C5.76256 9.67678 6.23744 9.67678 6.53033 9.96967L8.25 11.6893L12.9697 6.96967C13.2626 6.67678 13.7374 6.67678 14.0303 6.96967Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CheckCircleIcon = assignWithoutSideEffects(_CheckCircleIcon, {
  componentId: 'CheckCircleIcon',
});

export default CheckCircleIcon;
