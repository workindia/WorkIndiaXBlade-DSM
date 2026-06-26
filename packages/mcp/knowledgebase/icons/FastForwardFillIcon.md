## Component Name

FastForwardFillIcon

## Description

Displays a fast forward symbol, representing skip forward or fast forward in media playback.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Fast forward media
- Skip to next
- Speed up playback
- Skip forward functionality

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { FastForwardFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FastForwardFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <FastForwardFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

FastForwardOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
