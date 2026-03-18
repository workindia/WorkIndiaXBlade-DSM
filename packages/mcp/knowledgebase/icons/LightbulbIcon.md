## Component Name

LightbulbIcon

## Description

Represents ideas, insights, tips, or illumination.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Lightbulb

## Variant

Standard

## When to Use

- Ideas or suggestions
- Tips or hints
- Insight or discovery features

## When Not to Use

- For settings (use GearIcon)
- For actual lighting

## Import

```typescript
import { LightbulbIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { LightbulbIcon } from '@workindia/dsm';

const Example = () => {
  return <LightbulbIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

LightbulbFillIcon, LightbulbOutlineIcon, LightbulbIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
