## Component Name

ChatCenteredTextIcon

## Description

Represents text formatting, typography, or content editing.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Text

## Variant

Standard

## When to Use

- Text formatting tools
- Typography settings
- Content editing features

## When Not to Use

- For text input (use TextInputIcon)
- For documents (use FileTextIcon)

## Import

```typescript
import { ChatCenteredTextIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ChatCenteredTextIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ChatCenteredTextIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ChatCenteredTextFillIcon, ChatCenteredTextOutlineIcon, ChatCenteredTextIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
