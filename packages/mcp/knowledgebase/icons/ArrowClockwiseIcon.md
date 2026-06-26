## Component Name

ArrowClockwiseIcon

## Description

Displays an arrow curving clockwise, representing refresh, reload, or rotate clockwise actions.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Refresh/reload content
- Retry failed action
- Rotate clockwise
- Sync data

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowClockwiseIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowClockwiseIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowClockwiseIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowClockwiseFillIcon, ArrowClockwiseOutlineIcon, ArrowClockwiseIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
