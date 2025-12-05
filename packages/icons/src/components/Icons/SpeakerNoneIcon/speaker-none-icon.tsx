import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _SpeakerNoneIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        fill={iconColor}
        d="M13.0791 0.0757859C12.9529 0.0143283 12.8121 -0.0105204 12.6726 0.00406327C12.533 0.018647 12.4004 0.0720784 12.2897 0.158286L5.74219 5.24985H1.5C1.10218 5.24985 0.720644 5.40788 0.43934 5.68919C0.158035 5.97049 0 6.35202 0 6.74985V12.7498C0 13.1477 0.158035 13.5292 0.43934 13.8105C0.720644 14.0918 1.10218 14.2498 1.5 14.2498H5.74219L12.2897 19.3414C12.4005 19.4275 12.5332 19.4809 12.6728 19.4953C12.8124 19.5097 12.9533 19.4847 13.0793 19.4231C13.2054 19.3615 13.3117 19.2657 13.3861 19.1467C13.4604 19.0277 13.4999 18.8902 13.5 18.7498V0.749848C13.5 0.609343 13.4606 0.471658 13.3861 0.352482C13.3117 0.233306 13.2053 0.137432 13.0791 0.0757859ZM1.5 6.74985H5.25V12.7498H1.5V6.74985ZM12 17.2161L6.75 13.1333V6.36641L12 2.2836V17.2161Z"
      />
    </Svg>
  );
};

const SpeakerNoneIcon = assignWithoutSideEffects(_SpeakerNoneIcon, {
  componentId: 'SpeakerNoneIcon',
});

export default SpeakerNoneIcon;
