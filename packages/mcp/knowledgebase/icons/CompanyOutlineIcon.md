## Component Name

CompanyOutlineIcon

## Description

Represents businesses, enterprises, or organizational entities.

Outline variants provide a lighter, more subtle appearance. Use outline icons when you need a refined look or when the icon is secondary to text.

## Category

Company

## Variant

Outline

## When to Use

- Company profiles
- Business information
- Enterprise features

## When Not to Use

- For individual users (use UserIcon)
- For buildings (use BuildingIcon)

## Import

```typescript
import { CompanyOutlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CompanyOutlineIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <CompanyOutlineIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

CompanyFillIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
