import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _AlignLeftIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        d="M1.5 0.75V17.25C1.5 17.4489 1.42098 17.6397 1.28033 17.7803C1.13968 17.921 0.948912 18 0.75 18C0.551088 18 0.360322 17.921 0.21967 17.7803C0.0790178 17.6397 0 17.4489 0 17.25V0.75C0 0.551088 0.0790178 0.360322 0.21967 0.21967C0.360322 0.0790178 0.551088 0 0.75 0C0.948912 0 1.13968 0.0790178 1.28033 0.21967C1.42098 0.360322 1.5 0.551088 1.5 0.75ZM3 6.75V3C3 2.60218 3.15804 2.22064 3.43934 1.93934C3.72064 1.65804 4.10218 1.5 4.5 1.5H13.5C13.8978 1.5 14.2794 1.65804 14.5607 1.93934C14.842 2.22064 15 2.60218 15 3V6.75C15 7.14782 14.842 7.52936 14.5607 7.81066C14.2794 8.09196 13.8978 8.25 13.5 8.25H4.5C4.10218 8.25 3.72064 8.09196 3.43934 7.81066C3.15804 7.52936 3 7.14782 3 6.75ZM4.5 6.75H13.5V3H4.5V6.75ZM18.75 11.25V15C18.75 15.3978 18.592 15.7794 18.3107 16.0607C18.0294 16.342 17.6478 16.5 17.25 16.5H4.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V11.25C3 10.8522 3.15804 10.4706 3.43934 10.1893C3.72064 9.90804 4.10218 9.75 4.5 9.75H17.25C17.6478 9.75 18.0294 9.90804 18.3107 10.1893C18.592 10.4706 18.75 10.8522 18.75 11.25ZM17.25 15V11.25H4.5V15H17.25Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const AlignLeftIcon = assignWithoutSideEffects(_AlignLeftIcon, {
  componentId: 'AlignLeftIcon',
});

export default AlignLeftIcon;
