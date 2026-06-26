## Component Name

UserFillIcon

## Description

Represents users, accounts, profiles, or person-based features.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

User

## Variant

Filled

## When to Use

- User profiles
- Account features
- Personalization
- People or persons

## When Not to Use

- For groups (use UsersIcon)
- For accounts in general

## Import

```typescript
import { UserFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserFillIcon } from '@workindia/dsm';

const Example = () => {
  return <UserFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserOutlineIcon, UsersIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
