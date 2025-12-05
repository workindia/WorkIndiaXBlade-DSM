import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _TextBIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 13 16"
      fill="none"
    >
      <Path
        fill={iconColor}
        d="M9.9825 7.09687C10.5749 6.52663 10.9834 5.79234 11.1555 4.98828C11.3275 4.18421 11.2554 3.34707 10.9483 2.5843C10.6412 1.82154 10.1131 1.16797 9.43183 0.707487C8.75059 0.247008 7.94727 0.000636914 7.125 0H0.75C0.551088 0 0.360322 0.0790178 0.21967 0.21967C0.0790178 0.360322 0 0.551088 0 0.75V15C0 15.1989 0.0790178 15.3897 0.21967 15.5303C0.360322 15.671 0.551088 15.75 0.75 15.75H8.25C9.29013 15.75 10.2981 15.3897 11.1026 14.7303C11.907 14.071 12.4582 13.1533 12.6624 12.1334C12.8666 11.1136 12.7112 10.0544 12.2226 9.13618C11.734 8.21795 10.9425 7.49732 9.9825 7.09687ZM1.5 1.5H7.125C7.82119 1.5 8.48887 1.77656 8.98116 2.26884C9.47344 2.76113 9.75 3.42881 9.75 4.125C9.75 4.82119 9.47344 5.48887 8.98116 5.98116C8.48887 6.47344 7.82119 6.75 7.125 6.75H1.5V1.5ZM8.25 14.25H1.5V8.25H8.25C9.04565 8.25 9.80871 8.56607 10.3713 9.12868C10.9339 9.69129 11.25 10.4544 11.25 11.25C11.25 12.0456 10.9339 12.8087 10.3713 13.3713C9.80871 13.9339 9.04565 14.25 8.25 14.25Z"
      />
    </Svg>
  );
};

const TextBIcon = assignWithoutSideEffects(_TextBIcon, {
  componentId: 'TextBIcon',
});

export default TextBIcon;
