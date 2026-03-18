## Component Name

UserSoundFillIcon

## Description

Represents user voice or audio features. The filled user sound icon provides a more prominent appearance for voice messages, voice notes, audio messages, or voice profile features. It is commonly used in messaging apps, voice recording features, or any context involving user-generated audio content.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

User / Audio

## Variant

Filled

## When to Use

- Voice message or voice note features in messaging apps (when emphasis is needed)
- Audio or voice recording capabilities as primary action
- Voice profile or audio greeting features
- User audio settings or preferences
- Push-to-talk or voice communication features

## When Not to Use

- For general user profiles (use UserIcon)
- For speaker or volume controls (use SpeakerIcon)
- For microphone input (use MicrophoneIcon)
- For music or media playback (use PlayIcon or HeadsetIcon)

## Import

```typescript
import { UserSoundFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserSoundFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <UserSoundFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

UserSoundIcon, MicrophoneIcon, HeadsetIcon, UserIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
