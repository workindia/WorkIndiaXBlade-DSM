## Component Name

TextSubscriptFillIcon

## Description

Represents text subscript formatting. The filled subscript icon provides a more prominent appearance for applying subscript (lowered) styling in rich text editors or document editors.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Text Formatting

## Variant

Filled

## When to Use

- Rich text editors or document editors (when emphasis is needed)
- Text formatting toolbars as primary action
- Applying chemical formulas or indices
- Any interface for applying subscript formatting

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For superscript formatting (use TextSuperscriptIcon)

## Import

```typescript
import { TextSubscriptFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextSubscriptFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextSubscriptFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextSubscriptOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
