## Component Name

ClockFillIcon

## Description

Represents time, schedules, timestamps, or historical data.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Clock

## Variant

Filled

## When to Use

- Time display or pickers
- Timestamps on content
- History or activity logs

## When Not to Use

- For alarms (use AlarmIcon)
- For deadlines (use TimerIcon)

## Import

```typescript
import { ClockFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ClockFillIcon } from '@workindia/dsm';

const Example = () => {
  return <ClockFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ClockOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
