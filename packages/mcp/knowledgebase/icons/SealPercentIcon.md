## Component Name

SealPercentIcon

## Description

Represents percentages, discounts, or proportional values.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Percent

## Variant

Standard

## When to Use

- Discount or sale displays
- Percentage values
- Proportional indicators

## When Not to Use

- For math operations
- As a grade indicator

## Import

```typescript
import { SealPercentIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SealPercentIcon } from '@workindia/dsm';

const Example = () => {
  return <SealPercentIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SealPercentFillIcon, SealPercentOutlineIcon, SealPercentIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
