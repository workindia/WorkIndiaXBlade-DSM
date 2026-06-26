## Component Name

HashIcon

## Description

Represents hashtags, topics, or categorization.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Hash

## Variant

Standard

## When to Use

- Hashtag features
- Topic or tag filtering
- Social media categorization

## When Not to Use

- For numbering
- As a pound symbol

## Import

```typescript
import { HashIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HashIcon } from '@workindia/dsm';

const Example = () => {
  return <HashIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

HashFillIcon, HashOutlineIcon, HashIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
