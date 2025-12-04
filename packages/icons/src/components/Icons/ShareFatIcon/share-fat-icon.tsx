import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ShareFatIcon: IconComponent = ({ size, color, ...styledProps }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4658 0.0571123C12.7461 -0.0589735 13.0687 0.00519334 13.2832 0.219692L20.7832 7.71969C21.076 8.01258 21.076 8.48746 20.7832 8.78035L13.2832 16.2804C13.0687 16.4949 12.7461 16.559 12.4658 16.4429C12.1856 16.3268 12.0028 16.0534 12.0028 15.75V12.021C6.95047 12.3039 3.37116 15.3801 1.95226 16.8902C1.79223 17.0639 1.58158 17.1828 1.3501 17.2301C1.11607 17.2778 0.872905 17.2499 0.655811 17.1503C0.438716 17.0507 0.258963 16.8845 0.142581 16.676C0.0266527 16.4682 -0.0204101 16.229 0.00812301 15.9929C0.387899 12.7097 2.27573 9.8412 4.67545 7.80569C6.84924 5.96181 9.51437 4.74094 12.0028 4.53197V0.750022C12.0028 0.446675 12.1856 0.173198 12.4658 0.0571123ZM13.5028 2.56068V5.25002C13.5028 5.66424 13.167 6.00002 12.7528 6.00002C10.4964 6.00002 7.83827 7.08983 5.64575 8.94959C3.75783 10.551 2.2796 12.6685 1.70213 15.0313C3.70551 13.1893 7.55906 10.5 12.7528 10.5C13.167 10.5 13.5028 10.8358 13.5028 11.25V13.9394L19.1922 8.25002L13.5028 2.56068Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ShareFatIcon = assignWithoutSideEffects(_ShareFatIcon, {
  componentId: 'ShareFatIcon',
});

export default ShareFatIcon;
