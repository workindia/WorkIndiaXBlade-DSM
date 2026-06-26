## Component Name

HandArrowDownFillIcon

## Description

Displays a hand pointing downward, representing download, save, or bring action.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

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
import { HandArrowDownFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HandArrowDownFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <HandArrowDownFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

HandArrowDownOutlineIcon, ArrowUpIcon, ArrowLeftIcon, ArrowRightIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
