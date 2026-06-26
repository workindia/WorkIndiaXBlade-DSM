## Component Name

CaretDoubleLeftIcon

## Description

Displays double chevrons pointing left, representing skip to beginning or go back.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Caret

## Variant

Standard

## When to Use

- Dropdown menus
- Accordion expand/collapse
- Tree view navigation

## When Not to Use

- For directional navigation (use Arrow icons)
- As loading indicators (use SpinnerIcon)

## Import

```typescript
import { CaretDoubleLeftIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CaretDoubleLeftIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <CaretDoubleLeftIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

CaretDoubleLeftFillIcon, CaretDoubleLeftOutlineIcon, CaretDoubleLeftIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
