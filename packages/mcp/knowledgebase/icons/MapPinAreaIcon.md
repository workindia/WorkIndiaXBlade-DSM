## Component Name

MapPinAreaIcon

## Description

Displays a map pin with a circle, representing a location area, region, or place marker.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Location areas
- Region selection
- Place markers
- Zone identification

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { MapPinAreaIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MapPinAreaIcon } from '@workindia/dsm';

const Example = () => {
  return <MapPinAreaIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

MapPinAreaFillIcon, MapPinAreaOutlineIcon, MapPinAreaIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
