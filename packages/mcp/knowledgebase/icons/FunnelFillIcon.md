## Component Name

FunnelFillIcon

## Description

Represents filtering, sorting, or narrowing down content.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Funnel

## Variant

Filled

## When to Use

- Filter functionality
- Search refinement
- Data filtering options

## When Not to Use

- For process flow (use Arrow icons)
- As a funnel chart (use ChartPieIcon)

## Import

```typescript
import { FunnelFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FunnelFillIcon } from '@workindia/dsm';

const Example = () => {
  return <FunnelFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

FunnelOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
