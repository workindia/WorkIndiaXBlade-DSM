## Component Name

TimerFillIcon

## Description

Represents timers, countdowns, limits, or elapsed time.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Timer

## Variant

Filled

## When to Use

- Timer features
- Countdown or limit indicators
- Elapsed time tracking

## When Not to Use

- For clocks (use ClockIcon)
- For dates (use CalendarIcon)

## Import

```typescript
import { TimerFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TimerFillIcon } from '@workindia/dsm';

const Example = () => {
  return <TimerFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TimerOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
