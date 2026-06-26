## Component Name

BoostOutlineIcon

## Description

Displays a rocket taking off, representing boost, promote, or accelerate actions.

Outline variants provide a lighter, more subtle appearance. Use outline icons when you need a refined look or when the icon is secondary to text.

## When to Use

- Boosting/promoting content
- Accelerating processes
- Premium or upgrade features

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { BoostOutlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BoostOutlineIcon } from '@workindia/dsm';

const Example = () => {
  return <BoostOutlineIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BoostFillIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
