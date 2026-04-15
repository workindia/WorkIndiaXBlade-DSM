## Component Name

MoonIcon

## Description

Represents night mode, dark theme, or sleep features.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Moon

## Variant

Standard

## When to Use

- Dark mode toggle
- Night or evening features
- Sleep or rest modes

## When Not to Use

- For weather (use SunIcon)
- As a moon symbol

## Import

```typescript
import { MoonIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MoonIcon } from '@workindia/dsm';

const Example = () => {
  return <MoonIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

MoonFillIcon, MoonOutlineIcon, MoonIcon, SunIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
