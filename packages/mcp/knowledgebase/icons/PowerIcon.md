## Component Name

PowerIcon

## Description

Represents power, on/off, shutdown, or energy.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Power

## Variant

Standard

## When to Use

- Power or on/off toggles
- Logout or sign out
- Energy features

## When Not to Use

- For battery indicators
- As a charging indicator

## Import

```typescript
import { PowerIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PowerIcon } from '@workindia/dsm';

const Example = () => {
  return <PowerIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PowerFillIcon, PowerOutlineIcon, PowerIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
