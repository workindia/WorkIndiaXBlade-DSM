import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _QrCodeFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
    >
      <Path
        d="M6 0H1.5C0.671573 0 0 0.671573 0 1.5V6C0 6.82843 0.671573 7.5 1.5 7.5H6C6.82843 7.5 7.5 6.82843 7.5 6V1.5C7.5 0.671573 6.82843 0 6 0Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const QrCodeFillIcon = assignWithoutSideEffects(_QrCodeFillIcon, {
  componentId: 'QrCodeFillIcon',
});

export default QrCodeFillIcon;
