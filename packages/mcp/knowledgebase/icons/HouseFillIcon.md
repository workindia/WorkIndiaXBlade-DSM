## Component Name

HouseFillIcon

## Description

Represents home, main dashboard, or primary navigation.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

House

## Variant

Filled

## When to Use

- Home page navigation
- Main dashboard access
- Primary landing pages

## When Not to Use

- For buildings or offices
- As a house icon in real estate

## Import

```typescript
import { HouseFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HouseFillIcon } from '@workindia/dsm';

const Example = () => {
  return <HouseFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

HouseOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
