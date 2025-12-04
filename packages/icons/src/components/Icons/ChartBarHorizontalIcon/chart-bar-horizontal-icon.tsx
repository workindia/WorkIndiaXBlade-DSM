import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ChartBarHorizontalIcon: IconComponent = ({
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
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M17.25 6H13.5V2.25C13.5 2.05109 13.421 1.86032 13.2803 1.71967C13.1397 1.57902 12.9489 1.5 12.75 1.5H1.5V0.75C1.5 0.551088 1.42098 0.360322 1.28033 0.21967C1.13968 0.0790178 0.948912 0 0.75 0C0.551088 0 0.360322 0.0790178 0.21967 0.21967C0.0790178 0.360322 0 0.551088 0 0.75V17.25C0 17.4489 0.0790178 17.6397 0.21967 17.7803C0.360322 17.921 0.551088 18 0.75 18C0.948912 18 1.13968 17.921 1.28033 17.7803C1.42098 17.6397 1.5 17.4489 1.5 17.25V16.5H9.75C9.94891 16.5 10.1397 16.421 10.2803 16.2803C10.421 16.1397 10.5 15.9489 10.5 15.75V12H17.25C17.4489 12 17.6397 11.921 17.7803 11.7803C17.921 11.6397 18 11.4489 18 11.25V6.75C18 6.55109 17.921 6.36032 17.7803 6.21967C17.6397 6.07902 17.4489 6 17.25 6ZM12 3V6H1.5V3H12ZM9 15H1.5V12H9V15ZM16.5 10.5H1.5V7.5H16.5V10.5Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ChartBarHorizontalIcon = assignWithoutSideEffects(
  _ChartBarHorizontalIcon,
  {
    componentId: 'ChartBarHorizontalIcon',
  },
);

export default ChartBarHorizontalIcon;
