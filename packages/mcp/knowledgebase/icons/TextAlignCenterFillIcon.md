## Component Name

TextAlignCenterFillIcon

## Description

Displays horizontal lines of text aligned to the center, representing center text alignment.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Centering text alignment
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAlignCenterFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAlignCenterFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TextAlignCenterFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

TextAlignCenterOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
