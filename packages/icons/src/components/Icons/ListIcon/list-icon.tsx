import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ListIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 18 14"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75Z"
      />
      <Path
        fill={iconColor}
        d="M0 6.75C0 6.33579 0.335786 6 0.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H0.75C0.335786 7.5 0 7.16421 0 6.75Z"
      />
      <Path
        fill={iconColor}
        d="M0.75 12C0.335786 12 0 12.3358 0 12.75C0 13.1642 0.335786 13.5 0.75 13.5H17.25C17.6642 13.5 18 13.1642 18 12.75C18 12.3358 17.6642 12 17.25 12H0.75Z"
      />
    </Svg>
  );
};

const ListIcon = assignWithoutSideEffects(_ListIcon, {
  componentId: 'ListIcon',
});

export default ListIcon;
