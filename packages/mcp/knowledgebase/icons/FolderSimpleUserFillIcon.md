## Component Name

FolderSimpleUserFillIcon

## Description

Represents directories, categories, organized collections, or access control.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Folder

## Variant

Filled

## When to Use

- File management
- Category organization
- Protected folders

## When Not to Use

- For individual files (use FileIcon)
- As a generic container

## Import

```typescript
import { FolderSimpleUserFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FolderSimpleUserFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <FolderSimpleUserFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

FolderSimpleUserOutlineIcon, UsersIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
