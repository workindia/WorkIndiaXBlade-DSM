## Component Name

RecycleFillIcon

## Description

Represents recycling, sustainability, or reuse.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Recycle

## Variant

Filled

## When to Use

- Recycling features
- Sustainability options
- Reuse or repurposing

## When Not to Use

- For refresh (use ArrowsClockwiseIcon)
- For delete (use TrashIcon)

## Import

```typescript
import { RecycleFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { RecycleFillIcon } from '@workindia/dsm';

const Example = () => {
  return <RecycleFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

RecycleOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
