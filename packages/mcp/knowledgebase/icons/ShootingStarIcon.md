## Component Name

ShootingStarIcon

## Description

Represents stars, ratings, favorites, or important markers.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Star

## Variant

Standard

## When to Use

- Rating systems
- Favorites or bookmarks
- Important or featured items

## When Not to Use

- For sparkle effects (use SparkleIcon)
- As a decorative element

## Import

```typescript
import { ShootingStarIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ShootingStarIcon } from '@workindia/dsm';

const Example = () => {
  return <ShootingStarIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ShootingStarFillIcon, ShootingStarOutlineIcon, ShootingStarIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
