## Component Name

FlagPennantFillIcon

## Description

Represents marking, flagging, reporting, or important items.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Flag

## Variant

Filled

## When to Use

- Flag or mark important items
- Report content features
- Priority indicators

## When Not to Use

- For navigation (use Arrow icons)
- For celebration (use ConfettiIcon)

## Import

```typescript
import { FlagPennantFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { FlagPennantFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <FlagPennantFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

FlagPennantOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
