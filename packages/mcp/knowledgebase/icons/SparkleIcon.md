## Component Name

SparkleIcon

## Description

Represents sparkle, magic, premium, or special effects.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Sparkle

## Variant

Standard

## When to Use

- Premium or VIP features
- Special effects or highlights
- New or fresh content

## When Not to Use

- For stars (use StarIcon)
- As a generic shine effect

## Import

```typescript
import { SparkleIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SparkleIcon } from '@workindia/dsm';

const Example = () => {
  return <SparkleIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SparkleFillIcon, SparkleOutlineIcon, SparkleIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
