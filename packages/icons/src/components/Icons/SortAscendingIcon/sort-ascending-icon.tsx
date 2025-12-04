import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _SortAscendingIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        d="M0 0.75C0 0.335786 0.335786 0 0.75 0H13.5C13.9142 0 14.25 0.335786 14.25 0.75C14.25 1.16421 13.9142 1.5 13.5 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM13.5 4.5C13.9142 4.5 14.25 4.83579 14.25 5.25V12.4393L16.7197 9.96967C17.0126 9.67678 17.4874 9.67678 17.7803 9.96967C18.0732 10.2626 18.0732 10.7374 17.7803 11.0303L14.0303 14.7803C13.7374 15.0732 13.2626 15.0732 12.9697 14.7803L9.21967 11.0303C8.92678 10.7374 8.92678 10.2626 9.21967 9.96967C9.51256 9.67678 9.98744 9.67678 10.2803 9.96967L12.75 12.4393V5.25C12.75 4.83579 13.0858 4.5 13.5 4.5ZM0 6.75C0 6.33579 0.335786 6 0.75 6H7.5C7.91421 6 8.25 6.33579 8.25 6.75C8.25 7.16421 7.91421 7.5 7.5 7.5H0.75C0.335786 7.5 0 7.16421 0 6.75ZM0 12.75C0 12.3358 0.335786 12 0.75 12H6C6.41421 12 6.75 12.3358 6.75 12.75C6.75 13.1642 6.41421 13.5 6 13.5H0.75C0.335786 13.5 0 13.1642 0 12.75Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const SortAscendingIcon = assignWithoutSideEffects(_SortAscendingIcon, {
  componentId: 'SortAscendingIcon',
});

export default SortAscendingIcon;
