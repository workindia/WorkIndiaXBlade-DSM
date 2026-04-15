## Component Name

SirenIcon

## Description

Represents alerts, emergencies, urgent notifications.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Siren

## Variant

Standard

## When to Use

- Emergency alerts
- Urgent notifications
- Warning systems

## When Not to Use

- For notifications (use BellIcon)
- For police or emergency services

## Import

```typescript
import { SirenIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SirenIcon } from '@workindia/dsm';

const Example = () => {
  return <SirenIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SirenFillIcon, SirenOutlineIcon, SirenIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
