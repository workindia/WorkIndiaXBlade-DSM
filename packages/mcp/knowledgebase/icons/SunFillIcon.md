## Component Name

SunFillIcon

## Description

Represents sun, daylight, bright mode, or weather.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Sun

## Variant

Filled

## When to Use

- Light mode or theme
- Daytime or weather
- Brightness controls

## When Not to Use

- For day/night toggle (use MoonIcon)
- As a weather icon

## Import

```typescript
import { SunFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { SunFillIcon } from '@workindia/dsm';

const Example = () => {
  return <SunFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

SunOutlineIcon, MoonIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
