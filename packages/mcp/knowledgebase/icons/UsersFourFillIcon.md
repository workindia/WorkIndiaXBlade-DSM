## Component Name

UsersFourFillIcon

## Description

Represents a collection of users or community. The filled four-user icon provides a more prominent appearance for large team, group, or community features. It is often used to represent team features, group projects, community pages, or any context involving multiple users together.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

User / Community

## Variant

Filled

## When to Use

- Team or group features involving multiple members (when emphasis is needed)
- Community pages or community features
- Group projects or collaborative workspaces
- Family or household accounts
- Any context showing four or more users together as a primary visual

## When Not to Use

- For single user profiles (use UserIcon)
- For two-user scenarios (use UsersIcon)
- For contact lists (use UserListIcon)
- For showing user count badges (use Counter with UserIcon)

## Import

```typescript
import { UsersFourFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UsersFourFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <UsersFourFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

UsersFourIcon, UsersThreeFillIcon, UsersIcon, UserIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
