## Component Name

MagnifyingGlassFillIcon

## Description

Displays a magnifying glass, representing search, find, or zoom in functionality.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Search functionality
- Find/filter content
- Zoom in
- Explore features

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { MagnifyingGlassFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MagnifyingGlassFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MagnifyingGlassFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

MagnifyingGlassOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
