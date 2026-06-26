## Component Name

TextAaFillIcon

## Description

Displays a large capital "A" with a small "a" beside it, representing text case conversion or change case functionality.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Changing text case (uppercase, lowercase, sentence case)
- Text transformation tools
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAaFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAaFillIcon } from '@workindia/dsm';

const Example = () => {
  return <TextAaFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TextAaOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
