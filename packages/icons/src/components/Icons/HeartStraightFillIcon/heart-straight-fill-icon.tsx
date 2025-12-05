import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _HeartStraightFillIcon: IconComponent = ({
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
      viewBox="0 0 21 18"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M21.0017 5.44389C21.0033 6.15812 20.8633 6.86558 20.5897 7.52535C20.3161 8.18511 19.9145 8.78409 19.4079 9.28764L11.0361 17.7833C10.9663 17.8541 10.8831 17.9104 10.7914 17.9488C10.6996 17.9872 10.6012 18.007 10.5017 18.007C10.4022 18.007 10.3038 17.9872 10.212 17.9488C10.1203 17.9104 10.0371 17.8541 9.96732 17.7833L1.59545 9.28764C0.57478 8.26821 0.000880077 6.88508 1.01136e-06 5.44251C-0.000878055 3.99995 0.571336 2.61612 1.59076 1.59545C2.61019 0.57478 3.99332 0.000880099 5.43588 1.0114e-06C6.87845 -0.000878076 8.26228 0.571336 9.28295 1.59076L10.5017 2.72982L11.7289 1.58701C12.4906 0.829126 13.4597 0.313891 14.5139 0.106353C15.5682 -0.101185 16.6603 0.00827904 17.6524 0.420925C18.6445 0.83357 19.4921 1.5309 20.0882 2.42487C20.6843 3.31885 21.0022 4.3694 21.0017 5.44389Z"
      />
    </Svg>
  );
};

const HeartStraightFillIcon = assignWithoutSideEffects(_HeartStraightFillIcon, {
  componentId: 'HeartStraightFillIcon',
});

export default HeartStraightFillIcon;
