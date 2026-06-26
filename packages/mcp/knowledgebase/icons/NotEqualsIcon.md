## Component Name

NotEqualsIcon

## Description

Represents notes, memos, annotations, or quick writes.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Note

## Variant

Standard

## When to Use

- Notes or memo features
- Quick write functionality
- Annotation features

## When Not to Use

- For documents (use FileTextIcon)
- For bookmarks (use BookmarkIcon)

## Import

```typescript
import { NotEqualsIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { NotEqualsIcon } from '@workindia/dsm';

const Example = () => {
  return <NotEqualsIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

NotEqualsFillIcon, NotEqualsOutlineIcon, NotEqualsIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
