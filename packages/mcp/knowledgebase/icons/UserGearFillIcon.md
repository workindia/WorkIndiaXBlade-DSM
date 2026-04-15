## Component Name

UserGearFillIcon

## Description

Represents user edit or modification. The filled user gear icon provides a more prominent appearance for editing or modifying user profiles, account settings, or user configuration. It is commonly used in user management panels, profile editing features, or admin interfaces.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

User / Settings

## Variant

Filled

## When to Use

- User profile editing or modification (when emphasis is needed)
- Account settings or configuration as primary action
- User management or admin panels
- Edit user details or permissions as prominent feature
- User configuration or customization features

## When Not to Use

- For general settings (use GearSixIcon)
- For creating new users (use UserPlusIcon)
- For viewing user profiles (use UserIcon)
- For deleting users (use TrashIcon)

## Import

```typescript
import { UserGearFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserGearFillIcon } from '@workindia/dsm';

const Example = () => {
  return <UserGearFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserGearIcon, GearSixFillIcon, UserIcon, PencilSimpleIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
