## Component Name

ResumeFillIcon

## Description

Represents resumes, CVs, job applications, or career profiles.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Resume

## Variant

Filled

## When to Use

- Resume or CV features
- Job applications
- Career profiles

## When Not to Use

- For documents in general
- As a job listing icon

## Import

```typescript
import { ResumeFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { ResumeFillIcon } from '@workindia/dsm';

const Example = () => {
  return <ResumeFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

ResumeOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
