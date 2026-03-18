## Component Name

ArrowsOutLineHorizontalIcon

## Description

Expand horizontally or widen content. Use for horizontal fullscreen toggles or expanding width.

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
import { ArrowsOutLineHorizontalIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowsOutLineHorizontalIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowsOutLineHorizontalIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

ArrowsOutLineHorizontalFillIcon, ArrowsOutLineHorizontalOutlineIcon, ArrowsOutLineHorizontalIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
