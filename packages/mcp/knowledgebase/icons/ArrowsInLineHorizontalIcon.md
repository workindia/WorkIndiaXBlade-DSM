## Component Name

ArrowsInLineHorizontalIcon

## Description

Collapse horizontally or reduce width. Use for horizontal collapse or reducing width.

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
import { ArrowsInLineHorizontalIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowsInLineHorizontalIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowsInLineHorizontalIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

ArrowsInLineHorizontalFillIcon, ArrowsInLineHorizontalOutlineIcon, ArrowsInLineHorizontalIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
