## Component Name

BankFillIcon

## Description

Represents banking, financial institutions, or money storage.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Bank

## Variant

Filled

## When to Use

- Banking and finance features
- Payment method selection
- Account information sections

## When Not to Use

- For general money icons (use MoneyIcon or CurrencyDollarIcon)
- As a building identifier (use BuildingIcon)

## Import

```typescript
import { BankFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BankFillIcon } from '@workindia/dsm';

const Example = () => {
  return <BankFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BankOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
