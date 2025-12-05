import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ProhibitIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M9.75 0C7.82164 0 5.93657 0.571828 4.33319 1.64317C2.72982 2.71451 1.48013 4.23726 0.742179 6.01884C0.00422452 7.80042 -0.188858 9.76082 0.187348 11.6521C0.563554 13.5434 1.49215 15.2807 2.85571 16.6443C4.21928 18.0079 5.95656 18.9365 7.84787 19.3127C9.73919 19.6889 11.6996 19.4958 13.4812 18.7578C15.2627 18.0199 16.7855 16.7702 17.8568 15.1668C18.9282 13.5634 19.5 11.6784 19.5 9.75C19.4973 7.16498 18.4692 4.68661 16.6413 2.85872C14.8134 1.03084 12.335 0.00272983 9.75 0ZM18 9.75C18.0019 11.6789 17.3245 13.5469 16.0866 15.0262L4.47375 3.4125C5.67844 2.41029 7.14365 1.77191 8.69792 1.57207C10.2522 1.37223 11.8312 1.61919 13.2503 2.28406C14.6693 2.94892 15.8696 4.00418 16.7108 5.32636C17.5519 6.64854 17.9991 8.18294 18 9.75ZM1.5 9.75C1.49808 7.82106 2.17552 5.95306 3.41344 4.47375L15.0263 16.0875C13.8216 17.0897 12.3564 17.7281 10.8021 17.9279C9.24782 18.1278 7.66878 17.8808 6.24975 17.2159C4.83072 16.5511 3.6304 15.4958 2.78924 14.1736C1.94809 12.8515 1.5009 11.3171 1.5 9.75Z"
      />
    </Svg>
  );
};

const ProhibitIcon = assignWithoutSideEffects(_ProhibitIcon, {
  componentId: 'ProhibitIcon',
});

export default ProhibitIcon;
