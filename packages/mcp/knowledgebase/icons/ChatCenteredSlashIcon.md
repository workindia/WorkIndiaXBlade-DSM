## Component Name

ChatCenteredSlashIcon

## Description

Displays a crossed-out chat bubble, representing disabled chat, chat unavailable, or turn off messaging.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Disabled chat
- Chat unavailable
- Turn off messaging
- Mute chat

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { ChatCenteredSlashIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ChatCenteredSlashIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ChatCenteredSlashIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ChatCenteredSlashFillIcon, ChatCenteredSlashOutlineIcon, ChatCenteredSlashIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
