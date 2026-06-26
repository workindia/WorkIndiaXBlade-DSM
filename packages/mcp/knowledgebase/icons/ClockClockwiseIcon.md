## Component Name

ClockClockwiseIcon

## Description

Represents time, schedules, timestamps, or historical data.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Clock

## Variant

Standard

## When to Use

- Time display or pickers
- Timestamps on content
- History or activity logs

## When Not to Use

- For alarms (use AlarmIcon)
- For deadlines (use TimerIcon)

## Import

```typescript
import { ClockClockwiseIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ClockClockwiseIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ClockClockwiseIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ClockClockwiseFillIcon, ClockClockwiseOutlineIcon, ClockClockwiseIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
