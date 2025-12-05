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
        fill={iconColor}
        d="M14.0303 6.96967C14.3232 7.26256 14.3232 7.73744 14.0303 8.03033L8.78033 13.2803C8.48744 13.5732 8.01256 13.5732 7.71967 13.2803L5.46967 11.0303C5.17678 10.7374 5.17678 10.2626 5.46967 9.96967C5.76256 9.67678 6.23744 9.67678 6.53033 9.96967L8.25 11.6893L12.9697 6.96967C13.2626 6.67678 13.7374 6.67678 14.0303 6.96967Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M9.75 1.5C5.19365 1.5 1.5 5.19365 1.5 9.75C1.5 14.3063 5.19365 18 9.75 18C14.3063 18 18 14.3063 18 9.75C18 5.19365 14.3063 1.5 9.75 1.5ZM0 9.75C0 4.36522 4.36522 0 9.75 0C15.1348 0 19.5 4.36522 19.5 9.75C19.5 15.1348 15.1348 19.5 9.75 19.5C4.36522 19.5 0 15.1348 0 9.75Z"
      />
    </Svg>
  );
};

const CheckCircleIcon = assignWithoutSideEffects(_CheckCircleIcon, {
  componentId: 'CheckCircleIcon',
});

export default CheckCircleIcon;
