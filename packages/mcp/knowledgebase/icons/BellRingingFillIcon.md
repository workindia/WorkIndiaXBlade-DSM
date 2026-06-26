## Component Name

BellRingingFillIcon

## Description

Represents notifications, alerts, or awareness of new content.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Bell

## Variant

Filled

## When to Use

- Notification indicators
- Alert badges
- Message or update indicators

## When Not to Use

- For actual alarm functionality (use AlarmIcon)
- As a sound indicator (use SpeakerIcon)

## Import

```typescript
import { BellRingingFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { BellRingingFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <BellRingingFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

BellRingingOutlineIcon, BellSlashIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
