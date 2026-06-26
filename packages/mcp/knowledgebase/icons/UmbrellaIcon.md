## Component Name

UmbrellaIcon

## Description

Represents insurance, protection, coverage, or shelter.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Umbrella

## Variant

Standard

## When to Use

- Insurance features
- Protection or coverage
- Safety or shelter

## When Not to Use

- For weather (use SunIcon or CloudIcon)
- As a generic protection icon

## Import

```typescript
import { UmbrellaIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UmbrellaIcon } from '@workindia/dsm';

const Example = () => {
  return <UmbrellaIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UmbrellaFillIcon, UmbrellaOutlineIcon, UmbrellaIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
