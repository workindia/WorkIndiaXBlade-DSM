## Component Name

EnvelopeSimpleIcon

## Description

Represents email, messages, or communication via mail.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Envelope

## Variant

Standard

## When to Use

- Email features
- Message notifications
- Contact via email actions

## When Not to Use

- For chat (use ChatIcon)
- For phone calls (use CallIcon)

## Import

```typescript
import { EnvelopeSimpleIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { EnvelopeSimpleIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <EnvelopeSimpleIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

EnvelopeSimpleFillIcon, EnvelopeSimpleOutlineIcon, EnvelopeSimpleIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
