## Component Name

ArrowSquareOutIcon

## Description

Exit, go outside, or maximize. Use for exiting fullscreen, maximizing windows, or expanding to a larger view.

## Category

Arrow

## Variant

Standard

## When to Use

- Navigation buttons (next, previous, back, forward)
- Sorting indicators
- Expand/collapse functionality
- Move or reorder actions

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowSquareOutIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowSquareOutIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowSquareOutIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowSquareOutFillIcon, ArrowSquareOutOutlineIcon, ArrowSquareOutIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
