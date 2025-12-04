import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ThumbsUpFillIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 21 19"
      fill="none"
    >
      <Path
        d="M20.4375 6.01125C20.2263 5.77193 19.9666 5.58028 19.6757 5.44903C19.3847 5.31778 19.0692 5.24994 18.75 5.25H13.5V3.75C13.5 2.75544 13.1049 1.80161 12.4017 1.09835C11.6984 0.395088 10.7446 1.92283e-07 9.75 1.92283e-07C9.61067 -9.95628e-05 9.47406 0.0386167 9.3555 0.111808C9.23693 0.184999 9.1411 0.289771 9.07875 0.414375L5.53687 7.5H1.5C1.10218 7.5 0.720644 7.65804 0.43934 7.93934C0.158035 8.22064 0 8.60218 0 9V17.25C0 17.6478 0.158035 18.0294 0.43934 18.3107C0.720644 18.592 1.10218 18.75 1.5 18.75H17.625C18.1732 18.7502 18.7025 18.5503 19.1137 18.1878C19.5249 17.8253 19.7896 17.3251 19.8581 16.7812L20.9831 7.78125C21.023 7.4644 20.995 7.14268 20.9009 6.8375C20.8068 6.53232 20.6488 6.25066 20.4375 6.01125ZM1.5 9H5.25V17.25H1.5V9Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ThumbsUpFillIcon = assignWithoutSideEffects(_ThumbsUpFillIcon, {
  componentId: 'ThumbsUpFillIcon',
});

export default ThumbsUpFillIcon;
