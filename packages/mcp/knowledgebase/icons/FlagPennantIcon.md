## Component Name

FlagPennantIcon

## Description

Represents marking, flagging, reporting, or important items.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Flag

## Variant

Standard

## When to Use

- Flag or mark important items
- Report content features
- Priority indicators

## When Not to Use

- For navigation (use Arrow icons)
- For celebration (use ConfettiIcon)

## Import

```typescript
import { FlagPennantIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FlagPennantIcon } from '@workindia/dsm';

const Example = () => {
  return <FlagPennantIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

FlagPennantFillIcon, FlagPennantOutlineIcon, FlagPennantIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
