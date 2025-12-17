## Component Name

WorkIndiaWordmark

## Description

The WorkIndiaWordmark component represents the full WorkIndia brand wordmark, which includes both the logo and the "WorkIndia" text. It is available in two variants: `WorkIndiaWordmarkOnLightIcon` for use on light backgrounds and `WorkIndiaWordmarkOnDarkIcon` for use on dark backgrounds. The wordmark provides full brand recognition with the company name visible.

## Important Constraints

- Wordmark icons have fixed brand colors and do not accept a `color` prop
- Use `WorkIndiaWordmarkOnLightIcon` on light backgrounds (white, light gray, etc.)
- Use `WorkIndiaWordmarkOnDarkIcon` on dark backgrounds (dark gray, black, etc.)
- The wordmark has a wide aspect ratio (172x25, approximately 6.88:1) and automatically maintains its proportions
- The `size` prop controls the **height** of the icon; the width is automatically calculated based on the aspect ratio
- Best used when horizontal space is available

## TypeScript Types

```typescript
/**
 * Props for WorkIndiaWordmark icon components
 */
type WorkIndiaWordmarkIconProps = {
  /**
   * The size of the wordmark (controls height; width is automatically calculated)
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

- **WorkIndiaWordmarkOnLightIcon**: Use on light-colored backgrounds, headers, footers, or any area with a light background color
- **WorkIndiaWordmarkOnDarkIcon**: Use on dark-colored backgrounds, dark mode interfaces, or any area with a dark background color
- Use the wordmark in headers, footers, landing pages, email signatures, and marketing materials
- Use when you need full brand recognition with the company name
- Use in contexts where horizontal space is available (not suitable for narrow spaces)

## Examples

### Basic Wordmark Usage

```tsx
import React from 'react';
import {
  Box,
  WorkIndiaWordmarkOnLightIcon,
  WorkIndiaWordmarkOnDarkIcon,
} from '@workindia/icons';

const WordmarkExample = () => {
  return (
    <Box display="flex" flexDirection="column" gap="spacing.6">
      {/* Wordmark on light background */}
      <Box padding="spacing.4" backgroundColor="surface.background.gray.subtle">
        <WorkIndiaWordmarkOnLightIcon size="large" />
      </Box>

      {/* Wordmark on dark background */}
      <Box
        padding="spacing.4"
        backgroundColor="surface.background.gray.intense"
      >
        <WorkIndiaWordmarkOnDarkIcon size="large" />
      </Box>
    </Box>
  );
};

export default WordmarkExample;
```

### Wordmark in Header

```tsx
import React from 'react';
import { Box, WorkIndiaWordmarkOnLightIcon } from '@workindia/icons';

const HeaderExample = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      padding="spacing.4"
      backgroundColor="surface.background.gray.subtle"
      width="100%"
    >
      <WorkIndiaWordmarkOnLightIcon size="medium" />
    </Box>
  );
};

export default HeaderExample;
```

### Wordmark Sizes

**Note**: The `size` prop controls the height. The width is automatically calculated to maintain the 172:25 aspect ratio. For example:

- `size="medium"` (16px height) → ~110px width
- `size="large"` (20px height) → ~138px width
- `size="2xlarge"` (32px height) → ~220px width

```tsx
import React from 'react';
import { Box, WorkIndiaWordmarkOnLightIcon } from '@workindia/icons';

const WordmarkSizesExample = () => {
  return (
    <Box display="flex" flexDirection="column" gap="spacing.4">
      <WorkIndiaWordmarkOnLightIcon size="xsmall" />
      <WorkIndiaWordmarkOnLightIcon size="small" />
      <WorkIndiaWordmarkOnLightIcon size="medium" />
      <WorkIndiaWordmarkOnLightIcon size="large" />
      <WorkIndiaWordmarkOnLightIcon size="xlarge" />
      <WorkIndiaWordmarkOnLightIcon size="2xlarge" />
    </Box>
  );
};

export default WorkmarkSizesExample;
```

### Logo vs Workmark

```tsx
import React from 'react';
import {
  Box,
  WorkIndiaLogoOnLightIcon,
  WorkIndiaWordmarkOnLightIcon,
} from '@workindia/icons';

const ComparisonExample = () => {
  return (
    <Box display="flex" gap="spacing.6" alignItems="center">
      {/* Use Logo when space is limited */}
      <Box>
        <WorkIndiaLogoOnLightIcon size="large" />
        <Text size="small">Logo - Compact</Text>
      </Box>

      {/* Use Wordmark when space allows */}
      <Box>
        <WorkIndiaWordmarkOnLightIcon size="large" />
        <Text size="small">Wordmark - Full Brand</Text>
      </Box>
    </Box>
  );
};

export default ComparisonExample;
```

## Best Practices

1. **Choose Logo vs Wordmark**: Use Logo when space is limited (navigation bars, favicons, small headers). Use Wordmark when horizontal space is available (main headers, footers, landing pages)
2. **Always use the correct variant**: Match the wordmark variant to your background color for optimal visibility
3. **Understand sizing behavior**: The `size` prop controls height; width is automatically calculated. Plan your layout accordingly to accommodate the wider format
4. **Maintain aspect ratio**: The wordmark automatically maintains its aspect ratio - do not manually override width/height
5. **Provide adequate spacing**: Ensure sufficient padding around the wordmark, especially on the sides, as it requires more horizontal space
6. **Consider responsive design**: On mobile devices, consider switching from Wordmark to Logo to save space
7. **Accessibility**: The wordmark should be clearly visible and maintain sufficient contrast with the background

## Differences from Logo

- **WorkIndiaLogo**: Square format (24x24 viewBox), compact, suitable for small spaces. Uses standard icon sizing where both width and height are equal.
- **WorkIndiaWordmark**: Wide format (172x25 viewBox, ~6.88:1 aspect ratio), includes company name, requires more horizontal space. Uses rectangular icon sizing where the `size` prop controls height and width is automatically calculated.
- Use WorkIndiaLogo in navigation bars, icons, and compact spaces
- Use WorkIndiaWordmark in headers, footers, and areas with ample horizontal space

## Sizing Details

The Wordmark icon uses a rectangular sizing system:

- **Height**: Controlled by the `size` prop (xsmall: 8px, small: 12px, medium: 16px, large: 20px, xlarge: 24px, 2xlarge: 32px)
- **Width**: Automatically calculated as `height × 6.88` (rounded) to maintain the 172:25 aspect ratio
- This ensures the wordmark always maintains its correct proportions regardless of the size specified
