## Component Name

XIcon

## Description

Represents close, cancel, delete, or negative actions. The X icon (cross/close) is a universal symbol for closing, dismissing, or canceling actions. It is commonly used in modals, popovers, alerts, and form inputs to allow users to dismiss content or cancel operations.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

X

## Variant

Standard

## When to Use

- Close or dismiss actions for modals, drawers, popovers, and dialogs
- Cancel operations in forms and workflows
- Clear or remove items from lists or inputs
- Closing toast notifications or alerts

## When Not to Use

- For permanent delete actions (use TrashIcon)
- For error states (use XCircleIcon or XCircleFillIcon)
- As a multiplication symbol in mathematical contexts

## Import

```typescript
import { XIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { XIcon } from '@workindia/dsm';

const Example = () => {
  return <XIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

XFillIcon, XCircleIcon, CheckIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
