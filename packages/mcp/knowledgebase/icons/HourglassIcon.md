## Component Name

HourglassIcon

## Description

Displays an hourglass, representing waiting, loading, or pending status.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Loading states
- Waiting periods
- Pending actions
- In-progress status

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { HourglassIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HourglassIcon } from '@workindia/dsm';

const Example = () => {
  return <HourglassIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

HourglassFillIcon, HourglassOutlineIcon, HourglassIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
