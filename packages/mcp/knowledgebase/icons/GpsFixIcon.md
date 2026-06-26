## Component Name

GpsFixIcon

## Description

Represents location tracking, geolocation, or navigation.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Gps

## Variant

Standard

## When to Use

- Location services
- GPS tracking features
- Map or navigation tools

## When Not to Use

- For global content (use GlobeIcon)
- As a direction indicator

## Import

```typescript
import { GpsFixIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GpsFixIcon } from '@workindia/dsm';

const Example = () => {
  return <GpsFixIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

GpsFixFillIcon, GpsFixOutlineIcon, GpsFixIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
