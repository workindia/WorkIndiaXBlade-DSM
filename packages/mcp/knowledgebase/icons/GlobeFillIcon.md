## Component Name

GlobeFillIcon

## Description

Represents global, international, web, or internet-related content.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Globe

## Variant

Filled

## When to Use

- International or global features
- Website or web content
- Language selection

## When Not to Use

- For location (use MapPinIcon)
- For travel features

## Import

```typescript
import { GlobeFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GlobeFillIcon } from '@workindia/dsm';

const Example = () => {
  return <GlobeFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

GlobeOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
