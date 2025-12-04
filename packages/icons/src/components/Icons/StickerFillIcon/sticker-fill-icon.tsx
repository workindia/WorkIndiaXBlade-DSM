import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _StickerFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        d="M12.75 0H5.25C3.85807 0.00148896 2.52358 0.555091 1.53933 1.53933C0.555091 2.52358 0.00148896 3.85807 0 5.25V12.75C0.00148896 14.1419 0.555091 15.4764 1.53933 16.4607C2.52358 17.4449 3.85807 17.9985 5.25 18H9.75C9.83061 17.9999 9.91068 17.9869 9.98719 17.9616C12.4462 17.1413 17.1413 12.4462 17.9616 9.98719C17.9869 9.91068 17.9999 9.83061 18 9.75V5.25C17.9985 3.85807 17.4449 2.52358 16.4607 1.53933C15.4764 0.555091 14.1419 0.00148896 12.75 0ZM9.75 16.4456V13.5C9.75 12.5054 10.1451 11.5516 10.8483 10.8483C11.5516 10.1451 12.5054 9.75 13.5 9.75H16.4456C15.5775 11.7703 11.7703 15.5775 9.75 16.4456Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const StickerFillIcon = assignWithoutSideEffects(_StickerFillIcon, {
  componentId: 'StickerFillIcon',
});

export default StickerFillIcon;
