## Component Name

MicrophoneSlashIcon

## Description

Represents image editing, resizing, or trimming functionality.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Crop

## Variant

Standard

## When to Use

- Image editing features
- Photo manipulation tools
- Crop functionality

## When Not to Use

- For resize in UI (use Arrows icons)
- As a cutting indicator

## Import

```typescript
import { MicrophoneSlashIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { MicrophoneSlashIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <MicrophoneSlashIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

MicrophoneSlashFillIcon, MicrophoneSlashOutlineIcon, MicrophoneSlashIcon, MicrophoneIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
