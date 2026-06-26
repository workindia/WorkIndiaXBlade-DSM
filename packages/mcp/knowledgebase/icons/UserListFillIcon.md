## Component Name

UserListFillIcon

## Description

Represents a directory of users. The filled user list icon provides a more prominent appearance for user directories, member lists, employee directories, or any feature that displays a collection of users in a list format.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

User / Directory

## Variant

Filled

## When to Use

- User directories or member directories (when emphasis is needed)
- Employee lists or team rosters as primary action
- Contact lists or address books
- Any feature displaying multiple users in a list format as prominent feature
- User management or admin panels

## When Not to Use

- For single user profiles (use UserIcon)
- For groups or teams (use UsersIcon)
- For general lists (use ListBulletsIcon)
- For creating new users (use UserPlusIcon)

## Import

```typescript
import { UserListFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserListFillIcon } from '@workindia/dsm';

const Example = () => {
  return <UserListFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserListIcon, UsersIcon, UserIcon, ListBulletsIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
