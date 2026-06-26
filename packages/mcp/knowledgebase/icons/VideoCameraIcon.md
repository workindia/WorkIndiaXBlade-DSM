## Component Name

VideoCameraIcon

## Description

Represents photography, capturing images, or visual recording.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Camera

## Variant

Standard

## When to Use

- Camera or photo features
- Image capture functionality
- Profile picture upload

## When Not to Use

- For video calls (use VideoCameraIcon)
- For gallery features (use ImagesIcon)

## Import

```typescript
import { VideoCameraIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { VideoCameraIcon } from '@workindia/dsm';

const Example = () => {
  return <VideoCameraIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

VideoCameraFillIcon, VideoCameraOutlineIcon, VideoCameraIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
