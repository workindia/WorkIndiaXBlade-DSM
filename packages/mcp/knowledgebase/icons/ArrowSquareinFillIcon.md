## Component Name

ArrowSquareinFillIcon

## Description

Enter, go inside, or minimize. Use for entering fullscreen, minimizing windows, or collapsing to a smaller view. Filled variants provide more emphasis.

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
import { ArrowSquareinFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowSquareinFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowSquareinFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowSquareinOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
