# @workindia/dsm

WorkIndia Design System wrapper around @razorpay/blade with restricted design tokens.

This package provides a locked-down design system that enforces the use of only approved WorkIndia design tokens while leveraging the power of @razorpay/blade components.

## Installation

```bash
npm install @workindia/dsm @razorpay/blade
```

**Note for React 19 users**: If you're using React 19, you may need to use the `--legacy-peer-deps` flag:

```bash
npm install @workindia/dsm @razorpay/blade --legacy-peer-deps
```

This is because npm's peer dependency resolution may be strict about React versions, even though `@workindia/dsm` supports React >=18 (including React 19).

## Usage

### Basic Setup

```tsx
// Import WorkIndia fonts (includes Inter font)
import '@workindia/dsm/fonts.css';
import { WorkIndiaProvider, Button, Heading } from '@workindia/dsm';

function App() {
  return (
    <WorkIndiaProvider>
      <Heading>Welcome to WorkIndia</Heading>
      <Button variant="primary">Apply Now</Button>
    </WorkIndiaProvider>
  );
}
```

### Color Scheme

```tsx
import { WorkIndiaProvider } from '@workindia/dsm';

function App() {
  return (
    <WorkIndiaProvider colorScheme="dark">{/* Your app */}</WorkIndiaProvider>
  );
}
```

## Components

All Blade components are re-exported from this package. You should **never** import directly from `@razorpay/blade/components` in your application.

### Available Components

- `Button` - Primary action button
- `Heading` - Heading text component
- `Text` - Body text component
- `Box` - Layout container
- `Card`, `CardBody`, `CardHeader` - Card components
- `Input`, `Select`, `Checkbox`, `Radio`, `Switch` - Form components
- `Badge`, `Alert`, `Spinner` - UI components

And more... See [Blade documentation](https://blade.razorpay.com) for full component list.

## Theme

The WorkIndia theme is automatically applied when you use `WorkIndiaProvider`. It restricts colors to:

- **Brand**: Primary and secondary brand colors
- **Feedback**: Success and error colors
- **Text**: Body, heading, and subtle text colors

## Type Safety

All components are fully typed with TypeScript. The theme enforces type safety for color tokens.

## License

MIT
