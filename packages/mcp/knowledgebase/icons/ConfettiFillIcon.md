## Component Name

ConfettiFillIcon

## Description

Represents celebrations, achievements, rewards, or special events.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Confetti

## Variant

Filled

## When to Use

- Celebration animations
- Achievement unlocked
- Special offer or promo indicators

## When Not to Use

- For general notifications (use BellIcon)
- As a decoration without context

## Import

```typescript
import { ConfettiFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ConfettiFillIcon } from '@workindia/dsm';

const Example = () => {
  return <ConfettiFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ConfettiOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
