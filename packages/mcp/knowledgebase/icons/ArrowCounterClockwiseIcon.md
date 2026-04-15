## Component Name

ArrowCounterClockwiseIcon

## Description

Displays an arrow curving counter-clockwise, representing undo or rotate counter-clockwise actions.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Undo action
- Rotate counter-clockwise
- Go back to previous state
- Cancel recent change

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowCounterClockwiseIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowCounterClockwiseIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowCounterClockwiseIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

ArrowCounterClockwiseFillIcon, ArrowCounterClockwiseOutlineIcon, ArrowCounterClockwiseIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
