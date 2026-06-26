## Component Name

EyesSlashIcon

## Description

Represents visibility, preview, showing/hiding, or observation.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Eye

## Variant

Standard

## When to Use

- Show/hide password
- Preview functionality
- Visibility toggles
- Watch or follow features

## When Not to Use

- For appearance settings (use SunIcon)
- As a person indicator

## Import

```typescript
import { EyesSlashIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { EyesSlashIcon } from '@workindia/dsm';

const Example = () => {
  return <EyesSlashIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

EyesSlashFillIcon, EyesSlashOutlineIcon, EyesSlashIcon, EyeSlashIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
