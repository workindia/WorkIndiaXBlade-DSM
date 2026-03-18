## Component Name

SquaresFourIcon

## Description

Displays four squares in a grid, representing grid view, dashboard, or app launcher.

Standard icons provide a balanced appearance suitable for most use cases.

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
import { SquaresFourIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SquaresFourIcon } from '@workindia/dsm';

const Example = () => {
  return <SquaresFourIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SquaresFourFillIcon, SquaresFourOutlineIcon, SquaresFourIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
