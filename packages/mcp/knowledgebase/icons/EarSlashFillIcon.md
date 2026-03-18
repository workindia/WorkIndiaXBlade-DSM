## Component Name

EarSlashFillIcon

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
import { EarSlashFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { EarSlashFillIcon } from '@workindia/dsm';

const Example = () => {
  return <EarSlashFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

EarSlashOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
