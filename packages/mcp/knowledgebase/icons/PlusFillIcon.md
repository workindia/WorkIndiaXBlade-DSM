## Component Name

PlusFillIcon

## Description

Add, create, or increase. Use for add buttons, create new items, expand selections, or increment values. Filled variants provide more emphasis.

## Category

Plus

## Variant

Filled

## When to Use

- Add or create actions
- Increase quantity
- Positive or yes responses

## When Not to Use

- For remove (use MinusIcon)
- For expand (use CaretDownIcon)

## Import

```typescript
import { PlusFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PlusFillIcon } from '@workindia/dsm';

const Example = () => {
  return <PlusFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PlusOutlineIcon, MinusIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
