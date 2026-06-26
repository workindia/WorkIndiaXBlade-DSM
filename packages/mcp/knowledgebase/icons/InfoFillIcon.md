## Component Name

InfoFillIcon

## Description

Represents information, help, tooltips, or guidance.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Info

## Variant

Filled

## When to Use

- Information tooltips
- Help or guidance features
- Informational alerts

## When Not to Use

- For questions (use QuestionMarkIcon)
- For warnings (use WarningIcon)

## Import

```typescript
import { InfoFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { InfoFillIcon } from '@workindia/dsm';

const Example = () => {
  return <InfoFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

InfoOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
