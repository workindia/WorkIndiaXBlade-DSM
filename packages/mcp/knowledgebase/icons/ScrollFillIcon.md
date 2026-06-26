## Component Name

ScrollFillIcon

## Description

Represents documents, records, history, or ancient texts.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Scroll

## Variant

Filled

## When to Use

- Historical documents
- Terms and conditions
- Legal or official records

## When Not to Use

- For modern documents (use FileTextIcon)
- For lists (use ListIcon)

## Import

```typescript
import { ScrollFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ScrollFillIcon } from '@workindia/dsm';

const Example = () => {
  return <ScrollFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ScrollOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
