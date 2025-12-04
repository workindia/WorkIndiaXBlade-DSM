import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _LinkBreakIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3277 1.3093C11.1764 0.489589 12.3131 0.0360139 13.493 0.0462668C14.6729 0.0565197 15.8016 0.52978 16.6359 1.36412C17.4702 2.19845 17.9435 3.32711 17.9538 4.50699C17.964 5.68688 17.5104 6.82359 16.6907 7.6723C16.6836 7.67962 16.6764 7.6868 16.6691 7.69382L15.5178 8.79257C15.2182 9.07855 14.7434 9.06748 14.4574 8.76783C14.1715 8.46819 14.1825 7.99344 14.4822 7.70746L15.6218 6.61984C16.1619 6.05516 16.4606 5.30181 16.4538 4.52003C16.447 3.73344 16.1315 2.981 15.5752 2.42478C15.019 1.86855 14.2666 1.55305 13.48 1.54621C12.6982 1.53942 11.9449 1.83807 11.3802 2.37824L10.2926 3.51783C10.0066 3.81748 9.53183 3.82855 9.23219 3.54257C8.93254 3.25659 8.92146 2.78185 9.20744 2.4822L10.3062 1.33095C10.3132 1.32359 10.3204 1.31637 10.3277 1.3093Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const LinkBreakIcon = assignWithoutSideEffects(_LinkBreakIcon, {
  componentId: 'LinkBreakIcon',
});

export default LinkBreakIcon;
