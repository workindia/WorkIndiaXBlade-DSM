## Component Name

UserGearIcon

## Description

Represents user edit or modification. The user gear icon indicates editing or modifying user profiles, account settings, or user configuration. It is commonly used in user management panels, profile editing features, or admin interfaces where users can be configured or modified.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

User / Settings

## Variant

Standard

## When to Use

- User profile editing or modification
- Account settings or configuration
- User management or admin panels
- Edit user details or permissions
- User configuration or customization features

## When Not to Use

- For general settings (use GearSixIcon)
- For creating new users (use UserPlusIcon)
- For viewing user profiles (use UserIcon)
- For deleting users (use TrashIcon)

## Import

```typescript
import { UserGearIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserGearIcon } from '@workindia/dsm';

const Example = () => {
  return <UserGearIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserGearFillIcon, GearSixIcon, UserIcon, PencilSimpleIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
