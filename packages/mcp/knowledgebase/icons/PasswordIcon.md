## Component Name

PasswordIcon

## Description

Represents password fields, hidden content, or security.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Password

## Variant

Standard

## When to Use

- Password fields
- Hidden content toggle
- Security features

## When Not to Use

- For keys (use KeyIcon)
- For authentication

## Import

```typescript
import { PasswordIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PasswordIcon } from '@workindia/dsm';

const Example = () => {
  return <PasswordIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PasswordFillIcon, PasswordOutlineIcon, PasswordIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
