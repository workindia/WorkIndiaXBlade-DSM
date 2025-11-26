/**
 * WorkIndiaProvider
 * Wraps BladeProvider with WorkIndia restricted theme
 */

import React, { type ReactNode } from 'react';
import { BladeProvider } from '@razorpay/blade/components';
import type { ColorSchemeNamesInput } from '@razorpay/blade/tokens';
import { workIndiaTheme } from './theme';

export interface WorkIndiaProviderProps {
  /**
   * The children to render
   */
  children: ReactNode;
  /**
   * Color scheme preference
   * @default 'light'
   */
  colorScheme?: ColorSchemeNamesInput;
}

/**
 * WorkIndiaProvider wraps BladeProvider with WorkIndia restricted theme
 * This ensures all components use only the approved WorkIndia design tokens
 * @param props - The props for the WorkIndiaProvider component
 * @param props.children - The children to render
 * @param props.colorScheme - The color scheme to use
 * @returns The WorkIndiaProvider component
 */
export const WorkIndiaProvider = ({
  children,
  colorScheme = 'light',
}: WorkIndiaProviderProps) => {
  return (
    <BladeProvider themeTokens={workIndiaTheme} colorScheme={colorScheme}>
      {children}
    </BladeProvider>
  );
};
