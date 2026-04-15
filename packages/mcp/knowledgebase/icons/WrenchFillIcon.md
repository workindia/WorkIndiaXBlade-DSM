## Component Name

WrenchFillIcon

## Description

Represents tools, maintenance, settings, or fixes.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Wrench

## Variant

Filled

## When to Use

- Tools or maintenance
- Settings or configuration
- Fix or repair actions

## When Not to Use

- For gear settings (use GearIcon)
- For construction

## Import

```typescript
import { WrenchFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WrenchFillIcon } from '@workindia/dsm';

const Example = () => {
  return <WrenchFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

WrenchOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
