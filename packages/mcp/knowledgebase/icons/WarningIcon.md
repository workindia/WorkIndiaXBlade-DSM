## Component Name

WarningIcon

## Description

Represents warnings, cautions, alerts, or potential issues.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Warning

## Variant

Standard

## When to Use

- Warning messages
- Caution indicators
- Alert or attention needs

## When Not to Use

- For errors (use XCircleIcon)
- For info (use InfoIcon)

## Import

```typescript
import { WarningIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WarningIcon } from '@workindia/dsm';

const Example = () => {
  return <WarningIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

WarningFillIcon, WarningOutlineIcon, WarningIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
