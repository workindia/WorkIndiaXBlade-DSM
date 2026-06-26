## Component Name

StackFillIcon

## Description

Represents stacking, layers, queues, or collections.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Stack

## Variant

Filled

## When to Use

- Stacked items or layers
- Queue management
- Collection or pile features

## When Not to Use

- For lists (use ListIcon)
- For files (use FolderIcon)

## Import

```typescript
import { StackFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { StackFillIcon } from '@workindia/dsm';

const Example = () => {
  return <StackFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

StackOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
