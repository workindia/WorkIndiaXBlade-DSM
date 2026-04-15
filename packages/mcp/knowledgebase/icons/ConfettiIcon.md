## Component Name

ConfettiIcon

## Description

Represents celebrations, achievements, rewards, or special events.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Confetti

## Variant

Standard

## When to Use

- Celebration animations
- Achievement unlocked
- Special offer or promo indicators

## When Not to Use

- For general notifications (use BellIcon)
- As a decoration without context

## Import

```typescript
import { ConfettiIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ConfettiIcon } from '@workindia/dsm';

const Example = () => {
  return <ConfettiIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ConfettiFillIcon, ConfettiOutlineIcon, ConfettiIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
