## Component Name

StarHalfFillIcon

## Description

Represents stars, ratings, favorites, or important markers.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Star

## Variant

Filled

## When to Use

- Rating systems
- Favorites or bookmarks
- Important or featured items

## When Not to Use

- For sparkle effects (use SparkleIcon)
- As a decorative element

## Import

```typescript
import { StarHalfFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { StarHalfFillIcon } from '@workindia/dsm';

const Example = () => {
  return <StarHalfFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

StarHalfOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
