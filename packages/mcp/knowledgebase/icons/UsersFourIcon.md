## Component Name

UsersFourIcon

## Description

Represents a collection of users or community. The four-user icon specifically indicates groups of four or more people, large teams, communities, or collaborative environments. It is often used to represent team features, group projects, community pages, or any context involving multiple users together.

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
- Any context showing four or more users together

## When Not to Use

- For single user profiles (use UserIcon)
- For two-user scenarios (use UsersIcon)
- For contact lists (use UserListIcon)
- For showing user count badges (use Counter with UserIcon)

## Import

```typescript
import { UsersFourIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UsersFourIcon } from '@workindia/dsm';

const Example = () => {
  return <UsersFourIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UsersFourFillIcon, UsersThreeIcon, UsersIcon, UserIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
