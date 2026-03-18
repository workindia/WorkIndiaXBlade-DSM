## Component Name

StudentIcon

## Description

Represents students, learning, education, or trainees.

Standard icons provide a balanced appearance suitable for most use cases.

## Category

Student

## Variant

Standard

## When to Use

- Student features
- Learning or training
- Educational profiles

## When Not to Use

- For graduation (use GraduationCapIcon)
- For teachers or instructors

## Import

```typescript
import { StudentIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { StudentIcon } from '@workindia/dsm';

const Example = () => {
  return <StudentIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

StudentFillIcon, StudentOutlineIcon, StudentIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
