## Component Name

WarningFillIcon

## Description

Represents warnings, cautions, alerts, or potential issues.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Warning

## Variant

Filled

## When to Use

- Warning messages
- Caution indicators
- Alert or attention needs

## When Not to Use

- For errors (use XCircleIcon)
- For info (use InfoIcon)

## Import

```typescript
import { WarningFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WarningFillIcon } from '@workindia/dsm';

const Example = () => {
  return <WarningFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

WarningOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
