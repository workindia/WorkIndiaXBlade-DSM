## Component Name

PencilSimpleIcon

## Description

Represents editing, writing, or modification.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Pencil

## Variant

Standard

## When to Use

- Edit or modify actions
- Write or compose features
- Drawing or sketching

## When Not to Use

- For pens in general
- As a signature (use SignatureIcon)

## Import

```typescript
import { PencilSimpleIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PencilSimpleIcon } from '@workindia/dsm';

const Example = () => {
  return <PencilSimpleIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PencilSimpleFillIcon, PencilSimpleOutlineIcon, PencilSimpleIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
