## Component Name

CoinVerticalIcon

## Description

Represents coins, cash, or physical currency.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Coin

## Variant

Standard

## When to Use

- Coin-based transactions
- Cash payment methods
- Currency-specific features

## When Not to Use

- For general money (use MoneyIcon)
- For digital payments (use CreditCardIcon)

## Import

```typescript
import { CoinVerticalIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CoinVerticalIcon } from '@workindia/dsm';

const Example = () => {
  return <CoinVerticalIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CoinVerticalFillIcon, CoinVerticalOutlineIcon, CoinVerticalIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
