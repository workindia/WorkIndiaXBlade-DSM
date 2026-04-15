## Component Name

FileArrowUpFillIcon

## Description

Upload files to a server or cloud storage. Use for upload buttons, file transfer progress, or backup features. Filled variants provide more emphasis.

## Category

Arrow

## Variant

Filled

## When to Use

- Navigation buttons (next, previous, back, forward)
- Sorting indicators
- Expand/collapse functionality
- Move or reorder actions

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { FileArrowUpFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FileArrowUpFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <FileArrowUpFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

FileArrowUpOutlineIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
