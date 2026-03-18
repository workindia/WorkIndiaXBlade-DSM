## Component Name

ChartBarHorizontalIcon

## Description

Represents analytics, statistics, data visualization, or reports.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Chart

## Variant

Standard

## When to Use

- Analytics dashboards
- Data visualization features
- Statistics or report sections

## When Not to Use

- For general list views (use ListIcon)
- As a growth indicator (use TrendUpIcon)

## Import

```typescript
import { ChartBarHorizontalIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ChartBarHorizontalIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ChartBarHorizontalIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ChartBarHorizontalFillIcon, ChartBarHorizontalOutlineIcon, ChartBarHorizontalIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
