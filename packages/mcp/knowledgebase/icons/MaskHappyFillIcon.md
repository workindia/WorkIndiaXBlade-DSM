## Component Name

MaskHappyFillIcon

## Description

Represents emotions, avatars, facial expressions, or personas.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Mask

## Variant

Filled

## When to Use

- Avatar selection
- Mood or emotion features
- Persona selection

## When Not to Use

- For actual masks (use in healthcare)
- As a security indicator

## Import

```typescript
import { MaskHappyFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MaskHappyFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MaskHappyFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

MaskHappyOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
