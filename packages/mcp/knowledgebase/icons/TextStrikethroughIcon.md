## Component Name

TextStrikethroughIcon

## Description

Represents text strikethrough formatting. The strikethrough icon is used in rich text editors, document editors, or any text formatting interface to apply strikethrough (crossed-out) styling to selected text, commonly used to indicate deleted or obsolete content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Text Formatting

## Variant

Standard

## When to Use

- Rich text editors or document editors
- Text formatting toolbars
- Indicating deleted or obsolete content
- Showing price reductions or old prices
- Any interface for applying strikethrough formatting

## When Not to Use

- For general text display (use TextIcon)
- For text input fields (use TextInputIcon)
- For underlining text (use TextUnderlineIcon)

## Import

```typescript
import { TextStrikethroughIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextStrikethroughIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextStrikethroughIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TextStrikethroughFillIcon, TextStrikethroughOutlineIcon, TextStrikethroughIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
