## Component Name

AlarmFillIcon

## Description

Represents alarms, reminders, notifications, or time-based alerts.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Alarm

## Variant

Filled

## When to Use

- Alarm or reminder features
- Notification settings
- Time-based alerts

## When Not to Use

- For general bell notifications (use BellIcon)
- As a clock indicator (use ClockIcon)

## Import

```typescript
import { AlarmFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { AlarmFillIcon } from '@workindia/dsm';

const Example = () => {
  return <AlarmFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

AlarmOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
