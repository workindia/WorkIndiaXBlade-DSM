## Component Name

FingerprintFillIcon

## Description

Represents biometric authentication, security, or identity verification.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Fingerprint

## Variant

Filled

## When to Use

- Fingerprint login
- Biometric security features
- Identity verification

## When Not to Use

- For general security (use LockKeyIcon)
- As a hand gesture indicator

## Import

```typescript
import { FingerprintFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FingerprintFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <FingerprintFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

FingerprintOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
