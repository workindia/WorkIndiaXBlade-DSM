## Component Name

BellZIcon

## Description

Represents notifications, alerts, or awareness of new content.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Bell

## Variant

Standard

## When to Use

- Notification indicators
- Alert badges
- Message or update indicators

## When Not to Use

- For actual alarm functionality (use AlarmIcon)
- As a sound indicator (use SpeakerIcon)

## Import

```typescript
import { BellZIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BellZIcon } from '@workindia/dsm';

const Example = () => {
  return <BellZIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

BellZFillIcon, BellZOutlineIcon, BellZIcon, BellSlashIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
