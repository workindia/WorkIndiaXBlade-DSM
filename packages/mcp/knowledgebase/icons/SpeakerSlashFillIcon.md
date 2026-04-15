## Component Name

SpeakerSlashFillIcon

## Description

Represents sound, audio, volume, or speaker output.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Speaker

## Variant

Filled

## When to Use

- Volume controls
- Audio features
- Sound settings

## When Not to Use

- For notifications (use BellIcon)
- For headphones (use HeadsetIcon)

## Import

```typescript
import { SpeakerSlashFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SpeakerSlashFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <SpeakerSlashFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

SpeakerSlashOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
