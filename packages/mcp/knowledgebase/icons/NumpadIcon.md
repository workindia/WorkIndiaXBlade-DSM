## Component Name

NumpadIcon

## Description

Represents number input, keypad, or numeric entry.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Numpad

## Variant

Standard

## When to Use

- Number input fields
- PIN or OTP entry
- Numeric keypads

## When Not to Use

- For calculator features
- For keyboard input

## Import

```typescript
import { NumpadIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { NumpadIcon } from '@workindia/dsm';

const Example = () => {
  return <NumpadIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

NumpadFillIcon, NumpadOutlineIcon, NumpadIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
