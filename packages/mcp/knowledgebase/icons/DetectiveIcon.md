## Component Name

DetectiveIcon

## Description

Represents search, investigation, or discovery features.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Detective

## Variant

Standard

## When to Use

- Search or investigation tools
- Detective or verification features
- Debug or audit tools

## When Not to Use

- For general search (use MagnifyingGlassIcon)
- As a spy or security indicator

## Import

```typescript
import { DetectiveIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { DetectiveIcon } from '@workindia/dsm';

const Example = () => {
  return <DetectiveIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

DetectiveFillIcon, DetectiveOutlineIcon, DetectiveIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
