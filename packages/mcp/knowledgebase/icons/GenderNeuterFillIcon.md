## Component Name

GenderNeuterFillIcon

## Description

Represents gender categories, identity, or demographic selection.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Gender

## Variant

Filled

## When to Use

- Gender selection in forms
- Profile demographics
- Filter by gender

## When Not to Use

- For general user icons
- As a decorative element

## Import

```typescript
import { GenderNeuterFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GenderNeuterFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <GenderNeuterFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

GenderNeuterOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
