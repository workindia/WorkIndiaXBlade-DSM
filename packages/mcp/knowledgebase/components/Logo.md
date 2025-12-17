## Component Name

WorkIndiaLogo

## Description

The WorkIndiaLogo component represents the WorkIndia brand logo. It is available in two variants: `WorkIndiaLogoOnLightIcon` for use on light backgrounds and `WorkIndiaLogoOnDarkIcon` for use on dark backgrounds. The logo is a compact, square format icon that maintains brand identity at smaller sizes.

## Important Constraints

- Logo icons have fixed brand colors and do not accept a `color` prop
- Use `WorkIndiaLogoOnLightIcon` on light backgrounds (white, light gray, etc.)
- Use `WorkIndiaLogoOnDarkIcon` on dark backgrounds (dark gray, black, etc.)
- The logo is square format (24x24 viewBox) and uses standard icon sizing where width and height are equal
- The logo maintains its aspect ratio and should not be distorted

## TypeScript Types

```typescript
/**
 * Props for WorkIndiaLogo icon components
 */
type WorkIndiaLogoIconProps = {
  /**
   * The size of the logo
   * @default 'medium'
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge';

  /**
   * Test identifier for the component
   */
  testID?: string;
} & StyledPropsBlade;
```

## When to Use

- **WorkIndiaLogoOnLightIcon**: Use on light-colored backgrounds, headers, footers, or any area with a light background color
- **WorkIndiaLogoOnDarkIcon**: Use on dark-colored backgrounds, dark mode interfaces, or any area with a dark background color
- Use the logo in navigation bars, headers, footers, loading screens, and authentication pages
- Use for brand recognition and consistency across the application

## Examples

### Basic Logo Usage

```tsx
import React from 'react';
import {
  Box,
  WorkIndiaLogoOnLightIcon,
  WorkIndiaLogoOnDarkIcon,
} from '@workindia/icons';

const LogoExample = () => {
  return (
    <Box display="flex" gap="spacing.4" alignItems="center">
      {/* Logo on light background */}
      <Box padding="spacing.4" backgroundColor="surface.background.gray.subtle">
        <WorkIndiaLogoOnLightIcon size="large" />
      </Box>

      {/* Logo on dark background */}
      <Box
        padding="spacing.4"
        backgroundColor="surface.background.gray.intense"
      >
        <WorkIndiaLogoOnDarkIcon size="large" />
      </Box>
    </Box>
  );
};

export default LogoExample;
```

### Logo in Navigation

```tsx
import React from 'react';
import { Box, WorkIndiaLogoOnLightIcon } from '@workindia/icons';

const NavigationExample = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      padding="spacing.4"
      backgroundColor="surface.background.gray.subtle"
    >
      <WorkIndiaLogoOnLightIcon size="medium" />
    </Box>
  );
};

export default NavigationExample;
```

### Logo Sizes

```tsx
import React from 'react';
import { Box, WorkIndiaLogoOnLightIcon } from '@workindia/icons';

const LogoSizesExample = () => {
  return (
    <Box display="flex" gap="spacing.4" alignItems="center">
      <WorkIndiaLogoOnLightIcon size="xsmall" />
      <WorkIndiaLogoOnLightIcon size="small" />
      <WorkIndiaLogoOnLightIcon size="medium" />
      <WorkIndiaLogoOnLightIcon size="large" />
      <WorkIndiaLogoOnLightIcon size="xlarge" />
      <WorkIndiaLogoOnLightIcon size="2xlarge" />
    </Box>
  );
};

export default LogoSizesExample;
```

## Best Practices

1. **Always use the correct variant**: Match the logo variant to your background color for optimal visibility and brand consistency
2. **Maintain aspect ratio**: Do not stretch or distort the logo
3. **Provide adequate spacing**: Ensure sufficient padding around the logo for visual breathing room
4. **Use appropriate sizes**: Choose sizes that are appropriate for the context (smaller in headers, larger in hero sections)
5. **Accessibility**: The logo should be recognizable but not rely solely on color for meaning
