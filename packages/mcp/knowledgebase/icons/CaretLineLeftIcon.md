## Component Name

CaretLineLeftIcon

## Description

Displays a chevron with a line pointing left, representing go back.

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
import { CaretLineLeftIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CaretLineLeftIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <CaretLineLeftIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

CaretLineLeftFillIcon, CaretLineLeftOutlineIcon, CaretLineLeftIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
