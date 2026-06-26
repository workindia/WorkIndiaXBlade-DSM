## Component Name

ProhibitFillIcon

## Description

Represents prohibition, forbidden, restrictions, or blocking.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Prohibit

## Variant

Filled

## When to Use

- Disabled or prohibited actions
- Blocked content
- Restriction indicators

## When Not to Use

- For delete (use TrashIcon)
- For close (use XIcon)

## Import

```typescript
import { ProhibitFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ProhibitFillIcon } from '@workindia/dsm';

const Example = () => {
  return <ProhibitFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ProhibitOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
