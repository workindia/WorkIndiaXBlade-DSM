## Component Name

ArrowUpIcon

## Description

Displays a simple arrow pointing upward, representing up direction or scroll to top.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Upward navigation
- Scroll to top
- Sort ascending
- Move up

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowUpIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowUpIcon } from '@workindia/dsm';

const Example = () => {
  return <ArrowUpIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ArrowUpFillIcon, ArrowUpOutlineIcon, ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
