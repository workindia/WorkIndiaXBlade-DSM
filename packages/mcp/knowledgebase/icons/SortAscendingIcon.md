## Component Name

SortAscendingIcon

## Description

Represents sorting, ordering, or arranging content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Sort

## Variant

Standard

## When to Use

- Sort or order features
- Arrangement options
- Priority ordering

## When Not to Use

- For filters (use FunnelIcon)
- For reorder (use ArrowsVerticalIcon)

## Import

```typescript
import { SortAscendingIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SortAscendingIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <SortAscendingIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

SortAscendingFillIcon, SortAscendingOutlineIcon, SortAscendingIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
