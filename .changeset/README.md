# Changesets

This repository uses [Changesets](https://github.com/changesets/changesets) for version management and changelog generation.

## Creating a Changeset

When you make changes that should be published, create a changeset by running:

```bash
npm run changeset
```

This will prompt you to:

1. Select which packages have changed
2. Choose the type of change (major, minor, or patch)
3. Write a summary of the changes

The changeset will be created in the `.changeset` directory.

## Version Bumping

To bump versions based on changesets:

```bash
npm run version
```

This will:

- Update package versions based on changesets
- Update CHANGELOG.md files
- Remove consumed changesets

## Publishing

To publish packages to npm:

```bash
npm run release
```

This will:

- Build all packages
- Run tests
- Publish changed packages to npm
- Create git tags

## Automated Releases

The GitHub Actions workflow automatically:

- Creates a PR when changesets are added
- Publishes packages when the PR is merged to main

## Manual Publishing

You can also publish specific packages:

```bash
# Publish tokens package
npm run publish:tokens

# Publish dsm package
npm run publish:dsm

# Publish all packages
npm run publish:all
```
