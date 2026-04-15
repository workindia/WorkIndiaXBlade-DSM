## Component Name

TreasureChestFillIcon

## Description

Represents rewards, prizes, bonuses, or valuable achievements. The filled treasure chest icon provides a more prominent appearance for rewards programs, loyalty points, bonuses, achievements, or any feature involving valuable rewards or prizes.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Rewards / Achievement

## Variant

Filled

## When to Use

- Rewards programs or loyalty features (when emphasis is needed)
- Bonus or prize redemption as primary action
- Achievement or milestone rewards
- Gift or voucher features as prominent element
- Points or coins balance displays

## When Not to Use

- For general savings (use PiggyBankIcon)
- For money or currency (use MoneyIcon or CurrencyDollarIcon)
- For trophies or awards (use TrophyIcon)
- As a decorative element

## Import

```typescript
import { TreasureChestFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TreasureChestFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TreasureChestFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TreasureChestIcon, GiftFillIcon, TrophyIcon, MedalIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
