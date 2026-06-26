## Component Name

ExportFillIcon

## Description

Represents close, cancel, delete, or negative actions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

X

## Variant

Filled

## When to Use

- Close or dismiss actions
- Cancel operations
- Clear or remove items

## When Not to Use

- For delete (use TrashIcon)
- For errors (use XCircleIcon)

## Import

```typescript
import { ExportFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ExportFillIcon } from '@workindia/dsm';

const Example = () => {
  return <ExportFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ExportOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
