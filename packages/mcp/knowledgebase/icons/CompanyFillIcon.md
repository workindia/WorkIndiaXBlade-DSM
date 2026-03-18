## Component Name

CompanyFillIcon

## Description

Represents businesses, enterprises, or organizational entities.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Company

## Variant

Filled

## When to Use

- Company profiles
- Business information
- Enterprise features

## When Not to Use

- For individual users (use UserIcon)
- For buildings (use BuildingIcon)

## Import

```typescript
import { CompanyFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CompanyFillIcon } from '@workindia/dsm';

const Example = () => {
  return <CompanyFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CompanyOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
