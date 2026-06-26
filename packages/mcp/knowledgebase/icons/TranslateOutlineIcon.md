## Component Name

TranslateOutlineIcon

## Description

Represents translation, language, or internationalization.

Outline variants provide a lighter, more subtle appearance. Use outline icons when you need a refined look or when the icon is secondary to text.

## Category

Translate

## Variant

Outline

## When to Use

- Translation features
- Language selection
- Internationalization

## When Not to Use

- For global content (use GlobeIcon)
- For conversion features

## Import

```typescript
import { TranslateOutlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TranslateOutlineIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TranslateOutlineIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TranslateFillIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
