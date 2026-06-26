## Component Name

GlobeIcon

## Description

Represents global, international, web, or internet-related content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Globe

## Variant

Standard

## When to Use

- International or global features
- Website or web content
- Language selection

## When Not to Use

- For location (use MapPinIcon)
- For travel features

## Import

```typescript
import { GlobeIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GlobeIcon } from '@workindia/dsm';

const Example = () => {
  return <GlobeIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

GlobeFillIcon, GlobeOutlineIcon, GlobeIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
