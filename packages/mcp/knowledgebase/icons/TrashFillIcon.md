## Component Name

TrashFillIcon

## Description

Represents deletion, removal, trash, or discarded items.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Trash

## Variant

Filled

## When to Use

- Delete or remove actions
- Trash or recycle bin
- Discarded items

## When Not to Use

- For remove from list
- For cancel actions

## Import

```typescript
import { TrashFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TrashFillIcon } from '@workindia/dsm';

const Example = () => {
  return <TrashFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TrashOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
