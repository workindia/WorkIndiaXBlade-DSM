import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _WifiHighFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 23 18"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M22.1577 5.70012L12.4077 17.4592C12.2668 17.6294 12.0898 17.7662 11.8896 17.8598C11.6894 17.9533 11.4709 18.0012 11.2499 18.0001C11.0296 18.0007 10.8118 17.9525 10.6123 17.859C10.4128 17.7654 10.2364 17.6289 10.0959 17.4592L0.342107 5.70012C0.213733 5.54675 0.118072 5.36876 0.0610011 5.17707C0.00392962 4.98538 -0.0133473 4.78405 0.0102317 4.58544C0.0336905 4.38634 0.0969957 4.194 0.196374 4.01988C0.295751 3.84577 0.429168 3.69345 0.588669 3.572C3.65278 1.24109 7.40002 -0.0143572 11.2499 0.000123883C15.0998 -0.0143572 18.8471 1.24109 21.9112 3.572C22.0707 3.69345 22.2041 3.84577 22.3035 4.01988C22.4028 4.194 22.4661 4.38634 22.4896 4.58544C22.5132 4.78405 22.4959 4.98538 22.4388 5.17707C22.3818 5.36876 22.2861 5.54675 22.1577 5.70012Z"
      />
    </Svg>
  );
};

const WifiHighFillIcon = assignWithoutSideEffects(_WifiHighFillIcon, {
  componentId: 'WifiHighFillIcon',
});

export default WifiHighFillIcon;
