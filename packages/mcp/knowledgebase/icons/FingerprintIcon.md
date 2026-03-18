## Component Name

FingerprintIcon

## Description

Represents biometric authentication, security, or identity verification.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Fingerprint

## Variant

Standard

## When to Use

- Fingerprint login
- Biometric security features
- Identity verification

## When Not to Use

- For general security (use LockKeyIcon)
- As a hand gesture indicator

## Import

```typescript
import { FingerprintIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FingerprintIcon } from '@workindia/dsm';

const Example = () => {
  return <FingerprintIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

FingerprintFillIcon, FingerprintOutlineIcon, FingerprintIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
