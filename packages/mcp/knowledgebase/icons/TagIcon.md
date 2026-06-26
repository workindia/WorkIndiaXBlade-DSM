## Component Name

TagIcon

## Description

Represents tags, labels, categories, or pricing tags.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Tag

## Variant

Standard

## When to Use

- Tags or labels
- Category filtering
- Price tags

## When Not to Use

- For hashtags (use HashIcon)
- For bookmarks (use BookmarkIcon)

## Import

```typescript
import { TagIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TagIcon } from '@workindia/dsm';

const Example = () => {
  return <TagIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TagFillIcon, TagOutlineIcon, TagIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
