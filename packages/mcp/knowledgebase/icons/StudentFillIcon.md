## Component Name

StudentFillIcon

## Description

Represents students, learning, education, or trainees.

Filled variants provide a solid, more prominent appearance. Use filled icons when you need emphasis or when the icon is the primary visual element.

## Category

Student

## Variant

Filled

## When to Use

- Student features
- Learning or training
- Educational profiles

## When Not to Use

- For graduation (use GraduationCapIcon)
- For teachers or instructors

## Import

```typescript
import { StudentFillIcon } from '@workindia/dsm';
```

## Usage

```tsx
import { StudentFillIcon } from '@workindia/dsm';

const Example = () => {
  return <StudentFillIcon size="medium" color="surface.icon.primary.normal" />;
};
```

## Related Icons

StudentOutlineIcon

## Design Guidelines

- Use icons consistently throughout your application
- Maintain appropriate size hierarchy (small: 16px, medium: 20px, large: 24px, xlarge: 32px)
- Use semantic colors from the design tokens
- Ensure sufficient contrast for accessibility
- Use filled variants for primary actions and outline variants for secondary actions
