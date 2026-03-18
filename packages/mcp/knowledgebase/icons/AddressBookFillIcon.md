## Component Name

AddressBookFillIcon

## Description

Displays a book with contact information, representing an address book or contacts directory.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Viewing contacts or address book
- Contact management features
- Customer/employee directory

## When Not to Use

- For bookmarks (use BookmarkSimpleIcon)
- As a list indicator (use ListBulletsIcon)

## Import

```typescript
import { AddressBookFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { AddressBookFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <AddressBookFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

AddressBookOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
