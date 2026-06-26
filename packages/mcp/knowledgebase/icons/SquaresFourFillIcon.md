## Component Name

SquaresFourFillIcon

## Description

Displays four squares in a grid, representing grid view, dashboard, or app launcher.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Grid view toggle
- Dashboard layout
- App launcher
- Grid-based navigation

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { SquaresFourFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SquaresFourFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <SquaresFourFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

SquaresFourOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
