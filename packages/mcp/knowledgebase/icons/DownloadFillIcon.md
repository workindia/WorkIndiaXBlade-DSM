## Component Name

DownloadFillIcon

## Description

Represents downloading, saving, or transferring data to local storage.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Download

## Variant

Filled

## When to Use

- Download actions
- Save to device features
- Export functionality

## When Not to Use

- For upload (use UploadIcon)
- For import (use ImportIcon)

## Import

```typescript
import { DownloadFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { DownloadFillIcon } from '@workindia/dsm';

const Example = () => {
  return <DownloadFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

DownloadOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
