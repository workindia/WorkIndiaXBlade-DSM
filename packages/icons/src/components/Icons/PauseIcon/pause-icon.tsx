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
        fill={iconColor}
        d="M9.75 1.5C9.75 0.671573 10.4216 0 11.25 0H15C15.8284 0 16.5 0.671573 16.5 1.5V16.5C16.5 17.3284 15.8284 18 15 18H11.25C10.4216 18 9.75 17.3284 9.75 16.5V1.5ZM15 1.5H11.25V16.5H15V1.5Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M0 1.5C0 0.671573 0.671573 0 1.5 0H5.25C6.07843 0 6.75 0.671573 6.75 1.5V16.5C6.75 17.3284 6.07843 18 5.25 18H1.5C0.671573 18 0 17.3284 0 16.5V1.5ZM5.25 1.5H1.5V16.5H5.25V1.5Z"
      />
    </Svg>
  );
};

const PauseIcon = assignWithoutSideEffects(_PauseIcon, {
  componentId: 'PauseIcon',
});

export default PauseIcon;
