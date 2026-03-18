## Component Name

AlignLeftFillIcon

## Description

Displays rectangular elements aligned to the left, representing left alignment of content blocks or layout elements.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## When to Use

- Aligning elements to the left in a layout or document
- Layout formatting tools
- Content block alignment

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { AlignLeftFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { AlignLeftFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <AlignLeftFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

AlignLeftOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
