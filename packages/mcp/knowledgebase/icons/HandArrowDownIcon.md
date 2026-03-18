## Component Name

HandArrowDownIcon

## Description

Displays a hand pointing downward, representing download, save, or bring action.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Download actions
- Save to device
- Bring to bottom
- Reject action

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { HandArrowDownIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HandArrowDownIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <HandArrowDownIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

HandArrowDownFillIcon, HandArrowDownOutlineIcon, HandArrowDownIcon, ArrowUpIcon, ArrowLeftIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
