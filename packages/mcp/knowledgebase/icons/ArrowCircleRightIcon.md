## Component Name

ArrowCircleRightIcon

## Description

Displays a right-pointing arrow inside a circle, representing forward, next, or continue actions.

Standard icons provide a balanced appearance suitable for most use cases.

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
import { ArrowCircleRightIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowCircleRightIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowCircleRightIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowCircleRightFillIcon, ArrowCircleRightOutlineIcon, ArrowCircleRightIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
