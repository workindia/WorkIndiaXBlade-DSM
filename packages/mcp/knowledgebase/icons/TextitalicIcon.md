## Component Name

TextitalicIcon

## Description

Represents text italic formatting. The italic icon is used in rich text editors, document editors, or any text formatting interface to apply italic (slanted) styling to selected text.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Text Formatting

## Variant

Standard

## When to Use

- Rich text editors or document editors
- Text formatting toolbars
- Emphasizing text stylistically
- Any interface for applying italic formatting

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For bold text (use TextBIcon)

## Import

```typescript
import { TextitalicIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextitalicIcon } from '@workindia/dsm';

const Example = () => {
  return <TextitalicIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TextitalicFillIcon, TextitalicOutlineIcon, TextitalicIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
