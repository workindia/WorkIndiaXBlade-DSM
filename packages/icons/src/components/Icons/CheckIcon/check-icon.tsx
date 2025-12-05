import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _CheckIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 19 14"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M18.5303 0.21967C18.8232 0.512563 18.8232 0.987437 18.5303 1.28033L6.53033 13.2803C6.23744 13.5732 5.76256 13.5732 5.46967 13.2803L0.21967 8.03033C-0.0732233 7.73744 -0.0732233 7.26256 0.21967 6.96967C0.512563 6.67678 0.987437 6.67678 1.28033 6.96967L6 11.6893L17.4697 0.21967C17.7626 -0.0732233 18.2374 -0.0732233 18.5303 0.21967Z"
      />
    </Svg>
  );
};

const CheckIcon = assignWithoutSideEffects(_CheckIcon, {
  componentId: 'CheckIcon',
});

export default CheckIcon;
