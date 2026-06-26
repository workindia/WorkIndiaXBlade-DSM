## Component Name

PlayPauseFillIcon

## Description

Represents pause, stop temporarily, or hold actions.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Pause

## Variant

Filled

## When to Use

- Media playback controls
- Pause functionality
- Hold or wait states

## When Not to Use

- For stop (use StopIcon)
- For play (use PlayIcon)

## Import

```typescript
import { PlayPauseFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PlayPauseFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <PlayPauseFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

PlayPauseOutlineIcon, PauseIcon, StopIcon, PlayIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
