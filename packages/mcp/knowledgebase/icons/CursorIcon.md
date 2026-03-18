## Component Name

CursorIcon

## Description

Displays a mouse cursor pointer, representing click, select, or interaction.

Standard icons provide a balanced appearance suitable for most use cases.

## When to Use

- Click actions
- Selection tools
- Interaction prompts
- Pointer indicators

## When Not to Use

- When the icon meaning does not match your feature
- As a decorative element without proper context

## Import

```typescript
import { CursorIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CursorIcon } from '@workindia/dsm';

const Example = () => {
  return <CursorIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CursorFillIcon, CursorOutlineIcon, CursorIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
