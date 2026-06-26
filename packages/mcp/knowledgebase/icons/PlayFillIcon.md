## Component Name

PlayFillIcon

## Description

Represents play, start, run, or media playback.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Play

## Variant

Filled

## When to Use

- Media playback controls
- Start or run actions
- Game or entertainment

## When Not to Use

- For pause (use PauseIcon)
- For stop (use StopIcon)

## Import

```typescript
import { PlayFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PlayFillIcon } from '@workindia/dsm';

const Example = () => {
  return <PlayFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PlayOutlineIcon, PauseIcon, StopIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
