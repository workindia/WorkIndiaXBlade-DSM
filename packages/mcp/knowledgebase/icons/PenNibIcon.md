## Component Name

PenNibIcon

## Description

Displays a pen nib, representing writing, editing, or signature functionality.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Writing features
- Signature capture
- Editing tools
- Document annotation

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { PenNibIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PenNibIcon } from '@workindia/dsm';

const Example = () => {
  return <PenNibIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PenNibFillIcon, PenNibOutlineIcon, PenNibIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
