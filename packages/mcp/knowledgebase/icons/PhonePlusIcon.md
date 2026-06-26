## Component Name

PhonePlusIcon

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
import { PhonePlusIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PhonePlusIcon } from '@workindia/dsm';

const Example = () => {
  return <PhonePlusIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

PhonePlusFillIcon, PhonePlusOutlineIcon, PhonePlusIcon, MinusIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
