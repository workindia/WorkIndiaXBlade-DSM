## Component Name

ExportIcon

## Description

Represents close, cancel, delete, or negative actions.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

X

## Variant

Standard

## When to Use

- Close or dismiss actions
- Cancel operations
- Clear or remove items

## When Not to Use

- For delete (use TrashIcon)
- For errors (use XCircleIcon)

## Import

```typescript
import { ExportIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ExportIcon } from '@workindia/dsm';

const Example = () => {
  return <ExportIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ExportFillIcon, ExportOutlineIcon, ExportIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
