## Component Name

TextBFillIcon

## Description

Displays the letter "B", representing bold text formatting.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Making selected text bold
- Text formatting toolbars
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextBFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextBFillIcon } from '@workindia/dsm';

const Example = () => {
  return <TextBFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TextBOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
