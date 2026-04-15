## Component Name

TextSuperscriptFillIcon

## Description

Represents text superscript formatting. The filled superscript icon provides a more prominent appearance for applying superscript (raised) styling in rich text editors or document editors.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Text Formatting

## Variant

Filled

## When to Use

- Rich text editors or document editors (when emphasis is needed)
- Text formatting toolbars as primary action
- Applying exponents or raised text
- Footnote or reference markers
- Any interface for applying superscript formatting

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For subscript formatting (use TextSubscriptIcon)

## Import

```typescript
import { TextSuperscriptFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextSuperscriptFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextSuperscriptFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

TextSuperscriptOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
