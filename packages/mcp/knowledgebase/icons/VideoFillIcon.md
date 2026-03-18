## Component Name

VideoFillIcon

## Description

Represents video, cameras, recording, or visual media.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Video

## Variant

Filled

## When to Use

- Video features
- Video calls or meetings
- Recording indicators

## When Not to Use

- For camera (use CameraIcon)
- For playback (use PlayIcon)

## Import

```typescript
import { VideoFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { VideoFillIcon } from '@workindia/dsm';

const Example = () => {
  return <VideoFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

VideoOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
