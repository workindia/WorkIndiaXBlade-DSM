## Component Name

AlarmIcon

## Description

Represents alarms, reminders, notifications, or time-based alerts.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Alarm

## Variant

Standard

## When to Use

- Alarm or reminder features
- Notification settings
- Time-based alerts

## When Not to Use

- For general bell notifications (use BellIcon)
- As a clock indicator (use ClockIcon)

## Import

```typescript
import { AlarmIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { AlarmIcon } from '@workindia/dsm';

const Example = () => {
  return <AlarmIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

AlarmFillIcon, AlarmOutlineIcon, AlarmIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
