## Component Name

ArrowLineUpIcon

## Description

Displays an arrow with a line pointing upward, representing upload or external link direction.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Upload actions
- External link direction
- Go to top
- Export data

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowLineUpIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowLineUpIcon } from '@workindia/dsm';

const Example = () => {
  return <ArrowLineUpIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ArrowLineUpFillIcon, ArrowLineUpOutlineIcon, ArrowLineUpIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
