## Component Name

RocketIcon

## Description

Represents launch, speed, growth, or new beginnings.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Rocket

## Variant

Standard

## When to Use

- Launch or start features
- Fast or quick actions
- Growth or success indicators

## When Not to Use

- For space or NASA features
- As a generic speed icon

## Import

```typescript
import { RocketIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { RocketIcon } from '@workindia/dsm';

const Example = () => {
  return <RocketIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

RocketFillIcon, RocketOutlineIcon, RocketIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
