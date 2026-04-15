## Component Name

ArrowCircleLeftFillIcon

## Description

Displays a left-pointing arrow inside a circle, representing back, previous, or return actions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

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
import { ArrowCircleLeftFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowCircleLeftFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowCircleLeftFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

ArrowCircleLeftOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
