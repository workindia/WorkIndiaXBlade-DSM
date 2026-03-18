## Component Name

CurrencyInrFillIcon

## Description

Represents money, payments, financial transactions, or pricing.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Currency

## Variant

Filled

## When to Use

- Price displays
- Payment features
- Financial transactions

## When Not to Use

- For credit cards (use CreditCardIcon)
- For wallet features (use WalletIcon)

## Import

```typescript
import { CurrencyInrFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CurrencyInrFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <CurrencyInrFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

CurrencyInrOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
