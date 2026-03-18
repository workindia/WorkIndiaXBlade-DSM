## Component Name

ClipboardTextFillIcon

## Description

Represents text formatting, typography, or content editing.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Text

## Variant

Filled

## When to Use

- Text formatting tools
- Typography settings
- Content editing features

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { ClipboardTextFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ClipboardTextFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ClipboardTextFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ClipboardTextOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
