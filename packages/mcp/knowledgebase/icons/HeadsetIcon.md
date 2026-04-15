## Component Name

HeadsetIcon

## Description

Represents audio support, customer service, or communication devices.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Headset

## Variant

Standard

## When to Use

- Customer support features
- Audio or music playback
- Communication tools

## When Not to Use

- For phone calls (use CallIcon)
- For video calls (use VideoCameraIcon)

## Import

```typescript
import { HeadsetIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HeadsetIcon } from '@workindia/dsm';

const Example = () => {
  return <HeadsetIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

HeadsetFillIcon, HeadsetOutlineIcon, HeadsetIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
