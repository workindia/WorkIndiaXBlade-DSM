## Component Name

UploadFillIcon

## Description

Represents uploading, sending, or transferring to server.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Upload

## Variant

Filled

## When to Use

- Upload actions
- Import features
- Send to server

## When Not to Use

- For download (use DownloadIcon)
- For export

## Import

```typescript
import { UploadFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { UploadFillIcon } from '@workindia/dsm';

const Example = () => {
  return <UploadFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

UploadOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
