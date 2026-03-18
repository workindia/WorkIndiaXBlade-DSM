## Component Name

CoinVerticalFillIcon

## Description

Represents coins, cash, or physical currency.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Coin

## Variant

Filled

## When to Use

- Coin-based transactions
- Cash payment methods
- Currency-specific features

## When Not to Use

- For general money (use MoneyIcon)
- For digital payments (use CreditCardIcon)

## Import

```typescript
import { CoinVerticalFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CoinVerticalFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <CoinVerticalFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

CoinVerticalOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
