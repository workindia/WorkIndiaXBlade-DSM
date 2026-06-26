## Component Name

PauseIcon

## Description

Represents pause, stop temporarily, or hold actions.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Pause

## Variant

Standard

## When to Use

- Media playback controls
- Pause functionality
- Hold or wait states

## When Not to Use

- For stop (use StopIcon)
- For play (use PlayIcon)

## Import

```typescript
import { PauseIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PauseIcon } from '@workindia/dsm';

const Example = () => {
  return <PauseIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PauseFillIcon, PauseOutlineIcon, PauseIcon, PlayIcon, StopIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
