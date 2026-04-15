## Component Name

BookIcon

## Description

Represents contact information, address book, or directory functionality.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Address book

## Variant

Standard

## When to Use

- Contact management sections
- Address book or directory features
- Profile contact information display

## When Not to Use

- For general navigation (use menu icons)
- As a decorative element without context

## Import

```typescript
import { BookIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BookIcon } from '@workindia/dsm';

const Example = () => {
  return <BookIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BookFillIcon, BookOutlineIcon, BookIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
