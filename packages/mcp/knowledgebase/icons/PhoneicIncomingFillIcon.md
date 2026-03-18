## Component Name

PhoneicIncomingFillIcon

## Description

Represents phone calls, telecommunications, or contact.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Phone

## Variant

Filled

## When to Use

- Phone call features
- Contact phone numbers
- Telecommunications

## When Not to Use

- For video calls (use VideoCameraIcon)
- For mobile features

## Import

```typescript
import { PhoneicIncomingFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { PhoneicIncomingFillIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <PhoneicIncomingFillIcon
      size="medium"
      color="surface.icon.primary.normal"
    />
  );
};
```

## Related Icons

PhoneicIncomingOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
