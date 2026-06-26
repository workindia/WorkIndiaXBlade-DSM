## Component Name

BankIcon

## Description

Represents banking, financial institutions, or money storage.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Bank

## Variant

Standard

## When to Use

- Banking and finance features
- Payment method selection
- Account information sections

## When Not to Use

- For general money icons (use MoneyIcon or CurrencyDollarIcon)
- As a building identifier (use BuildingIcon)

## Import

```typescript
import { BankIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BankIcon } from '@workindia/dsm';

const Example = () => {
  return <BankIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BankFillIcon, BankOutlineIcon, BankIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
