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

// Mock theme with sample color structure
const mockTheme = {
  colors: {
    interactive: {
      icon: {
        primary: '#0066FF',
        secondary: '#6B7280',
      },
    },
    feedback: {
      icon: {
        neutral: {
          intense: '#1F2937',
        },
      },
    },
    surface: {
      icon: {
        gray: {
          normal: '#6B7280',
        },
      },
    },
  },
};

export const useTheme = () => ({
  theme: mockTheme,
});
