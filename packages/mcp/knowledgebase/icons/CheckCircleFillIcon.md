## Component Name

CheckCircleFillIcon

## Description

Represents completion, success, verification, or confirmation.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Check

## Variant

Filled

## When to Use

- Success states and confirmations
- Completed tasks or steps
- Form validation feedback
- Selection indicators

## When Not to Use

- For adding items (use PlusIcon)
- As a radio button alternative

## Import

```typescript
import { CheckCircleFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CheckCircleFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <CheckCircleFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

CheckCircleOutlineIcon, XIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
