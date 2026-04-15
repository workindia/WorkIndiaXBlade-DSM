## Component Name

UserListIcon

## Description

Represents a directory of users. The user list icon indicates a list, roster, or directory containing multiple users. It is commonly used to access user directories, member lists, employee directories, or any feature that displays a collection of users in a list format.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

User / Directory

## Variant

Standard

## When to Use

- User directories or member directories
- Employee lists or team rosters
- Contact lists or address books
- Any feature displaying multiple users in a list format
- User management or admin panels

## When Not to Use

- For single user profiles (use UserIcon)
- For groups or teams (use UsersIcon)
- For general lists (use ListBulletsIcon)
- For creating new users (use UserPlusIcon)

## Import

```typescript
import { UserListIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserListIcon } from '@workindia/dsm';

const Example = () => {
  return <UserListIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserListFillIcon, UsersIcon, UserIcon, ListBulletsIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
