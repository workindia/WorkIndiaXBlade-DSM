## Component Name

TextUnderlineFillIcon

## Description

Represents text underline formatting. The filled text underline icon provides a more prominent appearance for underline formatting in rich text editors, document editors, or any text formatting interface.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Text Formatting

## Variant

Filled

## When to Use

- Rich text editors or document editors (when emphasis is needed)
- Text formatting toolbars as primary action
- Any interface for applying underline to text
- CMS or content management text editing

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For highlighting text (use MarkerIcon)

## Import

```typescript
import { TextUnderlineFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextUnderlineFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextUnderlineFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextUnderlineOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
