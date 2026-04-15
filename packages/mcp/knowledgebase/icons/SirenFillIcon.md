## Component Name

SirenFillIcon

## Description

Represents alerts, emergencies, urgent notifications.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Siren

## Variant

Filled

## When to Use

- Emergency alerts
- Urgent notifications
- Warning systems

## When Not to Use

- For notifications (use BellIcon)
- For police or emergency services

## Import

```typescript
import { SirenFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SirenFillIcon } from '@workindia/dsm';

const Example = () => {
  return <SirenFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SirenOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
