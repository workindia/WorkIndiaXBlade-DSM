## Component Name

EarIcon

## Description

Represents listening, audio feedback, or hearing-related features.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Ear

## Variant

Standard

## When to Use

- Audio feedback features
- Accessibility options
- Hearing or listening modes

## When Not to Use

- For notifications (use BellIcon)
- For sound settings (use SpeakerIcon)

## Import

```typescript
import { EarIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { EarIcon } from '@workindia/dsm';

const Example = () => {
  return <EarIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

EarFillIcon, EarOutlineIcon, EarIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
