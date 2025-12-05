import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _MagnifyingGlassMinusIcon: IconComponent = ({
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
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15C11.9779 15 15 11.9779 15 8.25C15 4.52208 11.9779 1.5 8.25 1.5ZM0 8.25C0 3.69365 3.69365 0 8.25 0C12.8063 0 16.5 3.69365 16.5 8.25C16.5 10.2581 15.7825 12.0987 14.59 13.5293L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L13.5293 14.59C12.0987 15.7825 10.2581 16.5 8.25 16.5C3.69365 16.5 0 12.8063 0 8.25ZM4.5 8.25C4.5 7.83579 4.83579 7.5 5.25 7.5H11.25C11.6642 7.5 12 7.83579 12 8.25C12 8.66421 11.6642 9 11.25 9H5.25C4.83579 9 4.5 8.66421 4.5 8.25Z"
      />
    </Svg>
  );
};

const MagnifyingGlassMinusIcon = assignWithoutSideEffects(
  _MagnifyingGlassMinusIcon,
  {
    componentId: 'MagnifyingGlassMinusIcon',
  },
);

export default MagnifyingGlassMinusIcon;
