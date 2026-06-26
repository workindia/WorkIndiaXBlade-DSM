## Component Name

TextboxIcon

## Description

Displays a rectangular text box shape, representing a text box or text area element in design tools or document editors.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Inserting a text box in design tools
- Representing text box UI elements
- Document editor toolbars

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextboxIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextboxIcon } from '@workindia/dsm';

const Example = () => {
  return <TextboxIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TextboxFillIcon, TextboxOutlineIcon, TextboxIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
