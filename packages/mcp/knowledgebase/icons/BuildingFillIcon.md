## Component Name

BuildingFillIcon

## Description

Represents offices, companies, organizations, or physical locations.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Building

## Variant

Filled

## When to Use

- Company or organization profiles
- Office location features
- Business-related content

## When Not to Use

- For home features (use HouseIcon)
- As a bank identifier (use BankIcon)

## Import

```typescript
import { BuildingFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BuildingFillIcon } from '@workindia/dsm';

const Example = () => {
  return <BuildingFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BuildingOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
