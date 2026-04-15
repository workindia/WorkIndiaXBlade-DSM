## Component Name

SignatureIcon

## Description

Represents signatures, autographs, or sign-offs.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Signature

## Variant

Standard

## When to Use

- Signature features
- Autograph or sign requests
- Approval or sign-off actions

## When Not to Use

- For editing (use PencilIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { SignatureIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SignatureIcon } from '@workindia/dsm';

const Example = () => {
  return <SignatureIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SignatureFillIcon, SignatureOutlineIcon, SignatureIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
