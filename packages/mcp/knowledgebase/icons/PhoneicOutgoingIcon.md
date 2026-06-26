## Component Name

PhoneicOutgoingIcon

## Description

Represents phone calls, telecommunications, or contact.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Phone

## Variant

Standard

## When to Use

- Phone call features
- Contact phone numbers
- Telecommunications

## When Not to Use

- For video calls (use VideoCameraIcon)
- For mobile features

## Import

```typescript
import { PhoneicOutgoingIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PhoneicOutgoingIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <PhoneicOutgoingIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

PhoneicOutgoingFillIcon, PhoneicOutgoingOutlineIcon, PhoneicOutgoingIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
