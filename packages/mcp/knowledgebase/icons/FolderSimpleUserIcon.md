## Component Name

FolderSimpleUserIcon

## Description

Represents directories, categories, organized collections, or access control.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Folder

## Variant

Standard

## When to Use

- File management
- Category organization
- Protected folders

## When Not to Use

- For individual files (use FileIcon)
- As a generic container

## Import

```typescript
import { FolderSimpleUserIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FolderSimpleUserIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <FolderSimpleUserIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

FolderSimpleUserFillIcon, FolderSimpleUserOutlineIcon, FolderSimpleUserIcon, UsersIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
