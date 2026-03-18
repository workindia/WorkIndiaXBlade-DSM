## Component Name

LockKeyIcon

## Description

Represents keys, passwords, authentication, or access control.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Key

## Variant

Standard

## When to Use

- Password features
- Authentication or login
- API keys or access tokens

## When Not to Use

- For physical keys
- As a solution indicator

## Import

```typescript
import { LockKeyIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { LockKeyIcon } from '@workindia/dsm';

const Example = () => {
  return <LockKeyIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

LockKeyFillIcon, LockKeyOutlineIcon, LockKeyIcon, LockOpenIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
