## Component Name

SparkleFillIcon

## Description

Represents sparkle, magic, premium, or special effects.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Sparkle

## Variant

Filled

## When to Use

- Premium or VIP features
- Special effects or highlights
- New or fresh content

## When Not to Use

- For stars (use StarIcon)
- As a generic shine effect

## Import

```typescript
import { SparkleFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SparkleFillIcon } from '@workindia/dsm';

const Example = () => {
  return <SparkleFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SparkleOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
