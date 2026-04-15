## Component Name

ArrowCircleUpFillIcon

## Description

Displays an upward-pointing arrow inside a circle, representing scroll to top, upload, or expand upward actions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Scroll to top
- Upload actions
- Expand/collapse content upward
- Go to beginning

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowCircleUpFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowCircleUpFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowCircleUpFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowCircleUpOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
