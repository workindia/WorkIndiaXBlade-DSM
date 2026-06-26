## Component Name

MoneyIcon

## Description

Represents money, currency, payments, or financial transactions.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Money

## Variant

Standard

## When to Use

- Payment features
- Financial transactions
- Price or cost display

## When Not to Use

- For credit cards (use CreditCardIcon)
- For wallets (use WalletIcon)

## Import

```typescript
import { MoneyIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MoneyIcon } from '@workindia/dsm';

const Example = () => {
  return <MoneyIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

MoneyFillIcon, MoneyOutlineIcon, MoneyIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
