import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _PlayPauseIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 20 14"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M14.25 0C14.6642 0 15 0.335786 15 0.75V12.75C15 13.1642 14.6642 13.5 14.25 13.5C13.8358 13.5 13.5 13.1642 13.5 12.75V0.75C13.5 0.335786 13.8358 0 14.25 0Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M18.75 0C19.1642 0 19.5 0.335786 19.5 0.75V12.75C19.5 13.1642 19.1642 13.5 18.75 13.5C18.3358 13.5 18 13.1642 18 12.75V0.75C18 0.335786 18.3358 0 18.75 0Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M0.781781 0.180482C1.01629 0.0535999 1.28053 -0.00810043 1.54698 0.00180608C1.81294 0.0116945 2.07141 0.092567 2.29557 0.23602L2.2968 0.236809L10.5609 5.49853L10.5618 5.49909C10.7724 5.63265 10.9459 5.81724 11.0662 6.03574C11.1866 6.25455 11.2498 6.50025 11.2498 6.75C11.2498 6.99975 11.1866 7.24545 11.0662 7.46426C10.946 7.68264 10.7726 7.86714 10.5622 8.00069L10.5609 8.00147L2.2968 13.2632L2.2954 13.2641C2.07128 13.4075 1.81287 13.4883 1.54698 13.4982C1.28053 13.5081 1.01629 13.4464 0.781781 13.3195C0.54727 13.1926 0.351059 13.0052 0.213574 12.7768C0.0760887 12.5483 0.00235753 12.2872 5.59241e-05 12.0205L0 12.0141L2.79844e-05 1.47946C0.00232959 1.21284 0.0760891 0.951703 0.213574 0.723247C0.351059 0.49479 0.54727 0.307364 0.781781 0.180482ZM1.50003 1.50774L9.7336 6.75L1.50003 11.9923V1.50774Z"
      />
    </Svg>
  );
};

const PlayPauseIcon = assignWithoutSideEffects(_PlayPauseIcon, {
  componentId: 'PlayPauseIcon',
});

export default PlayPauseIcon;
