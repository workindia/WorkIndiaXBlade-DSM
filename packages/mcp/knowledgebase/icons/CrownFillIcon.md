## Component Name

CrownFillIcon

## Description

Represents premium features, VIP status, or achievements.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Crown

## Variant

Filled

## When to Use

- Premium or VIP features
- Top-rated content
- Achievement badges

## When Not to Use

- For general rankings (use TrophyIcon)
- As a decorative element

## Import

```typescript
import { CrownFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CrownFillIcon } from '@workindia/dsm';

const Example = () => {
  return <CrownFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CrownOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
