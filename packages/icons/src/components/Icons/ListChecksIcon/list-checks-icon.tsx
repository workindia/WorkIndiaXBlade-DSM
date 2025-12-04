import { Svg, Path } from '../../_Svg';
import type { IconComponent } from '../types';
import useIconProps from '../useIconProps/use-icon-props';
import { assignWithoutSideEffects } from '@workindia/dsm';

const _ListChecksIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg
      {...styledProps}
      width={width}
      height={height}
      viewBox="0 0 18 17"
      fill="none"
    >
      <Path
        d="M5.78033 1.28033C6.07322 0.987437 6.07322 0.512563 5.78033 0.21967C5.48744 -0.0732233 5.01256 -0.0732233 4.71967 0.21967L2.25 2.68934L1.28033 1.71967C0.987437 1.42678 0.512563 1.42678 0.21967 1.71967C-0.0732233 2.01256 -0.0732233 2.48744 0.21967 2.78033L1.71967 4.28033C2.01256 4.57322 2.48744 4.57322 2.78033 4.28033L5.78033 1.28033Z"
        fill={iconColor}
      />
    </Svg>
  );
};

const ListChecksIcon = assignWithoutSideEffects(_ListChecksIcon, {
  componentId: 'ListChecksIcon',
});

export default ListChecksIcon;
