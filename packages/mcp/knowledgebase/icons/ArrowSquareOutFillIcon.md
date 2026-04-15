## Component Name

ArrowSquareOutFillIcon

## Description

Exit, go outside, or maximize. Use for exiting fullscreen, maximizing windows, or expanding to a larger view. Filled variants provide more emphasis.

## Category

Arrow

## Variant

Filled

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
import { ArrowSquareOutFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowSquareOutFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowSquareOutFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowSquareOutOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
