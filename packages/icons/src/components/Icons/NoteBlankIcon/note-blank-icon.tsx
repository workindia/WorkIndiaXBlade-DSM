import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _NoteBlankIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        d="M16.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H11.6897C11.8867 18.0006 12.082 17.9621 12.264 17.8866C12.446 17.8111 12.6112 17.7002 12.75 17.5603L17.5603 12.75C17.7002 12.6112 17.8111 12.446 17.8866 12.264C17.9621 12.082 18.0006 11.8867 18 11.6897V1.5C18 1.10218 17.842 0.720644 17.5607 0.43934C17.2794 0.158035 16.8978 0 16.5 0ZM1.5 1.5H16.5V11.25H12C11.8011 11.25 11.6103 11.329 11.4697 11.4697C11.329 11.6103 11.25 11.8011 11.25 12V16.5H1.5V1.5ZM15.4397 12.75L12.75 15.4397V12.75H15.4397Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const NoteBlankIcon = assignWithoutSideEffects(_NoteBlankIcon, {
  componentId: 'NoteBlankIcon',
});

export default NoteBlankIcon;
