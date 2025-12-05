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
        fill={iconColor}
        d="M0.75 0C1.16421 0 1.5 0.335786 1.5 0.75V17.25C1.5 17.6642 1.16421 18 0.75 18C0.335786 18 0 17.6642 0 17.25V0.75C0 0.335786 0.335786 0 0.75 0Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M13.4611 0.0046287C13.7253 -0.00225273 13.9865 0.0607699 14.2185 0.187318C14.4505 0.313865 14.6449 0.499447 14.7821 0.725283C14.9193 0.95112 14.9944 1.20919 14.9998 1.47338L15 1.48875V16.5112L14.9998 16.5266C14.9944 16.7908 14.9193 17.0489 14.7821 17.2747C14.6449 17.5006 14.4505 17.6861 14.2185 17.8127C13.9865 17.9392 13.7253 18.0023 13.4611 17.9954C13.1969 17.9885 12.9393 17.912 12.7142 17.7735L12.7095 17.7706L0.700939 10.2604L0.699825 10.2597C0.48603 10.1266 0.309634 9.94118 0.187257 9.72102C0.0646683 9.50048 0.00033474 9.25232 0.00033474 9C0.00033474 8.74768 0.0646679 8.49952 0.187257 8.27898C0.309636 8.05882 0.486037 7.87343 0.699838 7.74027L0.700939 7.73959L12.7142 0.226488C12.9393 0.0880329 13.1969 0.0115101 13.4611 0.0046287ZM13.5 1.50424L1.51446 9L13.5 16.4958V1.50424Z"
      />
    </Svg>
  );
};

const SkipBackIcon = assignWithoutSideEffects(_SkipBackIcon, {
  componentId: 'SkipBackIcon',
});

export default SkipBackIcon;
