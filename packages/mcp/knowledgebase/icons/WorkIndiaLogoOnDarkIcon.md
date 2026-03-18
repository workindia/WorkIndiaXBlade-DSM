## Component Name

WorkIndiaLogoOnDarkIcon

## Description

The WorkIndia logo icon (symbol/mark) for use on dark backgrounds. This is the official WorkIndia brand symbol displayed in white/light color to ensure visibility on dark surfaces.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Brand / Logo

## Variant

Standard

## When to Use

- As the official WorkIndia logo symbol on dark-themed surfaces (dark backgrounds, dark mode)
- In the header/navigation bar on dark backgrounds as a compact logo
- On login/signup pages with dark backgrounds
- As part of brand identity materials on dark surfaces
- Use when you need the logo symbol rather than the full wordmark

## When Not to Use

- For general text or labels (use Text component or WorkIndiaWordmarkOnDarkIcon)
- On light backgrounds (use WorkIndiaLogoOnLightIcon instead)
- As a button icon or action indicator
- As decorative elements

## Import

```typescript
import { WorkIndiaLogoOnDarkIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WorkIndiaLogoOnDarkIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <WorkIndiaLogoOnDarkIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

WorkIndiaLogoOnDarkFillIcon, WorkIndiaLogoOnDarkOutlineIcon, WorkIndiaLogoOnDarkIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
