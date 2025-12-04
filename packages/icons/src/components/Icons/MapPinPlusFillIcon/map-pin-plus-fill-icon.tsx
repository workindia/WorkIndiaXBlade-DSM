import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _MapPinPlusFillIcon: IconComponent = ({
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
      viewBox="0 0 17 21"
      fill="none"
    >
      <Path
        d="M8.25 0C6.06273 0.00248131 3.96575 0.872472 2.41911 2.41911C0.872472 3.96575 0.00248131 6.06273 0 8.25C0 11.1938 1.36031 14.3138 3.9375 17.2734C5.09552 18.6108 6.39886 19.8151 7.82344 20.8641C7.94954 20.9524 8.09978 20.9998 8.25375 20.9998C8.40772 20.9998 8.55796 20.9524 8.68406 20.8641C10.106 19.8147 11.4068 18.6104 12.5625 17.2734C15.1359 14.3138 16.5 11.1938 16.5 8.25C16.4975 6.06273 15.6275 3.96575 14.0809 2.41911C12.5343 0.872472 10.4373 0.00248131 8.25 0ZM11.25 9H9V11.25C9 11.4489 8.92098 11.6397 8.78033 11.7803C8.63968 11.921 8.44891 12 8.25 12C8.05109 12 7.86032 11.921 7.71967 11.7803C7.57902 11.6397 7.5 11.4489 7.5 11.25V9H5.25C5.05109 9 4.86032 8.92098 4.71967 8.78033C4.57902 8.63968 4.5 8.44891 4.5 8.25C4.5 8.05109 4.57902 7.86032 4.71967 7.71967C4.86032 7.57902 5.05109 7.5 5.25 7.5H7.5V5.25C7.5 5.05109 7.57902 4.86032 7.71967 4.71967C7.86032 4.57902 8.05109 4.5 8.25 4.5C8.44891 4.5 8.63968 4.57902 8.78033 4.71967C8.92098 4.86032 9 5.05109 9 5.25V7.5H11.25C11.4489 7.5 11.6397 7.57902 11.7803 7.71967C11.921 7.86032 12 8.05109 12 8.25C12 8.44891 11.921 8.63968 11.7803 8.78033C11.6397 8.92098 11.4489 9 11.25 9Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const MapPinPlusFillIcon = assignWithoutSideEffects(_MapPinPlusFillIcon, {
  componentId: 'MapPinPlusFillIcon',
});

export default MapPinPlusFillIcon;
