## Component Name

ResumeOutlineIcon

## Description

Represents resumes, CVs, job applications, or career profiles.

Outline variants provide a lighter, more subtle appearance. Use outline icons when you need a refined look or when the icon is secondary to text.

## Category

Resume

## Variant

Outline

## When to Use

- Resume or CV features
- Job applications
- Career profiles

## When Not to Use

- For documents in general
- As a job listing icon

## Import

```typescript
import { ResumeOutlineIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ResumeOutlineIcon } from '@workindia/dsm';

const Example = () => {
  return (
    <ResumeOutlineIcon size="medium" color="surface.icon.primary.normal" />
  );
};
```

## Related Icons

ResumeFillIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
