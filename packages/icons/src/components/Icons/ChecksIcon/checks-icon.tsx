import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ChecksIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 23 10"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M13.2851 0.224469C13.5753 0.519989 13.5711 0.994844 13.2755 1.28509L4.87553 9.53509C4.58378 9.82163 4.11627 9.82164 3.8245 9.53512L0.2245 5.9998C-0.0710369 5.70958 -0.0753417 5.23472 0.214884 4.93919C0.50511 4.64365 0.979964 4.63935 1.2755 4.92957L4.34997 7.9488L12.2245 0.214914C12.52 -0.0753287 12.9948 -0.0710507 13.2851 0.224469Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M22.2851 0.224469C22.5753 0.519989 22.5711 0.994844 22.2755 1.28509L13.8755 9.53509C13.5838 9.82162 13.1163 9.82164 12.8245 9.53512L10.5333 7.28512C10.2377 6.9949 10.2334 6.52005 10.5236 6.22451C10.8138 5.92897 11.2887 5.92465 11.5842 6.21488L13.35 7.94881L21.2245 0.214914C21.52 -0.0753287 21.9948 -0.0710507 22.2851 0.224469Z"
      />
    </Svg>
  );
};

const ChecksIcon = assignWithoutSideEffects(_ChecksIcon, {
  componentId: 'ChecksIcon',
});

export default ChecksIcon;
