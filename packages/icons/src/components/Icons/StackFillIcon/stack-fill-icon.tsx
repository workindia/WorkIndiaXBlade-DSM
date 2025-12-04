import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _StackFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
    >
      <Path
        d="M18.3724 14.3521L9.74735 19.3818L1.12235 14.3521C0.951584 14.2671 0.75483 14.2503 0.572141 14.3053C0.389452 14.3602 0.234558 14.4827 0.138986 14.6478C0.043414 14.8129 0.0143477 15.0082 0.0577027 15.194C0.101058 15.3797 0.213576 15.542 0.372355 15.6477L9.37235 20.8977C9.48704 20.9646 9.61741 20.9999 9.75017 20.9999C9.88292 20.9999 10.0133 20.9646 10.128 20.8977L19.128 15.6477C19.2144 15.5988 19.2903 15.5333 19.3512 15.4548C19.4121 15.3763 19.4568 15.2865 19.4827 15.1907C19.5086 15.0948 19.5152 14.9947 19.5021 14.8963C19.4891 14.7978 19.4566 14.7029 19.4065 14.6171C19.3565 14.5313 19.2899 14.4563 19.2107 14.3965C19.1314 14.3366 19.041 14.2931 18.9448 14.2685C18.8486 14.2438 18.7485 14.2385 18.6502 14.2529C18.5519 14.2672 18.4575 14.301 18.3724 14.3521Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const StackFillIcon = assignWithoutSideEffects(_StackFillIcon, {
  componentId: 'StackFillIcon',
});

export default StackFillIcon;
