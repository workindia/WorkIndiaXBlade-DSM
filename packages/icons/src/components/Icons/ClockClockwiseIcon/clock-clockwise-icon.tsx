import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ClockClockwiseIcon: IconComponent = ({
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
      viewBox="0 0 19 18"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.9995 3.75036C9.41371 3.75036 9.7495 4.08615 9.7495 4.50036V8.57572L13.1354 10.6072C13.4906 10.8204 13.6057 11.281 13.3926 11.6362C13.1795 11.9914 12.7188 12.1066 12.3636 11.8935L8.61362 9.64348C8.38772 9.50794 8.2495 9.26381 8.2495 9.00036V4.50036C8.2495 4.08615 8.58528 3.75036 8.9995 3.75036Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ClockClockwiseIcon = assignWithoutSideEffects(_ClockClockwiseIcon, {
  componentId: 'ClockClockwiseIcon',
});

export default ClockClockwiseIcon;
