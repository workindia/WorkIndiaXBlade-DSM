## Component Name

RecycleIcon

## Description

Represents recycling, sustainability, or reuse.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Recycle

## Variant

Standard

## When to Use

- Recycling features
- Sustainability options
- Reuse or repurposing

## When Not to Use

- For refresh (use ArrowsClockwiseIcon)
- For delete (use TrashIcon)

## Import

```typescript
import { RecycleIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { RecycleIcon } from '@workindia/dsm';

const Example = () => {
  return <RecycleIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

RecycleFillIcon, RecycleOutlineIcon, RecycleIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
