## Component Name

MagnifyingGlassMinusIcon

## Description

Represents subtraction, removal, decreasing, or negative actions.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Minus

## Variant

Standard

## When to Use

- Remove or delete actions
- Decrease quantity
- Negative or minus operations

## When Not to Use

- For expand (use PlusIcon)
- For collapse (use MinusIcon for accordion)

## Import

```typescript
import { MagnifyingGlassMinusIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MagnifyingGlassMinusIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MagnifyingGlassMinusIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

MagnifyingGlassMinusFillIcon, MagnifyingGlassMinusOutlineIcon, MagnifyingGlassMinusIcon, PlusIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
