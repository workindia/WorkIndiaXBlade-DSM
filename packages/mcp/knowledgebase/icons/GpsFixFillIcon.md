## Component Name

GpsFixFillIcon

## Description

Represents location tracking, geolocation, or navigation.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Gps

## Variant

Filled

## When to Use

- Location services
- GPS tracking features
- Map or navigation tools

## When Not to Use

- For global content (use GlobeIcon)
- As a direction indicator

## Import

```typescript
import { GpsFixFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GpsFixFillIcon } from '@workindia/dsm';

const Example = () => {
  return <GpsFixFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

GpsFixOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
