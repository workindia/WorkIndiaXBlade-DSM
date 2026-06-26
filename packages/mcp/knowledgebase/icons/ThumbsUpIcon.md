## Component Name

ThumbsUpIcon

## Description

Represents approval, disapproval, feedback, or reactions.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Thumbs

## Variant

Standard

## When to Use

- Like or dislike actions
- Approval or feedback
- Reactions to content

## When Not to Use

- For hand gestures in general
- As a generic hand icon

## Import

```typescript
import { ThumbsUpIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ThumbsUpIcon } from '@workindia/dsm';

const Example = () => {
  return <ThumbsUpIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ThumbsUpFillIcon, ThumbsUpOutlineIcon, ThumbsUpIcon, ThumbsDownIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
