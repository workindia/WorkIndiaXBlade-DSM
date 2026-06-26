## Component Name

PrinterIcon

## Description

Represents printing, print actions, or physical output.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Printer

## Variant

Standard

## When to Use

- Print functionality
- Print preview
- Physical output options

## When Not to Use

- As a publication icon
- For publishing features

## Import

```typescript
import { PrinterIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PrinterIcon } from '@workindia/dsm';

const Example = () => {
  return <PrinterIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PrinterFillIcon, PrinterOutlineIcon, PrinterIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
