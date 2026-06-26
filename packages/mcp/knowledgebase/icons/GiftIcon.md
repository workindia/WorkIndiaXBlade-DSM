## Component Name

GiftIcon

## Description

Represents gifts, rewards, presents, or promotional offers.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Gift

## Variant

Standard

## When to Use

- Gift features
- Rewards or loyalty programs
- Promotional offers

## When Not to Use

- For celebration (use ConfettiIcon)
- As a generic present

## Import

```typescript
import { GiftIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { GiftIcon } from '@workindia/dsm';

const Example = () => {
  return <GiftIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

GiftFillIcon, GiftOutlineIcon, GiftIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
