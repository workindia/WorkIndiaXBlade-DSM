import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ChatsFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M19.5 6C19.5 5.60218 19.342 5.22064 19.0607 4.93934C18.7794 4.65804 18.3978 4.5 18 4.5H15V1.5C15 1.10218 14.842 0.720644 14.5607 0.43934C14.2794 0.158035 13.8978 0 13.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V13.5C0.000440356 13.6411 0.0406755 13.7792 0.116083 13.8985C0.191491 14.0177 0.299012 14.1133 0.426294 14.1742C0.553577 14.2351 0.695457 14.2589 0.835635 14.2428C0.975813 14.2266 1.1086 14.1713 1.21875 14.0831L4.5 11.4375V14.25C4.5 14.6478 4.65804 15.0294 4.93934 15.3107C5.22064 15.592 5.60218 15.75 6 15.75H14.7741L18.2812 18.5831C18.414 18.6905 18.5793 18.7493 18.75 18.75C18.9489 18.75 19.1397 18.671 19.2803 18.5303C19.421 18.3897 19.5 18.1989 19.5 18V6ZM15.5109 14.4169C15.3782 14.3095 15.2129 14.2507 15.0422 14.25H6V11.25H13.5C13.8978 11.25 14.2794 11.092 14.5607 10.8107C14.842 10.5294 15 10.1478 15 9.75V6H18V16.4297L15.5109 14.4169Z"
      />
    </Svg>
  );
};

const ChatsFillIcon = assignWithoutSideEffects(_ChatsFillIcon, {
  componentId: 'ChatsFillIcon',
});

export default ChatsFillIcon;
