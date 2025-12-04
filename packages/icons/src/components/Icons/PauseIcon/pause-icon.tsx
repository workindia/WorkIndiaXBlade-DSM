import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _PauseIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 1.5C9.75 0.671573 10.4216 0 11.25 0H15C15.8284 0 16.5 0.671573 16.5 1.5V16.5C16.5 17.3284 15.8284 18 15 18H11.25C10.4216 18 9.75 17.3284 9.75 16.5V1.5ZM15 1.5H11.25V16.5H15V1.5Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const PauseIcon = assignWithoutSideEffects(_PauseIcon, {
  componentId: 'PauseIcon',
});

export default PauseIcon;
