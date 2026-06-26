## Component Name

UserPlusFillIcon

## Description

Add a new user, invite someone, or create a new account. Use for add user buttons, invite team members, or registration flows. Filled variants provide more emphasis.

## Category

Plus

## Variant

Filled

## When to Use

- Add or create actions
- Increase quantity
- Positive or yes responses

## When Not to Use

- For remove (use MinusIcon)
- For expand (use CaretDownIcon)

## Import

```typescript
import { UserPlusFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserPlusFillIcon } from '@workindia/dsm';

const Example = () => {
  return <UserPlusFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserPlusOutlineIcon, MinusIcon, UsersIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
