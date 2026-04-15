## Component Name

StickerIcon

## Description

Displays a sticker or emoji icon, representing stickers, emojis, or reactions.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Stickers and emojis
- Reactions
- Visual feedback
- Message attachments

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { StickerIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { StickerIcon } from '@workindia/dsm';

const Example = () => {
  return <StickerIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

StickerFillIcon, StickerOutlineIcon, StickerIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
