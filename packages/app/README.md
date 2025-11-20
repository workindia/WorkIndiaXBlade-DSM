# @workindia/app

Example consumer application demonstrating proper usage of the WorkIndia Design System.

## Purpose

This package serves as:

1. **Reference Implementation**: Shows how to properly use `@workindia/dsm` components
2. **ESLint Enforcement**: Demonstrates ESLint rules that prevent direct Blade imports
3. **Testing Ground**: Can be used to test design system changes

## Key Rules

### ✅ DO

```tsx
// Import from @workindia/dsm
import { WorkIndiaProvider, Button, Heading } from '@workindia/dsm';
```

### ❌ DON'T

```tsx
// NEVER import directly from @razorpay/blade
import { BladeProvider } from '@razorpay/blade/components'; // ❌ ESLint will error
```

## ESLint Enforcement

This package includes ESLint rules that will **error** if you try to import from `@razorpay/blade` directly. This ensures all applications use the locked-down design system.

## Usage

```tsx
import { WorkIndiaProvider, Button, Heading } from '@workindia/dsm';

function MyApp() {
  return (
    <WorkIndiaProvider>
      <Heading>My App</Heading>
      <Button variant="primary">Click Me</Button>
    </WorkIndiaProvider>
  );
}
```

## License

MIT
