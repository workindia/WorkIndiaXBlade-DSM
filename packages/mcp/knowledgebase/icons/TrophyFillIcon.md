## Component Name

TrophyFillIcon

## Description

Represents trophies, achievements, contests, or winners.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Trophy

## Variant

Filled

## When to Use

- Achievements or awards
- Contest or competition
- Leaderboards

## When Not to Use

- For medals (use MedalIcon)
- For rankings in general

## Import

```typescript
import { TrophyFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TrophyFillIcon } from '@workindia/dsm';

const Example = () => {
  return <TrophyFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TrophyOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
