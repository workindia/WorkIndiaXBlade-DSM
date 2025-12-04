import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ShareFatFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        d="M20.7806 8.78122L13.2806 16.2812C13.1757 16.3862 13.042 16.4578 12.8964 16.4867C12.7509 16.5157 12.6 16.5009 12.4629 16.4441C12.3257 16.3872 12.2086 16.291 12.1262 16.1676C12.0437 16.0441 11.9998 15.899 11.9999 15.7506V12.0222C6.64682 12.3259 2.97651 15.7975 1.94619 16.8972C1.78441 17.0699 1.57225 17.1873 1.33991 17.2325C1.10757 17.2777 0.866893 17.2485 0.652121 17.149C0.437349 17.0495 0.25943 16.8848 0.143684 16.6783C0.0279382 16.4719 -0.0197372 16.2342 0.00744301 15.999C0.355256 12.9747 2.01182 10.0656 4.67244 7.80809C6.88213 5.93309 9.56807 4.7434 11.9999 4.53528V0.750591C11.9998 0.602169 12.0437 0.457049 12.1262 0.333604C12.2086 0.210159 12.3257 0.113938 12.4629 0.0571237C12.6 0.00030937 12.7509 -0.0145441 12.8964 0.0144437C13.042 0.0434315 13.1757 0.114957 13.2806 0.219966L20.7806 7.71997C20.8503 7.78962 20.9056 7.87234 20.9434 7.96339C20.9811 8.05443 21.0005 8.15203 21.0005 8.25059C21.0005 8.34915 20.9811 8.44675 20.9434 8.5378C20.9056 8.62884 20.8503 8.71156 20.7806 8.78122Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ShareFatFillIcon = assignWithoutSideEffects(_ShareFatFillIcon, {
  componentId: 'ShareFatFillIcon',
});

export default ShareFatFillIcon;
