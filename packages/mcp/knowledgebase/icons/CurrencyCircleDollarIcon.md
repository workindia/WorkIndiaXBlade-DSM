## Component Name

CurrencyCircleDollarIcon

## Description

Represents money, payments, financial transactions, or pricing.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Currency

## Variant

Standard

## When to Use

- Price displays
- Payment features
- Financial transactions

## When Not to Use

- For credit cards (use CreditCardIcon)
- For wallet features (use WalletIcon)

## Import

```typescript
import { CurrencyCircleDollarIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CurrencyCircleDollarIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <CurrencyCircleDollarIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

CurrencyCircleDollarFillIcon, CurrencyCircleDollarOutlineIcon, CurrencyCircleDollarIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
