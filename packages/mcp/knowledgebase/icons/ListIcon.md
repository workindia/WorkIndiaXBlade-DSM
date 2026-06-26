## Component Name

ListIcon

## Description

Represents lists, items, collections, or organized content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

List

## Variant

Standard

## When to Use

- List views
- Menu items
- Collection displays

## When Not to Use

- For charts (use ChartBarIcon)
- As a bullet point

## Import

```typescript
import { ListIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ListIcon } from '@workindia/dsm';

const Example = () => {
  return <ListIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ListFillIcon, ListOutlineIcon, ListIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
