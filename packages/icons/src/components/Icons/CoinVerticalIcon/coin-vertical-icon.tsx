import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _CoinVerticalIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 17 20"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M14.8603 3.00844C13.7287 1.06875 12.18 0 10.5 0H6C4.32 0 2.77125 1.06875 1.63969 3.00844C0.582188 4.82062 0 7.21875 0 9.75C0 12.2812 0.582188 14.6794 1.63969 16.4916C2.77125 18.4312 4.32 19.5 6 19.5H10.5C12.18 19.5 13.7287 18.4312 14.8603 16.4916C15.9178 14.6794 16.5 12.2812 16.5 9.75C16.5 7.21875 15.9178 4.82062 14.8603 3.00844ZM14.9803 9H11.9803C11.9217 7.46096 11.6153 5.94145 11.0728 4.5H13.9406C14.5144 5.75437 14.8931 7.3125 14.9803 9ZM13.0491 3H10.3556C10.0424 2.45655 9.66463 1.9529 9.23063 1.5H10.5C11.4375 1.5 12.3188 2.0625 13.0491 3ZM1.5 9.75C1.5 5.27812 3.5625 1.5 6 1.5C8.4375 1.5 10.5 5.27812 10.5 9.75C10.5 14.2219 8.4375 18 6 18C3.5625 18 1.5 14.2219 1.5 9.75ZM10.5 18H9.23344C9.66744 17.5471 10.0452 17.0435 10.3584 16.5H13.0519C12.3188 17.4375 11.4375 18 10.5 18ZM13.9406 15H11.0737C11.6162 13.5585 11.9227 12.039 11.9813 10.5H14.9813C14.8931 12.1875 14.5144 13.7456 13.9406 15Z"
      />
    </Svg>
  );
};

const CoinVerticalIcon = assignWithoutSideEffects(_CoinVerticalIcon, {
  componentId: 'CoinVerticalIcon',
});

export default CoinVerticalIcon;
