## Component Name

InfoIcon

## Description

Represents information, help, tooltips, or guidance.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Info

## Variant

Standard

## When to Use

- Information tooltips
- Help or guidance features
- Informational alerts

## When Not to Use

- For questions (use QuestionMarkIcon)
- For warnings (use WarningIcon)

## Import

```typescript
import { InfoIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { InfoIcon } from '@workindia/dsm';

const Example = () => {
  return <InfoIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

InfoFillIcon, InfoOutlineIcon, InfoIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
