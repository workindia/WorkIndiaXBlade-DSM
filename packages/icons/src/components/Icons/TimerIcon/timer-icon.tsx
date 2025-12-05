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
        fill={iconColor}
        d="M9 4.5C4.85786 4.5 1.5 7.85786 1.5 12C1.5 16.1421 4.85786 19.5 9 19.5C13.1421 19.5 16.5 16.1421 16.5 12C16.5 7.85786 13.1421 4.5 9 4.5ZM0 12C0 7.02944 4.02944 3 9 3C13.9706 3 18 7.02944 18 12C18 16.9706 13.9706 21 9 21C4.02944 21 0 16.9706 0 12Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M13.2803 7.71967C13.5732 8.01256 13.5732 8.48744 13.2803 8.78033L9.53033 12.5303C9.23744 12.8232 8.76256 12.8232 8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L12.2197 7.71967C12.5126 7.42678 12.9874 7.42678 13.2803 7.71967Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M6 0.75C6 0.335786 6.33579 0 6.75 0H11.25C11.6642 0 12 0.335786 12 0.75C12 1.16421 11.6642 1.5 11.25 1.5H6.75C6.33579 1.5 6 1.16421 6 0.75Z"
      />
    </Svg>
  );
};

const TimerIcon = assignWithoutSideEffects(_TimerIcon, {
  componentId: 'TimerIcon',
});

export default TimerIcon;
