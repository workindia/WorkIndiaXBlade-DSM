## Component Name

ArrowLeftIcon

## Description

Displays a simple arrow pointing left, representing left direction or back navigation.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Back navigation
- Previous item
- Indent content
- Move left

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowLeftIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowLeftIcon } from '@workindia/dsm';

const Example = () => {
  return <ArrowLeftIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ArrowLeftFillIcon, ArrowLeftOutlineIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
