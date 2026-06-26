## Component Name

ChecksIcon

## Description

Represents completion, success, verification, or confirmation.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Check

## Variant

Standard

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
import { ChecksIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ChecksIcon } from '@workindia/dsm';

const Example = () => {
  return <ChecksIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ChecksFillIcon, ChecksOutlineIcon, ChecksIcon, XIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
