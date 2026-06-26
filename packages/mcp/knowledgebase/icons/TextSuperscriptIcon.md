## Component Name

TextSuperscriptIcon

## Description

Represents text superscript formatting. The superscript icon is used in rich text editors, document editors, or any text formatting interface to apply superscript (raised) styling to selected text, commonly used for mathematical exponents or footnote references.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Text Formatting

## Variant

Standard

## When to Use

- Rich text editors or document editors
- Text formatting toolbars for mathematical or scientific content
- Applying exponents or raised text
- Footnote or reference markers
- Any interface for applying superscript formatting

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For subscript formatting (use TextSubscriptIcon)

## Import

```typescript
import { TextSuperscriptIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextSuperscriptIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextSuperscriptIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextSuperscriptFillIcon, TextSuperscriptOutlineIcon, TextSuperscriptIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
