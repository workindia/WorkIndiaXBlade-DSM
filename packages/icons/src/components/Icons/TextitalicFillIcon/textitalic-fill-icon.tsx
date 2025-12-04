import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _TextitalicFillIcon: IconComponent = ({
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
        d="M16.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V1.5C18 1.10218 17.842 0.720644 17.5607 0.43934C17.2794 0.158035 16.8978 0 16.5 0ZM13.5 4.5H11.4037L8.18906 13.5H9.75C9.94891 13.5 10.1397 13.579 10.2803 13.7197C10.421 13.8603 10.5 14.0511 10.5 14.25C10.5 14.4489 10.421 14.6397 10.2803 14.7803C10.1397 14.921 9.94891 15 9.75 15H4.5C4.30109 15 4.11032 14.921 3.96967 14.7803C3.82902 14.6397 3.75 14.4489 3.75 14.25C3.75 14.0511 3.82902 13.8603 3.96967 13.7197C4.11032 13.579 4.30109 13.5 4.5 13.5H6.59625L9.81094 4.5H8.25C8.05109 4.5 7.86032 4.42098 7.71967 4.28033C7.57902 4.13968 7.5 3.94891 7.5 3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H13.5C13.6989 3 13.8897 3.07902 14.0303 3.21967C14.171 3.36032 14.25 3.55109 14.25 3.75C14.25 3.94891 14.171 4.13968 14.0303 4.28033C13.8897 4.42098 13.6989 4.5 13.5 4.5Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const TextitalicFillIcon = assignWithoutSideEffects(_TextitalicFillIcon, {
  componentId: 'TextitalicFillIcon',
});

export default TextitalicFillIcon;
