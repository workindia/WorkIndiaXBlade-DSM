import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ThumbsDownFillIcon: IconComponent = ({
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
      viewBox="0 0 21 19"
      fill="none"
    >
      <Path
        d="M20.9831 10.9688L19.8581 1.96875C19.7896 1.42489 19.5249 0.924748 19.1137 0.562245C18.7025 0.199741 18.1732 -0.000188024 17.625 1.32687e-07H1.5C1.10218 1.32687e-07 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V9.75C0 10.1478 0.158035 10.5294 0.43934 10.8107C0.720644 11.092 1.10218 11.25 1.5 11.25H5.53687L9.07875 18.3356C9.1411 18.4602 9.23693 18.565 9.3555 18.6382C9.47406 18.7114 9.61067 18.7501 9.75 18.75C10.7446 18.75 11.6984 18.3549 12.4017 17.6516C13.1049 16.9484 13.5 15.9946 13.5 15V13.5H18.75C19.0693 13.5001 19.3849 13.4323 19.676 13.301C19.967 13.1697 20.2268 12.978 20.438 12.7385C20.6492 12.4991 20.8071 12.2175 20.9011 11.9123C20.9951 11.6072 21.023 11.2855 20.9831 10.9688ZM5.25 9.75H1.5V1.5H5.25V9.75Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ThumbsDownFillIcon = assignWithoutSideEffects(_ThumbsDownFillIcon, {
  componentId: 'ThumbsDownFillIcon',
});

export default ThumbsDownFillIcon;
