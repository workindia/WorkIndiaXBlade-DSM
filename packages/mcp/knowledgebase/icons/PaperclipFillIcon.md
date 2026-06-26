## Component Name

PaperclipFillIcon

## Description

Represents attachments, files, or linking content.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Paperclip

## Variant

Filled

## When to Use

- File attachments
- Attachment indicators
- Link or connect items

## When Not to Use

- For actual paperclips
- As a decorative element

## Import

```typescript
import { PaperclipFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PaperclipFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <PaperclipFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

PaperclipOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
