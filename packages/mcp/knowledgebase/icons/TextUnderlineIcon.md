## Component Name

TextUnderlineIcon

## Description

Represents text underline formatting. The text underline icon is used in rich text editors, document editors, or any text formatting interface to apply underline styling to selected text.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Text Formatting

## Variant

Standard

## When to Use

- Rich text editors or document editors
- Text formatting toolbars
- Any interface for applying underline to text
- CMS or content management text editing

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For highlighting text (use MarkerIcon)

## Import

```typescript
import { TextUnderlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextUnderlineIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextUnderlineIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextUnderlineFillIcon, TextUnderlineOutlineIcon, TextUnderlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
