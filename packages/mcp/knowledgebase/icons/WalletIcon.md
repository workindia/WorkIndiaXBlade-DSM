## Component Name

WalletIcon

## Description

Represents wallets, money storage, or digital wallets.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Wallet

## Variant

Standard

## When to Use

- Wallet features
- Payment methods
- Money storage

## When Not to Use

- For credit cards (use CreditCardIcon)
- For money in general

## Import

```typescript
import { WalletIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WalletIcon } from '@workindia/dsm';

const Example = () => {
  return <WalletIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

WalletFillIcon, WalletOutlineIcon, WalletIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
