## Component Name

EqualsFillIcon

## Description

Displays an equals sign, representing equality, comparison, or mathematical equivalence.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

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
import { EqualsFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { EqualsFillIcon } from '@workindia/dsm';

const Example = () => {
  return <EqualsFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

EqualsOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
