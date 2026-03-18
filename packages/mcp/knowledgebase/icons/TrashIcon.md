## Component Name

TrashIcon

## Description

Represents deletion, removal, trash, or discarded items.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Trash

## Variant

Standard

## When to Use

- Delete or remove actions
- Trash or recycle bin
- Discarded items

## When Not to Use

- For remove from list
- For cancel actions

## Import

```typescript
import { TrashIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TrashIcon } from '@workindia/dsm';

const Example = () => {
  return <TrashIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TrashFillIcon, TrashOutlineIcon, TrashIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
