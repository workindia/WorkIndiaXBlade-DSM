## Component Name

EnvelopeSimpleOpenFillIcon

## Description

Represents email, messages, or communication via mail.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Envelope

## Variant

Filled

## When to Use

- Email features
- Message notifications
- Contact via email actions

## When Not to Use

- For chat (use ChatIcon)
- For phone calls (use CallIcon)

## Import

```typescript
import { EnvelopeSimpleOpenFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { EnvelopeSimpleOpenFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <EnvelopeSimpleOpenFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

EnvelopeSimpleOpenOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
