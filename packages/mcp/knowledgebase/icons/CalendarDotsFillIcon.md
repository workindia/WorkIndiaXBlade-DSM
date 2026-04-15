## Component Name

CalendarDotsFillIcon

## Description

Represents dates, scheduling, events, or time-based planning.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Calendar

## Variant

Filled

## When to Use

- Date pickers
- Event scheduling features
- Calendar integrations

## When Not to Use

- For time-only features (use ClockIcon)
- As a deadline indicator (use TimerIcon)

## Import

```typescript
import { CalendarDotsFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CalendarDotsFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <CalendarDotsFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

CalendarDotsOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
