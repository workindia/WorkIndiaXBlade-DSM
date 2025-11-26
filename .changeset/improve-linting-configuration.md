---
---

# Improved Linting Configuration and CI/CD Updates

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

### Documentation Updates

- **Added**: `format:check` script to validate code formatting without modifying files
- **Added**: "Technical Stack" section to CONTRIBUTING.md documenting build tools and workflows
- **Added**: "Branching Strategy" section to README.md with visual workflow diagram
- **Clarified**: GitHub Flow workflow in CONTRIBUTING.md with step-by-step release process
- **Enhanced**: Changesets + GitHub Flow integration documentation
- Documents Rollup build system, Lerna orchestration, and automated release workflow

These changes improve the developer experience, CI/CD performance, and contributor onboarding without affecting any package APIs or functionality.
