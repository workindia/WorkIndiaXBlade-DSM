import React, { type ReactElement } from 'react';
import type { Exact, RectProps } from './types';

const Rect = <Props extends Exact<RectProps, Props>>({
  clipPath,
  clipRule,
  fill,
  fillOpacity,
  fillRule,
  height,
  rx,
  ry,
  stroke,
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
  width,
  x,
  y,
}: Props): ReactElement => {
  return (
    <rect
      clipPath={clipPath}
      clipRule={clipRule}
      fill={fill}
      fillOpacity={fillOpacity}
      fillRule={fillRule}
      height={height}
      rx={rx}
      ry={ry}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeWidth={strokeWidth}
      width={width}
      x={x}
      y={y}
    />
  );
};

export default Rect;
