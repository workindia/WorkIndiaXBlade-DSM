## Component Name

TrademarkRegisteredIcon

## Description

Represents trademarks, brands, registered symbols.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Trademark

## Variant

Standard

## When to Use

- Brand or trademark indicators
- Registered marks
- Brand features

## When Not to Use

- For copyright (use CopyrightIcon)
- As a generic symbol

## Import

```typescript
import { TrademarkRegisteredIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TrademarkRegisteredIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TrademarkRegisteredIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

TrademarkRegisteredFillIcon, TrademarkRegisteredOutlineIcon, TrademarkRegisteredIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
