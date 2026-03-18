## Component Name

MapPinPlusFillIcon

## Description

Add a new location, pin a place, or create a waypoint. Use for add location buttons, save places, or mark new destinations. Filled variants provide more emphasis.

## Category

Plus

## Variant

Filled

## When to Use

- Add or create actions
- Increase quantity
- Positive or yes responses

## When Not to Use

- For remove (use MinusIcon)
- For expand (use CaretDownIcon)

## Import

```typescript
import { MapPinPlusFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MapPinPlusFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MapPinPlusFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

MapPinPlusOutlineIcon, MinusIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
