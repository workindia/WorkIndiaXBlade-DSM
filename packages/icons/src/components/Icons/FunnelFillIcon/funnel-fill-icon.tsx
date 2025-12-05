import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _FunnelFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M19.1042 2.50875L19.0967 2.51719L12.747 9.29719V14.4994C12.7474 14.7468 12.6866 14.9905 12.5699 15.2087C12.4533 15.4269 12.2845 15.6128 12.0786 15.75L9.07861 17.7506C8.85253 17.9012 8.58981 17.9876 8.31848 18.0005C8.04715 18.0135 7.7774 17.9525 7.53802 17.8241C7.29864 17.6957 7.09862 17.5047 6.95932 17.2715C6.82001 17.0383 6.74664 16.7716 6.74705 16.5V9.29719L0.397358 2.51719L0.389858 2.50875C0.19462 2.29389 0.065929 2.02699 0.0193952 1.74043C-0.0271385 1.45387 0.0104851 1.15996 0.127702 0.89436C0.244919 0.628761 0.436692 0.402884 0.679756 0.244131C0.922821 0.0853783 1.20673 0.000572024 1.49705 0H17.997C18.2876 2.82179e-05 18.5719 0.0844411 18.8154 0.242982C19.0589 0.401524 19.2511 0.627369 19.3686 0.893076C19.4862 1.15878 19.5241 1.45292 19.4776 1.73973C19.4312 2.02655 19.3024 2.29371 19.107 2.50875H19.1042Z"
      />
    </Svg>
  );
};

const FunnelFillIcon = assignWithoutSideEffects(_FunnelFillIcon, {
  componentId: 'FunnelFillIcon',
});

export default FunnelFillIcon;
