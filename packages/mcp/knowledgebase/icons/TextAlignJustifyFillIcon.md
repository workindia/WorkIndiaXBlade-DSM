## Component Name

TextAlignJustifyFillIcon

## Description

Displays horizontal lines of text aligned to both left and right edges (justified), representing justified text alignment.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Justifying text alignment (left and right edges aligned)
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAlignJustifyFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAlignJustifyFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextAlignJustifyFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

TextAlignJustifyOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
