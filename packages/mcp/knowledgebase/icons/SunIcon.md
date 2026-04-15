## Component Name

SunIcon

## Description

Represents sun, daylight, bright mode, or weather.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Sun

## Variant

Standard

## When to Use

- Light mode or theme
- Daytime or weather
- Brightness controls

## When Not to Use

- For day/night toggle (use MoonIcon)
- As a weather icon

## Import

```typescript
import { SunIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SunIcon } from '@workindia/dsm';

const Example = () => {
  return <SunIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SunFillIcon, SunOutlineIcon, SunIcon, MoonIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
