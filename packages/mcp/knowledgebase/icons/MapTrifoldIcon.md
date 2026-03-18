## Component Name

MapTrifoldIcon

## Description

Displays a folded map, representing maps, directions, or location-based services.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Maps and directions
- Location features
- Navigation - Geography features

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { MapTrifoldIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MapTrifoldIcon } from '@workindia/dsm';

const Example = () => {
  return <MapTrifoldIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

MapTrifoldFillIcon, MapTrifoldOutlineIcon, MapTrifoldIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
