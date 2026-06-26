## Component Name

FileMagnifyingGlassFillIcon

## Description

Represents documents, files, attachments, or data containers.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

File

## Variant

Filled

## When to Use

- File attachments
- Document management
- Downloadable content

## When Not to Use

- For folders (use FolderSimpleIcon)
- As a generic container

## Import

```typescript
import { FileMagnifyingGlassFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FileMagnifyingGlassFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <FileMagnifyingGlassFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

FileMagnifyingGlassOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
