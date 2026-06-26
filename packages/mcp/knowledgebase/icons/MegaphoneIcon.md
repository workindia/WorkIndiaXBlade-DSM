## Component Name

MegaphoneIcon

## Description

Represents announcements, promotions, or loud communication.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Megaphone

## Variant

Standard

## When to Use

- Announcements
- Promotional features
- Marketing or alerts

## When Not to Use

- For notifications (use BellIcon)
- For speaker output (use SpeakerIcon)

## Import

```typescript
import { MegaphoneIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MegaphoneIcon } from '@workindia/dsm';

const Example = () => {
  return <MegaphoneIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

MegaphoneFillIcon, MegaphoneOutlineIcon, MegaphoneIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
