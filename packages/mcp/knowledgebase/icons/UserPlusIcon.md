## Component Name

UserPlusIcon

## Description

Add a new user, invite someone, or create a new account. Use for add user buttons, invite team members, or registration flows.

## Category

Plus

## Variant

Standard

## When to Use

- Add or create actions
- Increase quantity
- Positive or yes responses

## When Not to Use

- For remove (use MinusIcon)
- For expand (use CaretDownIcon)

## Import

```typescript
import { UserPlusIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserPlusIcon } from '@workindia/dsm';

const Example = () => {
  return <UserPlusIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserPlusFillIcon, UserPlusOutlineIcon, UserPlusIcon, MinusIcon, UsersIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
