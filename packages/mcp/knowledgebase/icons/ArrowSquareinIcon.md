## Component Name

ArrowSquareinIcon

## Description

Enter, go inside, or minimize. Use for entering fullscreen, minimizing windows, or collapsing to a smaller view.

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
import { ArrowSquareinIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowSquareinIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowSquareinIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowSquareinFillIcon, ArrowSquareinOutlineIcon, ArrowSquareinIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
