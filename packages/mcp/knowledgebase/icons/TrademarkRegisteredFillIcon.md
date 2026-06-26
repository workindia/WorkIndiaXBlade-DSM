## Component Name

TrademarkRegisteredFillIcon

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
import { TrademarkRegisteredFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TrademarkRegisteredFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TrademarkRegisteredFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

TrademarkRegisteredOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
