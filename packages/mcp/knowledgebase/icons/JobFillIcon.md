## Component Name

JobFillIcon

## Description

Represents jobs, careers, employment, or work opportunities.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Job

## Variant

Filled

## When to Use

- Job listings
- Career features
- Employment information

## When Not to Use

- For work as in task (use BriefcaseIcon)
- As a person indicator

## Import

```typescript
import { JobFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { JobFillIcon } from '@workindia/dsm';

const Example = () => {
  return <JobFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

JobOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
