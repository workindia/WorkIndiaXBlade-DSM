## Component Name

MedalMilitaryIcon

## Description

Represents achievements, awards, accomplishments, or recognition.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Medal

## Variant

Standard

## When to Use

- Achievement features
- Awards or recognition
- Milestone indicators

## When Not to Use

- For competition rankings
- As a decorative element

## Import

```typescript
import { MedalMilitaryIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MedalMilitaryIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MedalMilitaryIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

MedalMilitaryFillIcon, MedalMilitaryOutlineIcon, MedalMilitaryIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
