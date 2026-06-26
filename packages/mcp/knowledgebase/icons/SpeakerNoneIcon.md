## Component Name

SpeakerNoneIcon

## Description

Represents sound, audio, volume, or speaker output.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Speaker

## Variant

Standard

## When to Use

- Volume controls
- Audio features
- Sound settings

## When Not to Use

- For notifications (use BellIcon)
- For headphones (use HeadsetIcon)

## Import

```typescript
import { SpeakerNoneIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SpeakerNoneIcon } from '@workindia/dsm';

const Example = () => {
  return <SpeakerNoneIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SpeakerNoneFillIcon, SpeakerNoneOutlineIcon, SpeakerNoneIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
