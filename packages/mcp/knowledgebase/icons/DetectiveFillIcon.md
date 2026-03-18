## Component Name

DetectiveFillIcon

## Description

Represents search, investigation, or discovery features.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Detective

## Variant

Filled

## When to Use

- Search or investigation tools
- Detective or verification features
- Debug or audit tools

## When Not to Use

- For general search (use MagnifyingGlassIcon)
- As a spy or security indicator

## Import

```typescript
import { DetectiveFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { DetectiveFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <DetectiveFillIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

DetectiveOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
