## Component Name

HouseIcon

## Description

Represents home, main dashboard, or primary navigation.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

House

## Variant

Standard

## When to Use

- Home page navigation
- Main dashboard access
- Primary landing pages

## When Not to Use

- For buildings or offices
- As a house icon in real estate

## Import

```typescript
import { HouseIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HouseIcon } from '@workindia/dsm';

const Example = () => {
  return <HouseIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

HouseFillIcon, HouseOutlineIcon, HouseIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
