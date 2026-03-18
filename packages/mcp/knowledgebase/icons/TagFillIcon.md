## Component Name

TagFillIcon

## Description

Represents tags, labels, categories, or pricing tags.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Tag

## Variant

Filled

## When to Use

- Tags or labels
- Category filtering
- Price tags

## When Not to Use

- For hashtags (use HashIcon)
- For bookmarks (use BookmarkIcon)

## Import

```typescript
import { TagFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TagFillIcon } from '@workindia/dsm';

const Example = () => {
  return <TagFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TagOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
