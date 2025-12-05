import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _TextitalicIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 14 15"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M13.5 0.75C13.5 0.948912 13.421 1.13968 13.2803 1.28033C13.1397 1.42098 12.9489 1.5 12.75 1.5H9.54094L5.54062 13.5H8.25C8.44891 13.5 8.63968 13.579 8.78033 13.7197C8.92098 13.8603 9 14.0511 9 14.25C9 14.4489 8.92098 14.6397 8.78033 14.7803C8.63968 14.921 8.44891 15 8.25 15H0.75C0.551088 15 0.360322 14.921 0.21967 14.7803C0.0790178 14.6397 0 14.4489 0 14.25C0 14.0511 0.0790178 13.8603 0.21967 13.7197C0.360322 13.579 0.551088 13.5 0.75 13.5H3.95906L7.95937 1.5H5.25C5.05109 1.5 4.86032 1.42098 4.71967 1.28033C4.57902 1.13968 4.5 0.948912 4.5 0.75C4.5 0.551088 4.57902 0.360322 4.71967 0.21967C4.86032 0.0790178 5.05109 0 5.25 0H12.75C12.9489 0 13.1397 0.0790178 13.2803 0.21967C13.421 0.360322 13.5 0.551088 13.5 0.75Z"
      />
    </Svg>
  );
};

const TextitalicIcon = assignWithoutSideEffects(_TextitalicIcon, {
  componentId: 'TextitalicIcon',
});

export default TextitalicIcon;
