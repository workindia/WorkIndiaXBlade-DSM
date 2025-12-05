import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _TextUnderlineIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M13.5 16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25H0.75C0.551088 17.25 0.360322 17.171 0.21967 17.0303C0.0790178 16.8897 0 16.6989 0 16.5C0 16.3011 0.0790178 16.1103 0.21967 15.9697C0.360322 15.829 0.551088 15.75 0.75 15.75H12.75C12.9489 15.75 13.1397 15.829 13.2803 15.9697C13.421 16.1103 13.5 16.3011 13.5 16.5ZM6.75 14.25C8.34077 14.2483 9.86588 13.6156 10.9907 12.4907C12.1156 11.3659 12.7483 9.84077 12.75 8.25V0.75C12.75 0.551088 12.671 0.360322 12.5303 0.21967C12.3897 0.0790178 12.1989 0 12 0C11.8011 0 11.6103 0.0790178 11.4697 0.21967C11.329 0.360322 11.25 0.551088 11.25 0.75V8.25C11.25 9.44347 10.7759 10.5881 9.93198 11.432C9.08807 12.2759 7.94347 12.75 6.75 12.75C5.55653 12.75 4.41193 12.2759 3.56802 11.432C2.72411 10.5881 2.25 9.44347 2.25 8.25V0.75C2.25 0.551088 2.17098 0.360322 2.03033 0.21967C1.88968 0.0790178 1.69891 0 1.5 0C1.30109 0 1.11032 0.0790178 0.96967 0.21967C0.829018 0.360322 0.75 0.551088 0.75 0.75V8.25C0.751737 9.84077 1.38444 11.3659 2.50928 12.4907C3.63412 13.6156 5.15923 14.2483 6.75 14.25Z"
      />
    </Svg>
  );
};

const TextUnderlineIcon = assignWithoutSideEffects(_TextUnderlineIcon, {
  componentId: 'TextUnderlineIcon',
});

export default TextUnderlineIcon;
