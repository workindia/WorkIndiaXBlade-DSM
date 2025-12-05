import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _AlarmIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3ZM1.5 10.5C1.5 5.52944 5.52944 1.5 10.5 1.5C15.4706 1.5 19.5 5.52944 19.5 10.5C19.5 15.4706 15.4706 19.5 10.5 19.5C5.52944 19.5 1.5 15.4706 1.5 10.5Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M4.28033 0.21967C4.57322 0.512563 4.57322 0.987437 4.28033 1.28033L1.28033 4.28033C0.987437 4.57322 0.512563 4.57322 0.21967 4.28033C-0.0732233 3.98744 -0.0732233 3.51256 0.21967 3.21967L3.21967 0.21967C3.51256 -0.0732233 3.98744 -0.0732233 4.28033 0.21967Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M16.7197 0.21967C17.0126 -0.0732233 17.4874 -0.0732233 17.7803 0.21967L20.7803 3.21967C21.0732 3.51256 21.0732 3.98744 20.7803 4.28033C20.4874 4.57322 20.0126 4.57322 19.7197 4.28033L16.7197 1.28033C16.4268 0.987437 16.4268 0.512563 16.7197 0.21967Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M10.5 4.5C10.9142 4.5 11.25 4.83579 11.25 5.25V9.75H15.75C16.1642 9.75 16.5 10.0858 16.5 10.5C16.5 10.9142 16.1642 11.25 15.75 11.25H10.5C10.0858 11.25 9.75 10.9142 9.75 10.5V5.25C9.75 4.83579 10.0858 4.5 10.5 4.5Z"
      />
    </Svg>
  );
};

const AlarmIcon = assignWithoutSideEffects(_AlarmIcon, {
  componentId: 'AlarmIcon',
});

export default AlarmIcon;
