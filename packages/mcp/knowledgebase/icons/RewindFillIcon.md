## Component Name

RewindFillIcon

## Description

Represents rewinding, going back, or reversing.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Rewind

## Variant

Filled

## When to Use

- Media rewind controls
- Undo or reverse actions
- Backward navigation

## When Not to Use

- For forward (use FastForwardIcon)
- For refresh (use ArrowsClockwiseIcon)

## Import

```typescript
import { RewindFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { RewindFillIcon } from '@workindia/dsm';

const Example = () => {
  return <RewindFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

RewindOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
