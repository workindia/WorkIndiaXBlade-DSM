## Component Name

ArrowCircleLeftIcon

## Description

Displays a left-pointing arrow inside a circle, representing back, previous, or return actions.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Back navigation
- Previous page/step
- Return to previous view
- Undo action

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowCircleLeftIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowCircleLeftIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowCircleLeftIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowCircleLeftFillIcon, ArrowCircleLeftOutlineIcon, ArrowCircleLeftIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
