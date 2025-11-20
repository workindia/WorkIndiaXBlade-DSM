# WorkIndiaXBlade DSM

A Lerna monorepo implementing a locked-down design system based on @razorpay/blade with restricted color and spacing tokens.

## Overview

This monorepo contains three packages:

- **@workindia/tokens** - Restricted design token definitions (colors, spacing, typography)
- **@workindia/dsm** - Design system wrapper that maps restricted tokens to Blade's theme structure
- **@workindia/app** - Example consumer application demonstrating proper usage

## Architecture

The design system enforces token lockdown through:

1. **TypeScript Types**: Strong typing ensures only approved tokens are used
2. **ESLint Rules**: Blocks direct imports from `@razorpay/blade` in consumer apps
3. **Theme Mapping**: Maps restricted WorkIndia tokens to Blade's comprehensive theme structure

## Getting Started

### Prerequisites

- Node.js >= 18.12.1
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Bootstrap packages (link local packages)
npm run bootstrap
```

### Building

```bash
# Build all packages
npm run build

# Build specific package
npm run build:tokens
npm run build:dsm
npm run build:app
```

### Development

```bash
# Type check all packages
npm run typecheck

# Lint all packages
npm run lint

# Format code
npm run format
```

## Package Details

### @workindia/tokens

The single source of truth for design tokens. Defines restricted colors, spacing, and typography values.

**Restricted Colors:**

- `brand.primary` - Primary brand color (#005A9C)
- `brand.secondary` - Secondary brand color (#FF9900)
- `feedback.success` - Success state (#008000)
- `feedback.error` - Error state (#D9304F)
- `text.body` - Body text color
- `text.heading` - Heading text color
- `text.subtle` - Subtle text color

**Restricted Spacing:**

- `small` - 8px
- `medium` - 16px
- `large` - 24px
- `xlarge` - 32px

### @workindia/dsm

Design system wrapper that:

- Maps restricted tokens to Blade's theme structure
- Provides `WorkIndiaProvider` component
- Re-exports Blade components configured with WorkIndia theme

### @workindia/app

Example consumer application with ESLint rules that prevent direct Blade imports.

## Publishing

Packages can be published independently using Lerna:

```bash
# Publish all changed packages
npm run publish:all

# Publish specific package
npm run publish:tokens
npm run publish:dsm
```

## Usage in Applications

```tsx
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

**Important**: Never import directly from `@razorpay/blade` in your applications. Always use `@workindia/dsm`.

## License

MIT License - See [LICENSE.md](LICENSE.md) for details.

This project is built on top of [@razorpay/blade](https://github.com/razorpay/blade), which is also licensed under MIT License.
