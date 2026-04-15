## Component Name

VideoCameraFillIcon

## Description

Represents photography, capturing images, or visual recording.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Camera

## Variant

Filled

## When to Use

- Camera or photo features
- Image capture functionality
- Profile picture upload

## When Not to Use

- For video calls (use VideoCameraIcon)
- For gallery features (use ImagesIcon)

## Import

```typescript
import { VideoCameraFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { VideoCameraFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <VideoCameraFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

VideoCameraOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
