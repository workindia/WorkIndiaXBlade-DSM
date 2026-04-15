## Component Name

ProhibitIcon

## Description

Represents prohibition, forbidden, restrictions, or blocking.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Prohibit

## Variant

Standard

## When to Use

- Disabled or prohibited actions
- Blocked content
- Restriction indicators

## When Not to Use

- For delete (use TrashIcon)
- For close (use XIcon)

## Import

```typescript
import { ProhibitIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ProhibitIcon } from '@workindia/dsm';

const Example = () => {
  return <ProhibitIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ProhibitFillIcon, ProhibitOutlineIcon, ProhibitIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
