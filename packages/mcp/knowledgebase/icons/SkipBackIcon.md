## Component Name

SkipBackIcon

## Description

Represents skipping, jumping, or moving past content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Skip

## Variant

Standard

## When to Use

- Media skip controls
- Skip ahead or behind
- Skip signup or intro

## When Not to Use

- For fast forward (use FastForwardIcon)
- For rewind (use RewindIcon)

## Import

```typescript
import { SkipBackIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SkipBackIcon } from '@workindia/dsm';

const Example = () => {
  return <SkipBackIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SkipBackFillIcon, SkipBackOutlineIcon, SkipBackIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
