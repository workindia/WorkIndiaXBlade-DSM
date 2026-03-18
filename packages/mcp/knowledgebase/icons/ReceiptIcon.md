## Component Name

ReceiptIcon

## Description

Represents receipts, invoices, transactions, or records.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Receipt

## Variant

Standard

## When to Use

- Transaction receipts
- Invoice features
- Order records

## When Not to Use

- For tickets (use TicketIcon)
- For documents in general

## Import

```typescript
import { ReceiptIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ReceiptIcon } from '@workindia/dsm';

const Example = () => {
  return <ReceiptIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ReceiptFillIcon, ReceiptOutlineIcon, ReceiptIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
