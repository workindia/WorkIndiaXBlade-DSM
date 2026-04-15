## Component Name

WrenchIcon

## Description

Represents tools, maintenance, settings, or fixes.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Wrench

## Variant

Standard

## When to Use

- Tools or maintenance
- Settings or configuration
- Fix or repair actions

## When Not to Use

- For gear settings (use GearIcon)
- For construction

## Import

```typescript
import { WrenchIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { WrenchIcon } from '@workindia/dsm';

const Example = () => {
  return <WrenchIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

WrenchFillIcon, WrenchOutlineIcon, WrenchIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
