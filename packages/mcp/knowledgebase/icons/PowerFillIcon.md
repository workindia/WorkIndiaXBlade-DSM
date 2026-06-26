## Component Name

PowerFillIcon

## Description

Represents power, on/off, shutdown, or energy.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Power

## Variant

Filled

## When to Use

- Power or on/off toggles
- Logout or sign out
- Energy features

## When Not to Use

- For battery indicators
- As a charging indicator

## Import

```typescript
import { PowerFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PowerFillIcon } from '@workindia/dsm';

const Example = () => {
  return <PowerFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PowerOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
