## Component Name

PrinterFillIcon

## Description

Represents printing, print actions, or physical output.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Printer

## Variant

Filled

## When to Use

- Print functionality
- Print preview
- Physical output options

## When Not to Use

- As a publication icon
- For publishing features

## Import

```typescript
import { PrinterFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PrinterFillIcon } from '@workindia/dsm';

const Example = () => {
  return <PrinterFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PrinterOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
