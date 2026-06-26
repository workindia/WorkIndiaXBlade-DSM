## Component Name

TextboxFillIcon

## Description

Displays a rectangular text box shape, representing a text box or text area element in design tools or document editors.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Inserting a text box in design tools
- Representing text box UI elements
- Document editor toolbars

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextboxFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextboxFillIcon } from '@workindia/dsm';

const Example = () => {
  return <TextboxFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TextboxOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
