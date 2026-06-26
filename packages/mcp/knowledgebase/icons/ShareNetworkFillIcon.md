## Component Name

ShareNetworkFillIcon

## Description

Represents sharing, distribution, or network connections.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Share

## Variant

Filled

## When to Use

- Share functionality
- Social sharing
- Distribute or send to others

## When Not to Use

- For export (use ExportIcon)
- For send (use PaperPlaneIcon)

## Import

```typescript
import { ShareNetworkFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ShareNetworkFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ShareNetworkFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ShareNetworkOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
