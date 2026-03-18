## Component Name

JobOutlineIcon

## Description

Represents jobs, careers, employment, or work opportunities.

Outline variants provide a lighter, more subtle appearance. Use outline icons when you need a refined look or when the icon is secondary to text.

## Category

Job

## Variant

Outline

## When to Use

- Job listings
- Career features
- Employment information

## When Not to Use

- For work as in task (use BriefcaseIcon)
- As a person indicator

## Import

```typescript
import { JobOutlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { JobOutlineIcon } from '@workindia/dsm';

const Example = () => {
  return <JobOutlineIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

JobFillIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
