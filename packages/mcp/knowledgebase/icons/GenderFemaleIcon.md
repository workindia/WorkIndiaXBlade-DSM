## Component Name

GenderFemaleIcon

## Description

Represents gender categories, identity, or demographic selection.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Gender

## Variant

Standard

## When to Use

- Gender selection in forms
- Profile demographics
- Filter by gender

## When Not to Use

- For general user icons
- As a decorative element

## Import

```typescript
import { GenderFemaleIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GenderFemaleIcon } from '@workindia/dsm';

const Example = () => {
  return <GenderFemaleIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

GenderFemaleFillIcon, GenderFemaleOutlineIcon, GenderFemaleIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
