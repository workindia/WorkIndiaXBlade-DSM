## Component Name

ScrollIcon

## Description

Represents documents, records, history, or ancient texts.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Scroll

## Variant

Standard

## When to Use

- Historical documents
- Terms and conditions
- Legal or official records

## When Not to Use

- For modern documents (use FileTextIcon)
- For lists (use ListIcon)

## Import

```typescript
import { ScrollIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ScrollIcon } from '@workindia/dsm';

const Example = () => {
  return <ScrollIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ScrollFillIcon, ScrollOutlineIcon, ScrollIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
