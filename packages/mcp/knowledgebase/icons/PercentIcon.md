## Component Name

PercentIcon

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
import { PercentIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PercentIcon } from '@workindia/dsm';

const Example = () => {
  return <PercentIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PercentFillIcon, PercentOutlineIcon, PercentIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
