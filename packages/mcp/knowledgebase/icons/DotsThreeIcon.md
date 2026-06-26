## Component Name

DotsThreeIcon

## Description

Represents menus, more options, or overflow actions.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Dots

## Variant

Standard

## When to Use

- Context menus
- Overflow menus
- More options triggers

## When Not to Use

- As decorative elements
- For step indicators (use StepGroup)

## Import

```typescript
import { DotsThreeIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { DotsThreeIcon } from '@workindia/dsm';

const Example = () => {
  return <DotsThreeIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

DotsThreeFillIcon, DotsThreeOutlineIcon, DotsThreeIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
