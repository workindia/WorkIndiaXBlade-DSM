## Component Name

TextAUnderlineFillIcon

## Description

Displays the letter "A" with an underline, representing text underline formatting.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Underlining selected text
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAUnderlineFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAUnderlineFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextAUnderlineFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextAUnderlineOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
