## Component Name

ArrowRightIcon

## Description

Displays a simple arrow pointing right, representing right direction or forward navigation.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Forward navigation
- Next item
- Outdent content
- Move right

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowRightIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowRightIcon } from '@workindia/dsm';

const Example = () => {
  return <ArrowRightIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ArrowRightFillIcon, ArrowRightOutlineIcon, ArrowRightIcon, ArrowLeftIcon, ArrowUpIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
