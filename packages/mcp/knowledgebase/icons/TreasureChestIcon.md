## Component Name

TreasureChestIcon

## Description

Represents rewards, prizes, bonuses, or valuable achievements. The treasure chest icon is commonly used to represent rewards programs, loyalty points, bonuses, achievements, or any feature involving valuable rewards or prizes that users can earn or unlock.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Rewards / Achievement

## Variant

Standard

## When to Use

- Rewards programs or loyalty features
- Bonus or prize redemption features
- Achievement or milestone rewards
- Gift or voucher features
- Points or coins balance displays

## When Not to Use

- For general savings (use PiggyBankIcon)
- For money or currency (use MoneyIcon or CurrencyDollarIcon)
- For trophies or awards (use TrophyIcon)
- As a decorative element

## Import

```typescript
import { TreasureChestIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TreasureChestIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TreasureChestIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TreasureChestFillIcon, GiftIcon, TrophyIcon, MedalIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
