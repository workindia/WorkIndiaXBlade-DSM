## Component Name

TextAlignJustifyIcon

## Description

Displays horizontal lines of text aligned to both left and right edges (justified), representing justified text alignment.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Justifying text alignment (left and right edges aligned)
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAlignJustifyIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAlignJustifyIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextAlignJustifyIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextAlignJustifyFillIcon, TextAlignJustifyOutlineIcon, TextAlignJustifyIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
