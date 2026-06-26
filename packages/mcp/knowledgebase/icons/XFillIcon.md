## Component Name

XFillIcon

## Description

Represents close, cancel, delete, or negative actions. The filled X icon provides a more prominent appearance, ideal for use as a primary close action where emphasis is needed.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

X

## Variant

Filled

## When to Use

- Close or dismiss actions for modals, drawers, popovers, and dialogs (when emphasis is needed)
- Cancel operations in forms and workflows
- Clear or remove items from lists or inputs
- Closing toast notifications or alerts where the icon is the primary focus

## When Not to Use

- For permanent delete actions (use TrashIcon)
- For error states (use XCircleIcon or XCircleFillIcon)
- As a multiplication symbol in mathematical contexts

## Import

```typescript
import { XFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { XFillIcon } from '@workindia/dsm';

const Example = () => {
  return <XFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

XIcon, XCircleFillIcon, CheckIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
