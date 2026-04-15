## Component Name

TextColumnsIcon

## Description

Represents text columns or column layout. The text columns icon is used in document editors, page layout tools, or any text formatting interface to apply column-based text layout, commonly used in newspapers, magazines, or multi-column document formatting.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Text Formatting

## Variant

Standard

## When to Use

- Document editors or page layout tools
- Text formatting toolbars for column layouts
- Applying multi-column text formatting
- Newspaper or magazine layout features
- Any interface for applying column-based layout

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For table features (use TableIcon)

## Import

```typescript
import { TextColumnsIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextColumnsIcon } from '@workindia/dsm';

const Example = () => {
  return <TextColumnsIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TextColumnsFillIcon, TextColumnsOutlineIcon, TextColumnsIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
