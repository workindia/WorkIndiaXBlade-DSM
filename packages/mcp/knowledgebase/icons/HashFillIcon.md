## Component Name

HashFillIcon

## Description

Represents hashtags, topics, or categorization.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Hash

## Variant

Filled

## When to Use

- Hashtag features
- Topic or tag filtering
- Social media categorization

## When Not to Use

- For numbering
- As a pound symbol

## Import

```typescript
import { HashFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { HashFillIcon } from '@workindia/dsm';

const Example = () => {
  return <HashFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

HashOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
