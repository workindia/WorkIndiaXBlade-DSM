## Component Name

QrCodeIcon

## Description

Displays a QR code, representing QR code scanning or code-based information sharing.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- QR code scanning
- Payment via QR
- Share contact/info via QR
- Authentication

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { QrCodeIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { QrCodeIcon } from '@workindia/dsm';

const Example = () => {
  return <QrCodeIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

QrCodeFillIcon, QrCodeOutlineIcon, QrCodeIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
