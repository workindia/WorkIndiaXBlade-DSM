## Component Name

BookFillIcon

## Description

Represents contact information, address book, or directory functionality.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Address book

## Variant

Filled

## When to Use

- Contact management sections
- Address book or directory features
- Profile contact information display

## When Not to Use

- For general navigation (use menu icons)
- As a decorative element without context

## Import

```typescript
import { BookFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BookFillIcon } from '@workindia/dsm';

const Example = () => {
  return <BookFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BookOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
