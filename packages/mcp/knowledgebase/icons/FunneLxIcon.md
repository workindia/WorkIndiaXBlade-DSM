## Component Name

FunneLxIcon

## Description

Represents filtering, sorting, or narrowing down content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Funnel

## Variant

Standard

## When to Use

- Filter functionality
- Search refinement
- Data filtering options

## When Not to Use

- For process flow (use Arrow icons)
- As a funnel chart (use ChartPieIcon)

## Import

```typescript
import { FunneLxIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FunneLxIcon } from '@workindia/dsm';

const Example = () => {
  return <FunneLxIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

FunneLxFillIcon, FunneLxOutlineIcon, FunneLxIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
