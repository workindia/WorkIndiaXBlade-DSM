## Component Name

ShareNetworkIcon

## Description

Represents sharing, distribution, or network connections.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Share

## Variant

Standard

## When to Use

- Share functionality
- Social sharing
- Distribute or send to others

## When Not to Use

- For export (use ExportIcon)
- For send (use PaperPlaneIcon)

## Import

```typescript
import { ShareNetworkIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ShareNetworkIcon } from '@workindia/dsm';

const Example = () => {
  return <ShareNetworkIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ShareNetworkFillIcon, ShareNetworkOutlineIcon, ShareNetworkIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
