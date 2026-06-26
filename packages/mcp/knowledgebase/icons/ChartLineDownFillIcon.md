## Component Name

ChartLineDownFillIcon

## Description

Represents analytics, statistics, data visualization, or reports.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Chart

## Variant

Filled

## When to Use

- Analytics dashboards
- Data visualization features
- Statistics or report sections

## When Not to Use

- For general list views (use ListIcon)
- As a growth indicator (use TrendUpIcon)

## Import

```typescript
import { ChartLineDownFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ChartLineDownFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ChartLineDownFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ChartLineDownOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
