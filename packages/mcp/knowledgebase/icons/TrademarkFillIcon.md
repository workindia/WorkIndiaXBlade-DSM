## Component Name

TrademarkFillIcon

## Description

Represents trademarks, brands, registered symbols.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Trademark

## Variant

Filled

## When to Use

- Brand or trademark indicators
- Registered marks
- Brand features

## When Not to Use

- For copyright (use CopyrightIcon)
- As a generic symbol

## Import

```typescript
import { TrademarkFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TrademarkFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TrademarkFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TrademarkOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
