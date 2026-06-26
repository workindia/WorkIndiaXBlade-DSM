## Component Name

AddressBookIcon

## Description

Displays a book with contact information, representing an address book or contacts directory.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Viewing contacts or address book
- Contact management features
- Customer/employee directory

## When Not to Use

- For bookmarks (use BookmarkSimpleIcon)
- As a list indicator (use ListBulletsIcon)

## Import

```typescript
import { AddressBookIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { AddressBookIcon } from '@workindia/dsm';

const Example = () => {
  return <AddressBookIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

AddressBookFillIcon, AddressBookOutlineIcon, AddressBookIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
