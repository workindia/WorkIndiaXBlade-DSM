## Component Name

HandshakeFillIcon

## Description

Represents gestures, actions, helping hands, or physical interactions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Hand

## Variant

Filled

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
import { HandshakeFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HandshakeFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <HandshakeFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

HandshakeOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
