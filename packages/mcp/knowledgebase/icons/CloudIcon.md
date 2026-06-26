## Component Name

CloudIcon

## Description

Represents cloud storage, sync, internet, or online services.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Cloud

## Variant

Standard

## When to Use

- Cloud storage features
- Sync or upload status
- Online/offline indicators

## When Not to Use

- For weather apps
- As a generic internet icon (use GlobeIcon)

## Import

```typescript
import { CloudIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CloudIcon } from '@workindia/dsm';

const Example = () => {
  return <CloudIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CloudFillIcon, CloudOutlineIcon, CloudIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
