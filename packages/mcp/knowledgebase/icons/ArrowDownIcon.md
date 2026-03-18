## Component Name

ArrowDownIcon

## Description

Displays a simple arrow pointing downward, representing downward direction or movement.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Downward navigation
- Dropdown expansion
- Sort descending
- Move down

## When Not to Use

- As decorative elements
- For indicating links (use LinkIcon)

## Import

```typescript
import { ArrowDownIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ArrowDownIcon } from '@workindia/dsm';

const Example = () => {
  return <ArrowDownIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ArrowDownFillIcon, ArrowDownOutlineIcon, ArrowDownIcon, ArrowUpIcon, ArrowLeftIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
