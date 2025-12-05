import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _TreasureChestIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 21 16"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M15.75 0H5.25C3.85807 0.00148896 2.52358 0.555091 1.53933 1.53933C0.555091 2.52358 0.00148896 3.85807 0 5.25V14.25C0 14.6478 0.158035 15.0294 0.43934 15.3107C0.720644 15.592 1.10218 15.75 1.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V5.25C20.9985 3.85807 20.4449 2.52358 19.4607 1.53933C18.4764 0.555091 17.1419 0.00148896 15.75 0ZM19.5 5.25V6H16.5V1.575C17.3465 1.74904 18.107 2.20959 18.6535 2.87903C19.2 3.54846 19.4989 4.38584 19.5 5.25ZM11.25 9H9.75V6H11.25V9ZM9 10.5H12C12.1989 10.5 12.3897 10.421 12.5303 10.2803C12.671 10.1397 12.75 9.94891 12.75 9.75V7.5H15V14.25H6V7.5H8.25V9.75C8.25 9.94891 8.32902 10.1397 8.46967 10.2803C8.61032 10.421 8.80109 10.5 9 10.5ZM12.75 6V5.25C12.75 5.05109 12.671 4.86032 12.5303 4.71967C12.3897 4.57902 12.1989 4.5 12 4.5H9C8.80109 4.5 8.61032 4.57902 8.46967 4.71967C8.32902 4.86032 8.25 5.05109 8.25 5.25V6H6V1.5H15V6H12.75ZM4.5 1.575V6H1.5V5.25C1.50106 4.38584 1.80002 3.54846 2.3465 2.87903C2.89297 2.20959 3.65354 1.74904 4.5 1.575ZM1.5 7.5H4.5V14.25H1.5V7.5ZM19.5 14.25H16.5V7.5H19.5V14.25Z"
      />
    </Svg>
  );
};

const TreasureChestIcon = assignWithoutSideEffects(_TreasureChestIcon, {
  componentId: 'TreasureChestIcon',
});

export default TreasureChestIcon;
