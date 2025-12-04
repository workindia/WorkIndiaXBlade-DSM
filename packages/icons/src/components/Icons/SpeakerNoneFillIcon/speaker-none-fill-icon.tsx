import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _SpeakerNoneFillIcon: IconComponent = ({
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
      viewBox="0 0 14 20"
      fill="none"
    >
      <Path
        d="M4.5 5.62372V13.8737C4.5 13.9732 4.46049 14.0686 4.39016 14.1389C4.31984 14.2092 4.22446 14.2487 4.125 14.2487H1.5C1.10218 14.2487 0.720644 14.0907 0.43934 13.8094C0.158035 13.5281 0 13.1465 0 12.7487V6.74872C0 6.35089 0.158035 5.96936 0.43934 5.68806C0.720644 5.40675 1.10218 5.24872 1.5 5.24872H4.125C4.22446 5.24872 4.31984 5.28823 4.39016 5.35855C4.46049 5.42888 4.5 5.52426 4.5 5.62372ZM13.2328 0.172155C13.1015 0.0635073 12.9371 0.00282259 12.7667 9.60477e-05C12.5963 -0.00263049 12.43 0.0527638 12.2953 0.157155L6.14813 4.93841C6.10252 4.97305 6.06546 5.01768 6.03979 5.06887C6.01411 5.12006 6.0005 5.17645 6 5.23372V14.2637C6.00017 14.3208 6.01335 14.377 6.03853 14.4282C6.06371 14.4793 6.10023 14.5241 6.14531 14.559L12.2925 19.3403C12.4116 19.4328 12.5558 19.4874 12.7063 19.4967C12.8568 19.5061 13.0066 19.4699 13.1362 19.3928C13.2503 19.3218 13.344 19.2225 13.4083 19.1045C13.4725 18.9866 13.5051 18.854 13.5028 18.7197V0.772155C13.5042 0.658244 13.4805 0.545424 13.4333 0.441721C13.3862 0.338018 13.3168 0.24598 13.23 0.172155H13.2328Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SpeakerNoneFillIcon = assignWithoutSideEffects(_SpeakerNoneFillIcon, {
  componentId: 'SpeakerNoneFillIcon',
});

export default SpeakerNoneFillIcon;
