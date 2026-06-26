## Component Name

IdentificationCardIcon

## Description

Displays an identification card, representing identity verification, ID cards, or profile identification.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Identity verification
- Profile identification
- Employee/student ID
- KYC processes

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { IdentificationCardIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { IdentificationCardIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <IdentificationCardIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

IdentificationCardFillIcon, IdentificationCardOutlineIcon, IdentificationCardIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
