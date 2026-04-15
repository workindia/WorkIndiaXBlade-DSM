## Component Name

ArrowLineLeftIcon

## Description

Move or navigate to the left. Use for back navigation, previous step, or moving content leftward.

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
import { ArrowLineLeftIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowLineLeftIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowLineLeftIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowLineLeftFillIcon, ArrowLineLeftOutlineIcon, ArrowLineLeftIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
