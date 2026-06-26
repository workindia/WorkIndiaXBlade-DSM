## Component Name

QrCodeFillIcon

## Description

Displays a QR code, representing QR code scanning or code-based information sharing.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

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
import { QrCodeFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { QrCodeFillIcon } from '@workindia/dsm';

const Example = () => {
  return <QrCodeFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

QrCodeOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
