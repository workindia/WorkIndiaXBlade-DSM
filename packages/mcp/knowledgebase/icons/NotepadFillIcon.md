## Component Name

NotepadFillIcon

## Description

Represents notes, memos, annotations, or quick writes.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Note

## Variant

Filled

## When to Use

- Notes or memo features
- Quick write functionality
- Annotation features

## When Not to Use

- For documents (use FileTextIcon)
- For bookmarks (use BookmarkIcon)

## Import

```typescript
import { NotepadFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { NotepadFillIcon } from '@workindia/dsm';

const Example = () => {
  return <NotepadFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

NotepadOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
