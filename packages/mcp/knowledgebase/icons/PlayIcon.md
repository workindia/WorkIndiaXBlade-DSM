## Component Name

PlayIcon

## Description

Represents play, start, run, or media playback.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Play

## Variant

Standard

## When to Use

- Media playback controls
- Start or run actions
- Game or entertainment

## When Not to Use

- For pause (use PauseIcon)
- For stop (use StopIcon)

## Import

```typescript
import { PlayIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PlayIcon } from '@workindia/dsm';

const Example = () => {
  return <PlayIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PlayFillIcon, PlayOutlineIcon, PlayIcon, PauseIcon, StopIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
