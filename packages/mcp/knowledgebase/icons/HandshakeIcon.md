## Component Name

HandshakeIcon

## Description

Represents gestures, actions, helping hands, or physical interactions.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Hand

## Variant

Standard

## When to Use

- Hand gestures or interactions
- Help or support features
- Drag and drop indicators
- Stop or pause actions

## When Not to Use

- For pointing (use CursorIcon)
- As a person indicator (use UserIcon)

## Import

```typescript
import { HandshakeIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HandshakeIcon } from '@workindia/dsm';

const Example = () => {
  return <HandshakeIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

HandshakeFillIcon, HandshakeOutlineIcon, HandshakeIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
