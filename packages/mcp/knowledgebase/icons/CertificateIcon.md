## Component Name

CertificateIcon

## Description

Displays a certificate, representing certificates, awards, or verifications.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Certificates and awards
- Verification badges
- Achievements
- Compliance certifications

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { CertificateIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CertificateIcon } from '@workindia/dsm';

const Example = () => {
  return <CertificateIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CertificateFillIcon, CertificateOutlineIcon, CertificateIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
