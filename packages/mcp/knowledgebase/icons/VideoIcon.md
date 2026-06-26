## Component Name

VideoIcon

## Description

Represents video, cameras, recording, or visual media.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Video

## Variant

Standard

## When to Use

- Video features
- Video calls or meetings
- Recording indicators

## When Not to Use

- For camera (use CameraIcon)
- For playback (use PlayIcon)

## Import

```typescript
import { VideoIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { VideoIcon } from '@workindia/dsm';

const Example = () => {
  return <VideoIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

VideoFillIcon, VideoOutlineIcon, VideoIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
