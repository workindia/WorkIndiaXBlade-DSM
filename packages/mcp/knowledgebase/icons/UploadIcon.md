## Component Name

UploadIcon

## Description

Represents uploading, sending, or transferring to server.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Upload

## Variant

Standard

## When to Use

- Upload actions
- Import features
- Send to server

## When Not to Use

- For download (use DownloadIcon)
- For export

## Import

```typescript
import { UploadIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UploadIcon } from '@workindia/dsm';

const Example = () => {
  return <UploadIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UploadFillIcon, UploadOutlineIcon, UploadIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
