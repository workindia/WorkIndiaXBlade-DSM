## Component Name

PushPinSlashIcon

## Description

Displays a crossed-out push pin, representing unpin, detach, or remove from fixed position.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Unpin messages
- Remove from fixed position
- Detach items
- Unbookmark

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { PushPinSlashIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PushPinSlashIcon } from '@workindia/dsm';

const Example = () => {
  return <PushPinSlashIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PushPinSlashFillIcon, PushPinSlashOutlineIcon, PushPinSlashIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
