## Component Name

PaperPlaneTiltIcon

## Description

Displays a paper plane, representing send, message, or share functionality.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Send message
- Share content
- Submit forms
- Email actions

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { PaperPlaneTiltIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PaperPlaneTiltIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <PaperPlaneTiltIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

PaperPlaneTiltFillIcon, PaperPlaneTiltOutlineIcon, PaperPlaneTiltIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
