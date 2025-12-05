import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _EyeSlashIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 17 19"
      fill="none"
    >
      <Path
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M1.00001 1L16 17.5"
      />
      <Path
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M7.27318 6.55C6.5372 7.21909 5.56557 7.56841 4.57204 7.52112C3.57851 7.47382 2.64446 7.03379 1.97537 6.29781C1.30627 5.56184 0.956952 4.59021 1.00425 3.59668C1.05154 2.60314 1.49158 1.66909 2.22755 1"
      />
      <Path
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M1.00018 1C1.79743 1.15267 2.52362 1.55992 3.06965 2.16055C3.61569 2.76119 3.95208 3.52279 4.02831 4.33094"
      />
      <Path
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M10.4961 11.6031C12.5398 9.77314 13.4389 7.75001 13.4389 7.75001C13.4389 7.75001 10.4389 1.00001 2.9389 1.00001C2.28942 0.999123 1.64097 1.0518 1.00015 1.15751"
      />
      <Path
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M6.4375 1C2.61531 2.935 1 6.56875 1 6.56875C1 6.56875 4 13.3187 11.5 13.3187C13.2574 13.3325 14.9927 12.9276 16.5625 12.1375"
      />
    </Svg>
  );
};

const EyeSlashIcon = assignWithoutSideEffects(_EyeSlashIcon, {
  componentId: 'EyeSlashIcon',
});

export default EyeSlashIcon;
