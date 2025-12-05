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
        fill={iconColor}
        d="M0 8.25C0 7.83579 0.335786 7.5 0.75 7.5H7.5C7.91421 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 7.91421 9 7.5 9H0.75C0.335786 9 0 8.66421 0 8.25Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M0 2.25C0 1.83579 0.335786 1.5 0.75 1.5H6C6.41421 1.5 6.75 1.83579 6.75 2.25C6.75 2.66421 6.41421 3 6 3H0.75C0.335786 3 0 2.66421 0 2.25Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M0 14.25C0 13.8358 0.335786 13.5 0.75 13.5H13.5C13.9142 13.5 14.25 13.8358 14.25 14.25C14.25 14.6642 13.9142 15 13.5 15H0.75C0.335786 15 0 14.6642 0 14.25Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M12.9697 0.21967C13.2626 -0.0732233 13.7374 -0.0732233 14.0303 0.21967L17.7803 3.96967C18.0732 4.26256 18.0732 4.73744 17.7803 5.03033C17.4874 5.32322 17.0126 5.32322 16.7197 5.03033L13.5 1.81066L10.2803 5.03033C9.98744 5.32322 9.51256 5.32322 9.21967 5.03033C8.92678 4.73744 8.92678 4.26256 9.21967 3.96967L12.9697 0.21967Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M13.5 1.11759e-08C13.9142 1.11759e-08 14.25 0.335786 14.25 0.75V9.75C14.25 10.1642 13.9142 10.5 13.5 10.5C13.0858 10.5 12.75 10.1642 12.75 9.75V0.75C12.75 0.335786 13.0858 1.11759e-08 13.5 1.11759e-08Z"
      />
    </Svg>
  );
};

const SortDescendingIcon = assignWithoutSideEffects(_SortDescendingIcon, {
  componentId: 'SortDescendingIcon',
});

export default SortDescendingIcon;
