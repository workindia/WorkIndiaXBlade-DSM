## Component Name

WalletFillIcon

## Description

Represents wallets, money storage, or digital wallets.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Wallet

## Variant

Filled

## When to Use

- Wallet features
- Payment methods
- Money storage

## When Not to Use

- For credit cards (use CreditCardIcon)
- For money in general

## Import

```typescript
import { WalletFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WalletFillIcon } from '@workindia/dsm';

const Example = () => {
  return <WalletFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

WalletOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
