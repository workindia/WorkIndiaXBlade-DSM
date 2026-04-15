## Component Name

RewindIcon

## Description

Represents rewinding, going back, or reversing.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Rewind

## Variant

Standard

## When to Use

- Media rewind controls
- Undo or reverse actions
- Backward navigation

## When Not to Use

- For forward (use FastForwardIcon)
- For refresh (use ArrowsClockwiseIcon)

## Import

```typescript
import { RewindIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { RewindIcon } from '@workindia/dsm';

const Example = () => {
  return <RewindIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

RewindFillIcon, RewindOutlineIcon, RewindIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
