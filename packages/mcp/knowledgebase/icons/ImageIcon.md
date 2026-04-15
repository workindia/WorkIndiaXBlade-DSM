## Component Name

ImageIcon

## Description

Represents images, photos, pictures, or visual media.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Image

## Variant

Standard

## When to Use

- Image galleries
- Photo upload or display
- Visual content features

## When Not to Use

- For files in general (use FileIcon)
- For documents (use FileDocIcon)

## Import

```typescript
import { ImageIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ImageIcon } from '@workindia/dsm';

const Example = () => {
  return <ImageIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ImageFillIcon, ImageOutlineIcon, ImageIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
