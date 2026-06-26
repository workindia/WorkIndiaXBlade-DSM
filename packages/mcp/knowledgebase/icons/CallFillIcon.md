## Component Name

CallFillIcon

## Description

Represents phone calls, voice communication, or telephone functionality.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Call

## Variant

Filled

## When to Use

- Call-to-action buttons for phone
- Contact phone numbers
- Voice communication features

## When Not to Use

- For video calls (use VideoCameraIcon)
- For messaging (use EnvelopeIcon or ChatIcon)

## Import

```typescript
import { CallFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { CallFillIcon } from '@workindia/dsm';

const Example = () => {
  return <CallFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

CallOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
