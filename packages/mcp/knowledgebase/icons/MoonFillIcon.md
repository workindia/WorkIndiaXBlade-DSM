## Component Name

MoonFillIcon

## Description

Represents night mode, dark theme, or sleep features.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Moon

## Variant

Filled

## When to Use

- Dark mode toggle
- Night or evening features
- Sleep or rest modes

## When Not to Use

- For weather (use SunIcon)
- As a moon symbol

## Import

```typescript
import { MoonFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MoonFillIcon } from '@workindia/dsm';

const Example = () => {
  return <MoonFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

MoonOutlineIcon, SunIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
