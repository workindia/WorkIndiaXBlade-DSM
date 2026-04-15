## Component Name

CreditCardIcon

## Description

Displays a credit card, representing payment methods, card transactions, or billing.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Payment method selection
- Card transactions
- Billing information
- Checkout flows

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { CreditCardIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CreditCardIcon } from '@workindia/dsm';

const Example = () => {
  return <CreditCardIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CreditCardFillIcon, CreditCardOutlineIcon, CreditCardIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
