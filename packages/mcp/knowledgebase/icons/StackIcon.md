## Component Name

StackIcon

## Description

Represents stacking, layers, queues, or collections.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Stack

## Variant

Standard

## When to Use

- Stacked items or layers
- Queue management
- Collection or pile features

## When Not to Use

- For lists (use ListIcon)
- For files (use FolderIcon)

## Import

```typescript
import { StackIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { StackIcon } from '@workindia/dsm';

const Example = () => {
  return <StackIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

StackFillIcon, StackOutlineIcon, StackIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
