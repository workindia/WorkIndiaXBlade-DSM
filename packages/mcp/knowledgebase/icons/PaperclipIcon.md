## Component Name

PaperclipIcon

## Description

Represents attachments, files, or linking content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Paperclip

## Variant

Standard

## When to Use

- File attachments
- Attachment indicators
- Link or connect items

## When Not to Use

- For actual paperclips
- As a decorative element

## Import

```typescript
import { PaperclipIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PaperclipIcon } from '@workindia/dsm';

const Example = () => {
  return <PaperclipIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PaperclipFillIcon, PaperclipOutlineIcon, PaperclipIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
