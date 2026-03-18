## Component Name

MoneyWavyFillIcon

## Description

Represents money, currency, payments, or financial transactions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Money

## Variant

Filled

## When to Use

- Payment features
- Financial transactions
- Price or cost display

## When Not to Use

- For credit cards (use CreditCardIcon)
- For wallets (use WalletIcon)

## Import

```typescript
import { MoneyWavyFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MoneyWavyFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MoneyWavyFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

MoneyWavyOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
