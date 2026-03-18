## Component Name

WifiHighIcon

## Description

Represents wifi, wireless, connectivity, or internet access.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Wifi

## Variant

Standard

## When to Use

- Wifi connectivity
- Wireless features
- Network status

## When Not to Use

- For internet in general (use GlobeIcon)
- For signal strength

## Import

```typescript
import { WifiHighIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WifiHighIcon } from '@workindia/dsm';

const Example = () => {
  return <WifiHighIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

WifiHighFillIcon, WifiHighOutlineIcon, WifiHighIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
