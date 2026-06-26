/**
 * Mock for @razorpay/blade/components - avoids loading Blade's ESM deps (e.g. recharts) in Jest
 */

import React from 'react';

export const BladeProvider = ({
  children,
}: {
  children?: React.ReactNode;
  themeTokens?: unknown;
  colorScheme?: string;
}) => <>{children}</>;
