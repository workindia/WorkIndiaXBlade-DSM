import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _VideoCameraFillIcon: IconComponent = ({
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
      viewBox="0 0 23 14"
      fill="none"
    >
      <Path
        d="M16.5 1.5V12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5H1.5C1.10218 13.5 0.720644 13.342 0.43934 13.0607C0.158035 12.7794 0 12.3978 0 12V1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H15C15.3978 0 15.7794 0.158035 16.0607 0.43934C16.342 0.720644 16.5 1.10218 16.5 1.5ZM21.9375 1.52344C21.8317 1.49755 21.7216 1.49435 21.6145 1.51406C21.5073 1.53378 21.4056 1.57595 21.3159 1.63781L18.1669 3.73688C18.1155 3.77115 18.0734 3.81758 18.0443 3.87204C18.0152 3.9265 18 3.98731 18 4.04906V9.45094C18 9.51269 18.0152 9.5735 18.0443 9.62796C18.0734 9.68242 18.1155 9.72885 18.1669 9.76312L21.3337 11.8744C21.4523 11.9534 21.5909 11.9971 21.7333 12.0003C21.8758 12.0034 22.0162 11.9659 22.1381 11.8922C22.2509 11.8205 22.3434 11.721 22.4068 11.6033C22.4702 11.4856 22.5022 11.3536 22.5 11.22V2.25C22.5001 2.08366 22.4449 1.92202 22.343 1.79049C22.2412 1.65897 22.0986 1.56502 21.9375 1.52344Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const VideoCameraFillIcon = assignWithoutSideEffects(_VideoCameraFillIcon, {
  componentId: 'VideoCameraFillIcon',
});

export default VideoCameraFillIcon;
