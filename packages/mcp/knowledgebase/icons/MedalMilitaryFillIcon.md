## Component Name

MedalMilitaryFillIcon

## Description

Represents achievements, awards, accomplishments, or recognition.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Medal

## Variant

Filled

## When to Use

- Achievement features
- Awards or recognition
- Milestone indicators

## When Not to Use

- For competition rankings
- As a decorative element

## Import

```typescript
import { MedalMilitaryFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MedalMilitaryFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MedalMilitaryFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

MedalMilitaryOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
