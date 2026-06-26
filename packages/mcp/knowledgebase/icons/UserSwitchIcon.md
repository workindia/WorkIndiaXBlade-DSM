## Component Name

UserSwitchIcon

## Description

Represents switching between different users who might be logged in. The user switch icon indicates the ability to switch accounts, change users, or transfer session to another logged-in user. Commonly used in multi-user applications or shared device scenarios.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

User / Account

## Variant

Standard

## When to Use

- Switch account or user actions in header/profile dropdowns
- Multi-user applications where users can switch between accounts
- Shared device scenarios where multiple users log in
- Account switching flows or user transfer operations

## When Not to Use

- For creating new users (use UserPlusIcon)
- For viewing user profiles (use UserIcon)
- For groups or teams (use UsersIcon)
- For logout actions (use PowerIcon)

## Import

```typescript
import { UserSwitchIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserSwitchIcon } from '@workindia/dsm';

const Example = () => {
  return <UserSwitchIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserSwitchFillIcon, UserIcon, UsersIcon, UserCheckIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
