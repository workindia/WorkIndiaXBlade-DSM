## Component Name

ShoppingCartSimpleIcon

## Description

Displays a shopping cart, representing e-commerce, shopping, or cart functionality.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Add to cart
- Shopping cart
- E-commerce features
- Checkout flow

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { ShoppingCartSimpleIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ShoppingCartSimpleIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ShoppingCartSimpleIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ShoppingCartSimpleFillIcon, ShoppingCartSimpleOutlineIcon, ShoppingCartSimpleIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
