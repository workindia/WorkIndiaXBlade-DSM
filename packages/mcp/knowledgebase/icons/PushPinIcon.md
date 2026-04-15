## Component Name

PushPinIcon

## Description

Displays a push pin, representing pin, attach, or fixed position.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Pin messages or notes
- Fixed position elements
- Bookmark features
- Attach to top

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { PushPinIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PushPinIcon } from '@workindia/dsm';

const Example = () => {
  return <PushPinIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PushPinFillIcon, PushPinOutlineIcon, PushPinIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
