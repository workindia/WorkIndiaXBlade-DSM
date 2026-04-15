## Component Name

EyeFillIcon

## Description

Represents visibility, preview, showing/hiding, or observation.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Eye

## Variant

Filled

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
import { EyeFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { EyeFillIcon } from '@workindia/dsm';

const Example = () => {
  return <EyeFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

EyeOutlineIcon, EyeSlashIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
