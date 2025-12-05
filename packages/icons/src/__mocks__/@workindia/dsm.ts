/**
 * Mock for @workindia/dsm package
 */

import React from 'react';

export const assignWithoutSideEffects = <T extends React.ComponentType<never>>(
  component: T,
  metadata: { componentId: string },
): T & { componentId: string } => {
  return Object.assign(component, metadata);
};
