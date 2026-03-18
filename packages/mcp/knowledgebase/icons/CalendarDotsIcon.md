## Component Name

CalendarDotsIcon

## Description

Represents dates, scheduling, events, or time-based planning.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Calendar

## Variant

Standard

## When to Use

- Date pickers
- Event scheduling features
- Calendar integrations

## When Not to Use

- For time-only features (use ClockIcon)
- As a deadline indicator (use TimerIcon)

## Import

```typescript
import { CalendarDotsIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CalendarDotsIcon } from '@workindia/dsm';

const Example = () => {
  return <CalendarDotsIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CalendarDotsFillIcon, CalendarDotsOutlineIcon, CalendarDotsIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
