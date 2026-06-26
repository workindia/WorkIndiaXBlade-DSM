## Component Name

WorkIndiaLogoOnLightIcon

## Description

The WorkIndia logo icon (symbol/mark) for use on light backgrounds. This is the official WorkIndia brand symbol displayed in dark color to ensure visibility on light surfaces.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Brand / Logo

## Variant

Standard

## When to Use

- As the official WorkIndia logo symbol on light-themed surfaces (white backgrounds, light mode)
- In the header/navigation bar on light backgrounds as a compact logo
- On login/signup pages with light backgrounds
- As part of brand identity materials on light surfaces
- Use when you need the logo symbol rather than the full wordmark

## When Not to Use

- For general text or labels (use Text component or WorkIndiaWordmarkOnLightIcon)
- On dark backgrounds (use WorkIndiaLogoOnDarkIcon instead)
- As a button icon or action indicator
- As decorative elements

## Import

```typescript
import { WorkIndiaLogoOnLightIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WorkIndiaLogoOnLightIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <WorkIndiaLogoOnLightIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

WorkIndiaLogoOnLightFillIcon, WorkIndiaLogoOnLightOutlineIcon, WorkIndiaLogoOnLightIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
