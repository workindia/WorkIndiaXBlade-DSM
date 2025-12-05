import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ListPlusIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 20 16"
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
        d="M0.75 12C0.335786 12 0 12.3358 0 12.75C0 13.1642 0.335786 13.5 0.75 13.5H10.5C10.9142 13.5 11.25 13.1642 11.25 12.75C11.25 12.3358 10.9142 12 10.5 12H0.75Z"
      />
      <Path
        fill={iconColor}
        d="M13.5 12.75C13.5 12.3358 13.8358 12 14.25 12H15.75V10.5C15.75 10.0858 16.0858 9.75 16.5 9.75C16.9142 9.75 17.25 10.0858 17.25 10.5V12H18.75C19.1642 12 19.5 12.3358 19.5 12.75C19.5 13.1642 19.1642 13.5 18.75 13.5H17.25V15C17.25 15.4142 16.9142 15.75 16.5 15.75C16.0858 15.75 15.75 15.4142 15.75 15V13.5H14.25C13.8358 13.5 13.5 13.1642 13.5 12.75Z"
      />
    </Svg>
  );
};

const ListPlusIcon = assignWithoutSideEffects(_ListPlusIcon, {
  componentId: 'ListPlusIcon',
});

export default ListPlusIcon;
