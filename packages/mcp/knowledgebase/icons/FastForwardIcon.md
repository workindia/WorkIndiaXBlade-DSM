## Component Name

FastForwardIcon

## Description

Displays a fast forward symbol, representing skip forward or fast forward in media playback.

Standard icons provide a balanced appearance suitable for most use cases.

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
import { FastForwardIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FastForwardIcon } from '@workindia/dsm';

const Example = () => {
  return <FastForwardIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

FastForwardFillIcon, FastForwardOutlineIcon, FastForwardIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
