## Component Name

UsersThreeIcon

## Description

Represents a collection of users or community. The three-user icon specifically indicates groups of three or more people, teams, communities, or collaborative environments. It is often used to represent team features, group projects, community pages, or any context involving multiple users together.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

User / Community

## Variant

Standard

## When to Use

- Team or group features involving multiple members
- Community pages or community features
- Group projects or collaborative workspaces
- Family or household accounts
- Any context showing three or more users together

## When Not to Use

- For single user profiles (use UserIcon)
- For two-user scenarios (use UsersIcon)
- For contact lists (use UserListIcon)
- For showing user count badges (use Counter with UserIcon)

## Import

```typescript
import { UsersThreeIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UsersThreeIcon } from '@workindia/dsm';

const Example = () => {
  return <UsersThreeIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UsersThreeFillIcon, UsersFourIcon, UsersIcon, UserIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
