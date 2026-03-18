## Component Name

FileXlsIcon

## Description

Represents documents, files, attachments, or data containers.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

File

## Variant

Standard

## When to Use

- File attachments
- Document management
- Downloadable content

## When Not to Use

- For folders (use FolderSimpleIcon)
- As a generic container

## Import

```typescript
import { FileXlsIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FileXlsIcon } from '@workindia/dsm';

const Example = () => {
  return <FileXlsIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

FileXlsFillIcon, FileXlsOutlineIcon, FileXlsIcon, CheckIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
