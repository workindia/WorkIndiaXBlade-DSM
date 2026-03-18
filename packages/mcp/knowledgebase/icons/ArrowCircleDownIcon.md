## Component Name

ArrowCircleDownIcon

## Description

Displays a downward-pointing arrow inside a circle, representing download, scroll down, or expand downward actions.

Standard icons provide a balanced appearance suitable for most use cases.

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
import { ArrowCircleDownIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowCircleDownIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowCircleDownIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowCircleDownFillIcon, ArrowCircleDownOutlineIcon, ArrowCircleDownIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
