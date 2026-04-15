## Component Name

HeartStraightBreakFillIcon

## Description

Represents listening, audio feedback, or hearing-related features.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Ear

## Variant

Filled

## When to Use

- Audio feedback features
- Accessibility options
- Hearing or listening modes

## When Not to Use

- For notifications (use BellIcon)
- For sound settings (use SpeakerIcon)

## Import

```typescript
import { HeartStraightBreakFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HeartStraightBreakFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <HeartStraightBreakFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

HeartStraightBreakOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
