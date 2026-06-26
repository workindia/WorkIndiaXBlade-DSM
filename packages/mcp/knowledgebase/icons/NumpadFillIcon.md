## Component Name

NumpadFillIcon

## Description

Represents number input, keypad, or numeric entry.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Numpad

## Variant

Filled

## When to Use

- Number input fields
- PIN or OTP entry
- Numeric keypads

## When Not to Use

- For calculator features
- For keyboard input

## Import

```typescript
import { NumpadFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { NumpadFillIcon } from '@workindia/dsm';

const Example = () => {
  return <NumpadFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

NumpadOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
