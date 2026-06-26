## Component Name

PuzzlePieceIcon

## Description

Displays a puzzle piece, representing integrations, plugins, or add-ons.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Integrations
- Plugins
- Add-ons
- Extensions

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { PuzzlePieceIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PuzzlePieceIcon } from '@workindia/dsm';

const Example = () => {
  return <PuzzlePieceIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PuzzlePieceFillIcon, PuzzlePieceOutlineIcon, PuzzlePieceIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
