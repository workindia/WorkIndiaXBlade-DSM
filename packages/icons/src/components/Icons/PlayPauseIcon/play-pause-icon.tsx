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
        d="M14.25 0C14.6642 0 15 0.335786 15 0.75V12.75C15 13.1642 14.6642 13.5 14.25 13.5C13.8358 13.5 13.5 13.1642 13.5 12.75V0.75C13.5 0.335786 13.8358 0 14.25 0Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const PlayPauseIcon = assignWithoutSideEffects(_PlayPauseIcon, {
  componentId: 'PlayPauseIcon',
});

export default PlayPauseIcon;
