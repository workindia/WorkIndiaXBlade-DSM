# @workindia/dsm

## 0.5.0

### Minor Changes

- 1da9144: - Added multiple opacity levels (10, 25, 50, 100, 200, 300, 400, 450, 500) for both black and white colors
  - Changed `blackNWhite` interface from simple string properties to nested objects with opacity variants
  - Introduced new token types: border, breakpoints, and elevation tokens
  - Updated `@workindia/dsm` to use the new token structure (accessing `black[500]` instead of `black`)
  - Standardized interface naming by removing "WorkIndia" prefix from color scale interfaces

### Patch Changes

- Updated dependencies [1da9144]
  - @workindia/tokens@0.5.0

## 0.4.1

### Patch Changes

- a593325: Lock Blade version and add automated release monitoring
  - Lock @razorpay/blade version to exact version (12.65.1) in package.json to prevent automatic updates
  - Add GitHub Actions workflow to monitor and notify about new Blade and Blade MCP releases
  - Automatically create GitHub issues with changelog when new versions are detected
  - Add version tracking file to prevent duplicate issue creation

- 37dcf48: Update WorkIndiaColorTokens with design team color updates and fix WorkIndiaProvider type compatibility
  - Add a400 (64% opacity) alpha variant to all chromatic and neutral color scales
  - Update neutral light alpha base color from #7B8995 to #838F9A
  - Update neutral dark alpha base color from #C3CCD4 to #BEC7D0
  - Fix WorkIndiaProvider return type for React 19 compatibility
  - Update demo app to display new a400 variants

- Updated dependencies [37dcf48]
  - @workindia/tokens@0.4.0

## 0.4.0

### Minor Changes

- ae890ce: Expanded exports to include all Blade components and types.

## 0.3.0

### Minor Changes

- 5abdd37: # Improved Linting Configuration and CI/CD Updates

  ## Infrastructure Changes

  ### ESLint Optimization
  - **Fixed**: ESLint now properly ignores build artifacts (`build/`, `coverage/`, `dist/`)
  - **Performance**: Significantly reduced lint execution time by skipping generated files
  - **Added ignores**: `*.tsbuildinfo`, `lcov-report/` and all config files

  ### Lerna Integration
  - **Changed**: Lint commands now run via Lerna for better monorepo support
  - **Added**: `lint` and `lint:fix` scripts to all packages (`@workindia/tokens`, `@workindia/dsm`)
  - **Added**: `lint:root` and `lint:root:fix` for root-level file linting
  - **Benefit**: Parallel linting across all packages with real-time output via `--stream`

  ### CI/CD Updates
  - **Fixed**: Updated CI workflow to check for `build/` directory instead of `dist/`
  - **Simplified**: CI now only runs on PRs to `main` (removed `develop` branch)
  - Aligns with rollup-based build system that outputs to `build/` directory
  - Implements consistent GitHub Flow branching strategy

  ### Package-Level Improvements
  - Fixed ESLint configuration in `@workindia/app` to properly ignore config files
  - All packages now have consistent lint script patterns

  ### Breaking Changes
  - **@workindia/dsm**: Updated peerDependencies from React `>=17` to React `>=18`
    - This removes support for React 17
    - React 18 and React 19 are still supported
    - Updated README with React 19 installation instructions using `--legacy-peer-deps` flag

  ### Documentation Updates
  - **Added**: `format:check` script to validate code formatting without modifying files
  - **Added**: "Technical Stack" section to CONTRIBUTING.md documenting build tools and workflows
  - **Added**: "Branching Strategy" section to README.md with visual workflow diagram
  - **Clarified**: GitHub Flow workflow in CONTRIBUTING.md with step-by-step release process
  - **Enhanced**: Changesets + GitHub Flow integration documentation
  - **Updated**: `@workindia/dsm` README with React 19 installation instructions
  - Documents Rollup build system, Lerna orchestration, and automated release workflow

  These changes improve the developer experience, CI/CD performance, and contributor onboarding. Note: React 17 users will need to upgrade to React 18+ to use the new version of `@workindia/dsm`.

### Patch Changes

- Updated dependencies [5abdd37]
  - @workindia/tokens@0.3.0

## 0.2.0

### Minor Changes

- 727ca09: Initial release with versioning, changelog, and automated publishing setup

### Patch Changes

- Updated dependencies [727ca09]
  - @workindia/tokens@0.2.0
