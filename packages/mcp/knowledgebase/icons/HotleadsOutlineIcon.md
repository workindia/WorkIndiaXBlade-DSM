## Component Name

HotleadsOutlineIcon

## Description

Displays a hot leads icon, representing sales leads, potential customers, or hot prospects.

Outline variants provide a lighter, more subtle appearance. Use outline icons when you need a refined look or when the icon is secondary to text.

## When to Use

- Sales leads
- Potential customers
- Hot prospects
- Lead management

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { HotleadsOutlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HotleadsOutlineIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <HotleadsOutlineIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

HotleadsFillIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
