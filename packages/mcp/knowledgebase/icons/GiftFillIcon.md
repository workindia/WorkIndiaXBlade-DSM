## Component Name

GiftFillIcon

## Description

Represents gifts, rewards, presents, or promotional offers.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Gift

## Variant

Filled

## When to Use

- Gift features
- Rewards or loyalty programs
- Promotional offers

## When Not to Use

- For celebration (use ConfettiIcon)
- As a generic present

## Import

```typescript
import { GiftFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GiftFillIcon } from '@workindia/dsm';

const Example = () => {
  return <GiftFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

GiftOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
