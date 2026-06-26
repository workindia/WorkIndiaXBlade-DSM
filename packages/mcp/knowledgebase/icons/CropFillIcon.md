## Component Name

CropFillIcon

## Description

Represents image editing, resizing, or trimming functionality.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Crop

## Variant

Filled

## When to Use

- Image editing features
- Photo manipulation tools
- Crop functionality

## When Not to Use

- For resize in UI (use Arrows icons)
- As a cutting indicator

## Import

```typescript
import { CropFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CropFillIcon } from '@workindia/dsm';

const Example = () => {
  return <CropFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CropOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
