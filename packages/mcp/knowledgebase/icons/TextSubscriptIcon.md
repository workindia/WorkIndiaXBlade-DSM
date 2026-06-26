## Component Name

TextSubscriptIcon

## Description

Represents text subscript formatting. The subscript icon is used in rich text editors, document editors, or any text formatting interface to apply subscript (lowered) styling to selected text, commonly used for chemical formulas or mathematical indices.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Text Formatting

## Variant

Standard

## When to Use

- Rich text editors or document editors
- Text formatting toolbars for mathematical or scientific content
- Applying chemical formulas (e.g., H2O)
- Applying indices or lowered text
- Any interface for applying subscript formatting

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For superscript formatting (use TextSuperscriptIcon)

## Import

```typescript
import { TextSubscriptIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextSubscriptIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextSubscriptIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextSubscriptFillIcon, TextSubscriptOutlineIcon, TextSubscriptIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
