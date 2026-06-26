## Component Name

BinocularsIcon

## Description

Displays binoculars, representing explore, discover, or search functionality.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Explore features
- Discover content
- Search functionality
- Observation tools

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { BinocularsIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BinocularsIcon } from '@workindia/dsm';

const Example = () => {
  return <BinocularsIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BinocularsFillIcon, BinocularsOutlineIcon, BinocularsIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
