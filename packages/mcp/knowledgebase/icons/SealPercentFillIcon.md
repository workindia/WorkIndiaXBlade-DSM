## Component Name

SealPercentFillIcon

## Description

Represents percentages, discounts, or proportional values.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Percent

## Variant

Filled

## When to Use

- Discount or sale displays
- Percentage values
- Proportional indicators

## When Not to Use

- For math operations
- As a grade indicator

## Import

```typescript
import { SealPercentFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SealPercentFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <SealPercentFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

SealPercentOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
