## Component Name

UserSwitchFillIcon

## Description

Represents switching between different users who might be logged in. The filled user switch icon provides a more prominent appearance for the account switching action, ideal for use as a primary action button or in prominent positions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

User / Account

## Variant

Filled

## When to Use

- Switch account or user actions in header/profile dropdowns (when emphasis is needed)
- Multi-user applications where users can switch between accounts
- Shared device scenarios where multiple users log in
- Account switching flows or user transfer operations as primary action

## When Not to Use

- For creating new users (use UserPlusIcon)
- For viewing user profiles (use UserIcon)
- For groups or teams (use UsersIcon)
- For logout actions (use PowerIcon)

## Import

```typescript
import { UserSwitchFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserSwitchFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <UserSwitchFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

UserSwitchIcon, UserIcon, UsersIcon, UserCheckIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
