import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ClockIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M9.75 1.5C5.19365 1.5 1.5 5.19365 1.5 9.75C1.5 14.3063 5.19365 18 9.75 18C14.3063 18 18 14.3063 18 9.75C18 5.19365 14.3063 1.5 9.75 1.5ZM0 9.75C0 4.36522 4.36522 0 9.75 0C15.1348 0 19.5 4.36522 19.5 9.75C19.5 15.1348 15.1348 19.5 9.75 19.5C4.36522 19.5 0 15.1348 0 9.75Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={iconColor}
        d="M9.75 3.75C10.1642 3.75 10.5 4.08579 10.5 4.5V9H15C15.4142 9 15.75 9.33579 15.75 9.75C15.75 10.1642 15.4142 10.5 15 10.5H9.75C9.33579 10.5 9 10.1642 9 9.75V4.5C9 4.08579 9.33579 3.75 9.75 3.75Z"
      />
    </Svg>
  );
};

const ClockIcon = assignWithoutSideEffects(_ClockIcon, {
  componentId: 'ClockIcon',
});

export default ClockIcon;
