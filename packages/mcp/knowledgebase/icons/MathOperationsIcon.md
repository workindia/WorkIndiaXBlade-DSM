## Component Name

MathOperationsIcon

## Description

Displays mathematical operation symbols, representing calculator, math, or arithmetic functions.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Calculator features
- Math operations
- Arithmetic functions
- Number input

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { MathOperationsIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MathOperationsIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MathOperationsIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

MathOperationsFillIcon, MathOperationsOutlineIcon, MathOperationsIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
