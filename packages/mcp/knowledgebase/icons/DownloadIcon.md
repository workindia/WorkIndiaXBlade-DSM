## Component Name

DownloadIcon

## Description

Represents downloading, saving, or transferring data to local storage.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Download

## Variant

Standard

## When to Use

- Download actions
- Save to device features
- Export functionality

## When Not to Use

- For upload (use UploadIcon)
- For import (use ImportIcon)

## Import

```typescript
import { DownloadIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { DownloadIcon } from '@workindia/dsm';

const Example = () => {
  return <DownloadIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

DownloadFillIcon, DownloadOutlineIcon, DownloadIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
