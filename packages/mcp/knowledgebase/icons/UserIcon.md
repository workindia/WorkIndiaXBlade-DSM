## Component Name

UserIcon

## Description

Represents users, accounts, profiles, or person-based features.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

User

## Variant

Standard

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
import { UserIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserIcon } from '@workindia/dsm';

const Example = () => {
  return <UserIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserFillIcon, UserOutlineIcon, UserIcon, UsersIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
