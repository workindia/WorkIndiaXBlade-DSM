## Component Name

PencilSimpleSlashFillIcon

## Description

Represents editing, writing, or modification.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Pencil

## Variant

Filled

## When to Use

- Edit or modify actions
- Write or compose features
- Drawing or sketching

## When Not to Use

- For pens in general
- As a signature (use SignatureIcon)

## Import

```typescript
import { PencilSimpleSlashFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PencilSimpleSlashFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <PencilSimpleSlashFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

PencilSimpleSlashOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
