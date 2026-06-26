## Component Name

LightbulbFillIcon

## Description

Represents ideas, insights, tips, or illumination.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Lightbulb

## Variant

Filled

## When to Use

- Ideas or suggestions
- Tips or hints
- Insight or discovery features

## When Not to Use

- For settings (use GearIcon)
- For actual lighting

## Import

```typescript
import { LightbulbFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { LightbulbFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <LightbulbFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

LightbulbOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
