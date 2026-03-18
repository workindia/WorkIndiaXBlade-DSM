## Component Name

EqualsIcon

## Description

Displays an equals sign, representing equality, comparison, or mathematical equivalence.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Mathematical operations
- Comparison features
- Equal/unequal toggles
- Balance indicators

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { EqualsIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { EqualsIcon } from '@workindia/dsm';

const Example = () => {
  return <EqualsIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

EqualsFillIcon, EqualsOutlineIcon, EqualsIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
