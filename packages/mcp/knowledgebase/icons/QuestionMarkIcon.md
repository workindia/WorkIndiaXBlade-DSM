## Component Name

QuestionMarkIcon

## Description

Displays a question mark, representing help, FAQ, or information request.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Help buttons
- FAQ sections
- Tooltips
- Support features

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { QuestionMarkIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { QuestionMarkIcon } from '@workindia/dsm';

const Example = () => {
  return <QuestionMarkIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

QuestionMarkFillIcon, QuestionMarkOutlineIcon, QuestionMarkIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
