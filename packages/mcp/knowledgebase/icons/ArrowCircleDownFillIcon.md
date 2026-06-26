## Component Name

ArrowCircleDownFillIcon

## Description

Displays a downward-pointing arrow inside a circle, representing download, scroll down, or expand downward actions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Download actions
- Scroll down functionality
- Expand/collapse content downward
- Show more content

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowCircleDownFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowCircleDownFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowCircleDownFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

ArrowCircleDownOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
