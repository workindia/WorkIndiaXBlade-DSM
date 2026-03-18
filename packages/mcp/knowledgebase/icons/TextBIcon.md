## Component Name

TextBIcon

## Description

Displays the letter "B", representing bold text formatting.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Making selected text bold
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextBIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextBIcon } from '@workindia/dsm';

const Example = () => {
  return <TextBIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TextBFillIcon, TextBOutlineIcon, TextBIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
