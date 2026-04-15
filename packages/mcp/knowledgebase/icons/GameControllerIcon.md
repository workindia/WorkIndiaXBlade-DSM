## Component Name

GameControllerIcon

## Description

Displays a game controller, representing gaming, entertainment, or play features.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Gaming features
- Entertainment
- Play activities
- Gamification

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { GameControllerIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GameControllerIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <GameControllerIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

GameControllerFillIcon, GameControllerOutlineIcon, GameControllerIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
