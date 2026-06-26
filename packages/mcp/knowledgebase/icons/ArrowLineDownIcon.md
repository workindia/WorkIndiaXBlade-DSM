## Component Name

ArrowLineDownIcon

## Description

Displays an arrow with a line pointing downward, representing download or external link direction.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Download actions
- External link direction
- Go to bottom
- Import data

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowLineDownIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowLineDownIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ArrowLineDownIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ArrowLineDownFillIcon, ArrowLineDownOutlineIcon, ArrowLineDownIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
