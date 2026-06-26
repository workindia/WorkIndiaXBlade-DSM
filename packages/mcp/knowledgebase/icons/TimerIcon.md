## Component Name

TimerIcon

## Description

Represents timers, countdowns, limits, or elapsed time.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Timer

## Variant

Standard

## When to Use

- Timer features
- Countdown or limit indicators
- Elapsed time tracking

## When Not to Use

- For clocks (use ClockIcon)
- For dates (use CalendarIcon)

## Import

```typescript
import { TimerIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TimerIcon } from '@workindia/dsm';

const Example = () => {
  return <TimerIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TimerFillIcon, TimerOutlineIcon, TimerIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
