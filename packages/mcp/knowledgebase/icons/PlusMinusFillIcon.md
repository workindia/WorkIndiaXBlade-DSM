## Component Name

PlusMinusFillIcon

## Description

Represents subtraction, removal, decreasing, or negative actions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Minus

## Variant

Filled

## When to Use

- Remove or delete actions
- Decrease quantity
- Negative or minus operations

## When Not to Use

- For expand (use PlusIcon)
- For collapse (use MinusIcon for accordion)

## Import

```typescript
import { PlusMinusFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PlusMinusFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <PlusMinusFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

PlusMinusOutlineIcon, MinusIcon, PlusIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
