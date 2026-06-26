## Component Name

TextAlignRightIcon

## Description

Displays horizontal lines of text aligned to the right, representing right text alignment.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Right-aligning text
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAlignRightIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAlignRightIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextAlignRightIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextAlignRightFillIcon, TextAlignRightOutlineIcon, TextAlignRightIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
