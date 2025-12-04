import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _EnvelopeSimpleOpenFillIcon: IconComponent = ({
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
      viewBox="0 0 20 18"
      fill="none"
    >
      <Path
        d="M19.1663 6.12611L10.1663 0.126112C10.043 0.043883 9.89816 0 9.75 0C9.60184 0 9.457 0.043883 9.33375 0.126112L0.33375 6.12611C0.23101 6.19466 0.146789 6.28752 0.0885654 6.39644C0.0303423 6.50536 -8.00615e-05 6.62698 1.58235e-07 6.75049V16.5005C1.58235e-07 16.8983 0.158035 17.2798 0.43934 17.5611C0.720644 17.8425 1.10218 18.0005 1.5 18.0005H18C18.3978 18.0005 18.7794 17.8425 19.0607 17.5611C19.342 17.2798 19.5 16.8983 19.5 16.5005V6.75049C19.5001 6.62698 19.4697 6.50536 19.4114 6.39644C19.3532 6.28752 19.269 6.19466 19.1663 6.12611ZM1.5 16.5005V8.20642L7.67813 12.6127C7.80533 12.7035 7.95774 12.7524 8.11406 12.7524H11.3859C11.5423 12.7524 11.6947 12.7035 11.8219 12.6127L18 8.20642V16.5005H1.5Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const EnvelopeSimpleOpenFillIcon = assignWithoutSideEffects(
  _EnvelopeSimpleOpenFillIcon,
  {
    componentId: 'EnvelopeSimpleOpenFillIcon',
  },
);

export default EnvelopeSimpleOpenFillIcon;
