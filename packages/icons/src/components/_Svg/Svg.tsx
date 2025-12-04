import React, { type ReactElement } from 'react';
import type { SvgProps } from './types';

const Svg = ({
  children,
  height,
  viewBox,
  width,
  fill,
  testID,
  display,
  fillOpacity,
  ...rest
}: SvgProps & React.SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      height={height}
      viewBox={viewBox}
      width={width}
      fill={fill}
      fillOpacity={fillOpacity}
      display={display}
      data-testid={testID}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
};

export default Svg;
