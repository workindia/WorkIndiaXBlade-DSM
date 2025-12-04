import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _TimerIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 18 21"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4.5C4.85786 4.5 1.5 7.85786 1.5 12C1.5 16.1421 4.85786 19.5 9 19.5C13.1421 19.5 16.5 16.1421 16.5 12C16.5 7.85786 13.1421 4.5 9 4.5ZM0 12C0 7.02944 4.02944 3 9 3C13.9706 3 18 7.02944 18 12C18 16.9706 13.9706 21 9 21C4.02944 21 0 16.9706 0 12Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const TimerIcon = assignWithoutSideEffects(_TimerIcon, {
  componentId: 'TimerIcon',
});

export default TimerIcon;
