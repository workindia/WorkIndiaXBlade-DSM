## Component Name

CallOutlineIcon

## Description

Represents phone calls, voice communication, or telephone functionality.

Outline variants provide a lighter, more subtle appearance. Use outline icons when you need a refined look or when the icon is secondary to text.

## Category

Call

## Variant

Outline

## When to Use

- Call-to-action buttons for phone
- Contact phone numbers
- Voice communication features

## When Not to Use

- For video calls (use VideoCameraIcon)
- For messaging (use EnvelopeIcon or ChatIcon)

## Import

```typescript
import { CallOutlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CallOutlineIcon } from '@workindia/dsm';

const Example = () => {
  return <CallOutlineIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CallFillIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
