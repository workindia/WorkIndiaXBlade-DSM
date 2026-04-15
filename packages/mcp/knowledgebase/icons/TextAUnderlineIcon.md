## Component Name

TextAUnderlineIcon

## Description

Displays the letter "A" with an underline, representing text underline formatting.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Underlining selected text
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAUnderlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAUnderlineIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextAUnderlineIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextAUnderlineFillIcon, TextAUnderlineOutlineIcon, TextAUnderlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
