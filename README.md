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
- npm

### Installation

```bash
# Install dependencies
npm install
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

## Versioning & Publishing

This repository uses [Changesets](https://github.com/changesets/changesets) for version management and automated releases.

### Creating a Changeset

When you make changes that should be published, create a changeset:

```bash
npm run changeset
```

This will prompt you to:

1. Select which packages have changed (`@workindia/tokens`, `@workindia/dsm`)
2. Choose the type of change (major, minor, or patch)
3. Write a summary of the changes

### Version Bumping

To bump versions based on changesets:

```bash
npm run version
```

This updates package versions and CHANGELOG.md files based on changesets.

### Publishing

To publish packages to npm:

```bash
npm run release
```

This will build, test, and publish all packages with pending changesets.

### Automated Releases

The GitHub Actions workflow automatically:

- Creates a PR when changesets are added to main branch
- Publishes packages to npm when the version PR is merged

**Note**: Make sure to set `NPM_TOKEN` secret in GitHub repository settings for automated publishing.

### Manual Publishing

For manual publishing, ensure you have:

1. Created changesets for changed packages
2. Bumped versions with `npm run version`
3. Built and tested the packages
4. Published with `npm run release`

See [.changeset/README.md](.changeset/README.md) for more details.

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
