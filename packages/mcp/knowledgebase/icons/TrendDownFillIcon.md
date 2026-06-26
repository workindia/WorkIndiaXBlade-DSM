## Component Name

TrendDownFillIcon

## Description

Represents trends, growth, decline, or analytics.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Trend

## Variant

Filled

## When to Use

- Trend indicators
- Analytics or statistics
- Growth or decline features

## When Not to Use

- For arrows in general
- For navigation

## Import

```typescript
import { TrendDownFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TrendDownFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TrendDownFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TrendDownOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
