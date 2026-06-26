## Component Name

KeyFillIcon

## Description

Represents keys, passwords, authentication, or access control.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Key

## Variant

Filled

## When to Use

- Password features
- Authentication or login
- API keys or access tokens

## When Not to Use

- For physical keys
- As a solution indicator

## Import

```typescript
import { KeyFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { KeyFillIcon } from '@workindia/dsm';

const Example = () => {
  return <KeyFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

KeyOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
