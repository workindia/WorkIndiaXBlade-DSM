## Component Name

PasswordFillIcon

## Description

Represents password fields, hidden content, or security.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Password

## Variant

Filled

## When to Use

- Password fields
- Hidden content toggle
- Security features

## When Not to Use

- For keys (use KeyIcon)
- For authentication

## Import

```typescript
import { PasswordFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PasswordFillIcon } from '@workindia/dsm';

const Example = () => {
  return <PasswordFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PasswordOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
