## Component Name

MaskSadIcon

## Description

Represents emotions, avatars, facial expressions, or personas.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Mask

## Variant

Standard

## When to Use

- Avatar selection
- Mood or emotion features
- Persona selection

## When Not to Use

- For actual masks (use in healthcare)
- As a security indicator

## Import

```typescript
import { MaskSadIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MaskSadIcon } from '@workindia/dsm';

const Example = () => {
  return <MaskSadIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

MaskSadFillIcon, MaskSadOutlineIcon, MaskSadIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
