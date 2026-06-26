## Component Name

TextColumnsFillIcon

## Description

Represents text columns or column layout. The filled text columns icon provides a more prominent appearance for applying column-based text layout in document editors or page layout tools.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Text Formatting

## Variant

Filled

## When to Use

- Document editors or page layout tools (when emphasis is needed)
- Text formatting toolbars as primary action
- Applying multi-column text formatting
- Newspaper or magazine layout features
- Any interface for applying column-based layout

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For table features (use TableIcon)

## Import

```typescript
import { TextColumnsFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextColumnsFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextColumnsFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextColumnsOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
