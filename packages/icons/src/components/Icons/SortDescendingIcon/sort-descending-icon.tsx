import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _SortDescendingIcon: IconComponent = ({
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
      viewBox="0 0 18 15"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.25C0 7.83579 0.335786 7.5 0.75 7.5H7.5C7.91421 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 7.91421 9 7.5 9H0.75C0.335786 9 0 8.66421 0 8.25Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SortDescendingIcon = assignWithoutSideEffects(_SortDescendingIcon, {
  componentId: 'SortDescendingIcon',
});

export default SortDescendingIcon;
