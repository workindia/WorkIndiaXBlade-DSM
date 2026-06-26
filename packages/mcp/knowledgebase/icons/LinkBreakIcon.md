## Component Name

LinkBreakIcon

## Description

Represents links, connections, relationships, or sharing.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Link

## Variant

Standard

## When to Use

- Hyperlinks
- Connected accounts
- Share or connect actions

## When Not to Use

- For chains (use LinkIcon for actual chains)
- As a network indicator

## Import

```typescript
import { LinkBreakIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { LinkBreakIcon } from '@workindia/dsm';

const Example = () => {
  return <LinkBreakIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

LinkBreakFillIcon, LinkBreakOutlineIcon, LinkBreakIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
