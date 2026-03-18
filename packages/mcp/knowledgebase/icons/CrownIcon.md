## Component Name

CrownIcon

## Description

Represents premium features, VIP status, or achievements.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Crown

## Variant

Standard

## When to Use

- Premium or VIP features
- Top-rated content
- Achievement badges

## When Not to Use

- For general rankings (use TrophyIcon)
- As a decorative element

## Import

```typescript
import { CrownIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CrownIcon } from '@workindia/dsm';

const Example = () => {
  return <CrownIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CrownFillIcon, CrownOutlineIcon, CrownIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
