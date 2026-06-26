## Component Name

SkipBackFillIcon

## Description

Represents skipping, jumping, or moving past content.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Skip

## Variant

Filled

## When to Use

- Media skip controls
- Skip ahead or behind
- Skip signup or intro

## When Not to Use

- For fast forward (use FastForwardIcon)
- For rewind (use RewindIcon)

## Import

```typescript
import { SkipBackFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SkipBackFillIcon } from '@workindia/dsm';

const Example = () => {
  return <SkipBackFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SkipBackOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
