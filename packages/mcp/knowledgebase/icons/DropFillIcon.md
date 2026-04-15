## Component Name

DropFillIcon

## Description

Displays a water drop, representing liquid, water, or droplets.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Water/liquid features
- Weather indicators
- Droplet-based interactions
- Hydration tracking

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { DropFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { DropFillIcon } from '@workindia/dsm';

const Example = () => {
  return <DropFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

DropOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
