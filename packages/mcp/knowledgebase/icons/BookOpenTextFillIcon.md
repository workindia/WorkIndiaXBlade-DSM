## Component Name

BookOpenTextFillIcon

## Description

Represents reading, documentation, knowledge, or educational content.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Book

## Variant

Filled

## When to Use

- Documentation or help sections
- Reading or learning features
- Knowledge base or FAQ sections

## When Not to Use

- For bookmarks (use BookmarkSimpleIcon)
- As a list indicator (use ListBulletsIcon)

## Import

```typescript
import { BookOpenTextFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BookOpenTextFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <BookOpenTextFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

BookOpenTextOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
