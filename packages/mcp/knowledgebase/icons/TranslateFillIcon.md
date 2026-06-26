## Component Name

TranslateFillIcon

## Description

Represents translation, language, or internationalization.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Translate

## Variant

Filled

## When to Use

- Translation features
- Language selection
- Internationalization

## When Not to Use

- For global content (use GlobeIcon)
- For conversion features

## Import

```typescript
import { TranslateFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { TranslateFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <TranslateFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

TranslateOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
