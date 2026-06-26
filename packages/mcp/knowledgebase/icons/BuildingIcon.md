## Component Name

BuildingIcon

## Description

Represents offices, companies, organizations, or physical locations.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Building

## Variant

Standard

## When to Use

- Company or organization profiles
- Office location features
- Business-related content

## When Not to Use

- For home features (use HouseIcon)
- As a bank identifier (use BankIcon)

## Import

```typescript
import { BuildingIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BuildingIcon } from '@workindia/dsm';

const Example = () => {
  return <BuildingIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BuildingFillIcon, BuildingOutlineIcon, BuildingIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
