import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _MicrophoneFillIcon: IconComponent = ({
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
      viewBox="0 0 15 22"
      fill="none"
    >
      <Path
        d="M3 10.5V4.5C3 3.30653 3.47411 2.16193 4.31802 1.31802C5.16193 0.474106 6.30653 0 7.5 0C8.69347 0 9.83807 0.474106 10.682 1.31802C11.5259 2.16193 12 3.30653 12 4.5V10.5C12 11.6935 11.5259 12.8381 10.682 13.682C9.83807 14.5259 8.69347 15 7.5 15C6.30653 15 5.16193 14.5259 4.31802 13.682C3.47411 12.8381 3 11.6935 3 10.5ZM15 10.5C15 10.3011 14.921 10.1103 14.7803 9.96967C14.6397 9.82902 14.4489 9.75 14.25 9.75C14.0511 9.75 13.8603 9.82902 13.7197 9.96967C13.579 10.1103 13.5 10.3011 13.5 10.5C13.5 12.0913 12.8679 13.6174 11.7426 14.7426C10.6174 15.8679 9.0913 16.5 7.5 16.5C5.9087 16.5 4.38258 15.8679 3.25736 14.7426C2.13214 13.6174 1.5 12.0913 1.5 10.5C1.5 10.3011 1.42098 10.1103 1.28033 9.96967C1.13968 9.82902 0.948912 9.75 0.75 9.75C0.551088 9.75 0.360322 9.82902 0.21967 9.96967C0.0790178 10.1103 0 10.3011 0 10.5C0.00228386 12.3586 0.693677 14.1504 1.94048 15.5288C3.18728 16.9072 4.90091 17.7743 6.75 17.9625V21C6.75 21.1989 6.82902 21.3897 6.96967 21.5303C7.11032 21.671 7.30109 21.75 7.5 21.75C7.69891 21.75 7.88968 21.671 8.03033 21.5303C8.17098 21.3897 8.25 21.1989 8.25 21V17.9625C10.0991 17.7743 11.8127 16.9072 13.0595 15.5288C14.3063 14.1504 14.9977 12.3586 15 10.5Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const MicrophoneFillIcon = assignWithoutSideEffects(_MicrophoneFillIcon, {
  componentId: 'MicrophoneFillIcon',
});

export default MicrophoneFillIcon;
