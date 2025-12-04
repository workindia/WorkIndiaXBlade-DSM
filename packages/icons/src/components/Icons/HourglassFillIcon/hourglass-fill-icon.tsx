import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _HourglassFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        d="M13.5 4.84125V1.5C13.5 1.10218 13.342 0.720644 13.0607 0.43934C12.7794 0.158035 12.3978 0 12 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V4.875C0.000688159 5.10784 0.0553045 5.33736 0.159566 5.54556C0.263828 5.75376 0.4149 5.93498 0.600937 6.075L5.50031 9.75L0.6 13.425C0.414082 13.5651 0.26315 13.7463 0.159049 13.9545C0.0549468 14.1627 0.000506709 14.3922 0 14.625V18C0 18.3978 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5H12C12.3978 19.5 12.7794 19.342 13.0607 19.0607C13.342 18.7794 13.5 18.3978 13.5 18V14.6588C13.5 14.4267 13.4462 14.1978 13.3427 13.99C13.2392 13.7823 13.089 13.6014 12.9037 13.4616L7.99312 9.75L12.9037 6.03844C13.0887 5.89836 13.2388 5.71741 13.3422 5.50973C13.4456 5.30205 13.4996 5.07326 13.5 4.84125Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const HourglassFillIcon = assignWithoutSideEffects(_HourglassFillIcon, {
  componentId: 'HourglassFillIcon',
});

export default HourglassFillIcon;
