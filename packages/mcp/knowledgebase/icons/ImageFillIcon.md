## Component Name

ImageFillIcon

## Description

Represents images, photos, pictures, or visual media.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Image

## Variant

Filled

## When to Use

- Image galleries
- Photo upload or display
- Visual content features

## When Not to Use

- For files in general (use FileIcon)
- For documents (use FileDocIcon)

## Import

```typescript
import { ImageFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ImageFillIcon } from '@workindia/dsm';

const Example = () => {
  return <ImageFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ImageOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
