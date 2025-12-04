import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _CloudFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 23 17"
      fill="none"
    >
      <Path
        d="M14.2556 0C12.7225 0.000239929 11.2197 0.427182 9.91552 1.23303C8.61129 2.03888 7.55709 3.19183 6.87094 4.56281C6.30066 5.69941 6.00249 6.95305 6 8.22469C6.00294 8.41791 5.93282 8.60511 5.80367 8.74886C5.67453 8.89261 5.49587 8.9823 5.30344 9C5.20055 9.00735 5.09724 8.9934 4.99999 8.95901C4.90273 8.92462 4.81362 8.87055 4.73821 8.80015C4.66281 8.72976 4.60273 8.64458 4.56175 8.54992C4.52076 8.45525 4.49974 8.35315 4.5 8.25C4.49921 7.20097 4.66827 6.15874 5.00063 5.16375C5.02252 5.09995 5.02681 5.03143 5.01303 4.9654C4.99925 4.89937 4.96791 4.83828 4.92232 4.78856C4.87674 4.73885 4.81858 4.70235 4.75399 4.68292C4.6894 4.66348 4.62077 4.66182 4.55531 4.67813C3.25577 5.00203 2.1017 5.75083 1.27639 6.80562C0.451072 7.86041 0.00182763 9.1607 0 10.5C0 13.7991 2.78906 16.5 6.09375 16.5H14.25C15.3605 16.4988 16.4594 16.2736 17.4809 15.838C18.5024 15.4023 19.4255 14.7651 20.1951 13.9645C20.9647 13.1639 21.5649 12.2162 21.9598 11.1783C22.3547 10.1404 22.5362 9.03345 22.4934 7.92375C22.3228 3.51937 18.6628 0 14.2556 0Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const CloudFillIcon = assignWithoutSideEffects(_CloudFillIcon, {
  componentId: 'CloudFillIcon',
});

export default CloudFillIcon;
