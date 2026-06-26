## Component Name

ArrowCircleRightFillIcon

## Description

Displays a right-pointing arrow inside a circle, representing forward, next, or continue actions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Forward navigation
- Next page/step
- Continue to next view
- Proceed action

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowCircleRightFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowCircleRightFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowCircleRightFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

ArrowCircleRightOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
