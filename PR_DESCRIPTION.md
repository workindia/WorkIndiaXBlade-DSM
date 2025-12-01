## Changes

- Updated `@razorpay/blade` dependency from `12.65.1` to `12.66.0` in `packages/dsm/package.json`
- Updated `package-lock.json` with the new blade version
- Added changeset for the version upgrade

## Verification Checks Performed

### ✅ Dependency Updates

- Updated blade version in `packages/dsm/package.json` from 12.65.1 to 12.66.0
- Ran `npm install` to update `package-lock.json` with new blade version

### ✅ Code Quality Checks

- **Lint**: All lint checks pass successfully (no errors)
- **Prettier**: All files formatted correctly with prettier
- **TypeScript**: Built tokens package to resolve type dependencies, then verified all type checks pass

### ✅ Test Verification

- **DSM Package Tests**: All 45 tests pass successfully
  - `deep-merge.test.ts`: ✅ Passed
  - `theme.test.ts`: ✅ Passed
  - `provider.test.tsx`: ✅ Passed (6.916s)
- **Example App**: Builds successfully and typechecks correctly
  - Build completed without errors
  - TypeScript type checking passes

### ✅ Build Verification

- Built tokens package to ensure type definitions are available
- Built dsm package successfully
- Built example app successfully (production build completed in 5.43s)

All checks confirm the upgrade is compatible and working correctly.
