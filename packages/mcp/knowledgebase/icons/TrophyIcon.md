## Component Name

TrophyIcon

## Description

Represents trophies, achievements, contests, or winners.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Trophy

## Variant

Standard

## When to Use

- Achievements or awards
- Contest or competition
- Leaderboards

## When Not to Use

- For medals (use MedalIcon)
- For rankings in general

## Import

```typescript
import { TrophyIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TrophyIcon } from '@workindia/dsm';

const Example = () => {
  return <TrophyIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TrophyFillIcon, TrophyOutlineIcon, TrophyIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
