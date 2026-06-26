## Component Name

UserSoundIcon

## Description

Represents user voice or audio features. The user sound icon indicates voice messages, voice notes, audio messages, or voice profile features. It is commonly used in messaging apps, voice recording features, or any context involving user-generated audio content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

User / Audio

## Variant

Standard

## When to Use

- Voice message or voice note features in messaging apps
- Audio or voice recording capabilities
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
import { UserSoundIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UserSoundIcon } from '@workindia/dsm';

const Example = () => {
  return <UserSoundIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UserSoundFillIcon, MicrophoneIcon, HeadsetIcon, UserIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
