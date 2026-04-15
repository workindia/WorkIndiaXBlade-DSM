## Component Name

SignatureFillIcon

## Description

Represents signatures, autographs, or sign-offs.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Signature

## Variant

Filled

## When to Use

- Signature features
- Autograph or sign requests
- Approval or sign-off actions

## When Not to Use

- For editing (use PencilIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { SignatureFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SignatureFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <SignatureFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

SignatureOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
