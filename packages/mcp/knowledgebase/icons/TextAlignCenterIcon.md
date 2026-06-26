## Component Name

TextAlignCenterIcon

## Description

Displays horizontal lines of text aligned to the center, representing center text alignment.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Centering text alignment
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAlignCenterIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAlignCenterIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextAlignCenterIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextAlignCenterFillIcon, TextAlignCenterOutlineIcon, TextAlignCenterIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
