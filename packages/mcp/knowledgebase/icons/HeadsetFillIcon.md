## Component Name

HeadsetFillIcon

## Description

Represents audio support, customer service, or communication devices.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Headset

## Variant

Filled

## When to Use

- Customer support features
- Audio or music playback
- Communication tools

## When Not to Use

- For phone calls (use CallIcon)
- For video calls (use VideoCameraIcon)

## Import

```typescript
import { HeadsetFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HeadsetFillIcon } from '@workindia/dsm';

const Example = () => {
  return <HeadsetFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

HeadsetOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
