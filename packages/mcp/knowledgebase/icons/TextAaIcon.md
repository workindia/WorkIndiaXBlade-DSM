## Component Name

TextAaIcon

## Description

Displays a large capital "A" with a small "a" beside it, representing text case conversion or change case functionality.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Changing text case (uppercase, lowercase, sentence case)
- Text transformation tools
- Rich text editors

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { TextAaIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TextAaIcon } from '@workindia/dsm';

const Example = () => {
  return <TextAaIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

TextAaFillIcon, TextAaOutlineIcon, TextAaIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
