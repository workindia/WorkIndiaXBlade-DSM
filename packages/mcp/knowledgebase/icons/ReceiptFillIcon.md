## Component Name

ReceiptFillIcon

## Description

Represents receipts, invoices, transactions, or records.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Receipt

## Variant

Filled

## When to Use

- Transaction receipts
- Invoice features
- Order records

## When Not to Use

- For tickets (use TicketIcon)
- For documents in general

## Import

```typescript
import { ReceiptFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ReceiptFillIcon } from '@workindia/dsm';

const Example = () => {
  return <ReceiptFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ReceiptOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
