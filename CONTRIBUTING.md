# Contributing to WorkIndiaXBlade DSM

Thank you for your interest in contributing to WorkIndiaXBlade DSM! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branch Naming Convention](#branch-naming-convention)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Project Structure](#project-structure)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

### Prerequisites

- Node.js >= 18.12.1
- npm
- Git

### Setup

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/WorkIndiaXBlade-DSM.git
   cd WorkIndiaXBlade-DSM
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Build all packages:
   ```bash
   npm run build
   ```

**Note**: The git commit message template is automatically configured when you run `npm install` (via the `prepare` hook). This ensures consistent commit messages across all contributors.

If you need to manually reconfigure it, you can run:

```bash
npm run setup:git-template
```

## Development Workflow

This project follows **GitHub Flow** - a simple, branch-based workflow:

```
main (protected)
  ↑
  └─ feature/fix branches → PR → merge → auto-release
```

### Workflow Steps:

1. **Branch from main** → Work on feature → Create PR → CI validates
2. **After approval** → Merge to main → Changesets creates Version PR
3. **Merge Version PR** → Automatic npm publish

### 1. Create a Branch

Always create a new branch from `main` for your changes:

```bash
git checkout main
git pull origin main
git checkout -b <branch-name>
```

See [Branch Naming Convention](#branch-naming-convention) for naming guidelines.

### 2. Make Your Changes

- Write clean, maintainable code
- Follow the [Coding Standards](#coding-standards)
- Add tests for new features
- Update documentation as needed

### 3. Test Your Changes

Before committing, ensure:

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Format checking
npm run format:check

# Build verification
npm run build
```

### 4. Commit Your Changes

Follow the [Commit Message Guidelines](#commit-message-guidelines) when committing.

### 5. Create a Changeset (if publishing)

If your changes should be published to npm, create a changeset:

```bash
npm run changeset
```

This will prompt you to:

- Select which packages have changed (`@workindia/tokens`, `@workindia/dsm`)
- Choose the type of change (major, minor, or patch)
- Write a summary of the changes

**Note**: Only create changesets for packages that should be published. The `@workindia/app` package is private and should not have changesets.

### 6. Push and Create Pull Request

```bash
git push origin <branch-name>
```

Then create a Pull Request following the [Pull Request Process](#pull-request-process).

### Complete GitHub Flow Workflow

Here's the full cycle from feature development to npm publication:

```
main (protected branch)
  ↑
  └─ feature branches → PR → CI validates → merge → auto-release
```

**Step-by-Step Process:**

1. **Branch from `main`**

   ```bash
   git checkout -b feat/my-feature
   ```

2. **Make changes + create changeset**

   ```bash
   npm run changeset
   ```

3. **Open PR to `main`**
   - CI runs automatically (build, lint, test, typecheck)
   - Code review happens

4. **After merge to `main`**
   - Changesets bot creates/updates "Version Packages" PR automatically
   - This PR aggregates all changesets since last release

5. **Merge Version PR**
   - Package versions are bumped
   - CHANGELOG.md files are updated
   - Packages are automatically published to npm

**Note**: The Version PR may batch multiple merged feature PRs together, allowing coordinated releases of related changes.

## Branch Naming Convention

Branches should follow this pattern:

```
<type>/<scope>/<short-description>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code refactoring without changing functionality
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks, dependency updates
- `build` - Build system or external dependencies changes

### Scope

The scope should indicate which package or area is affected:

- `tokens` - Changes to `@workindia/tokens`
- `dsm` - Changes to `@workindia/dsm`
- `app` - Changes to `@workindia/app`
- `root` - Changes to root-level configuration
- `ci` - CI/CD changes

### Examples

```
feat/tokens/add-new-color-token
fix/dsm/provider-theme-mapping
docs/root/update-readme
refactor/app/component-structure
chore/root/update-dependencies
test/dsm/add-provider-tests
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

Same as branch naming types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`

### Scope

Optional, but recommended. Same as branch naming scopes.

### Subject

- Use imperative mood ("add feature" not "added feature" or "adds feature")
- First letter lowercase
- No period at the end
- Maximum 72 characters

### Body (Optional)

- Explain the "what" and "why" of the change
- Wrap at 72 characters
- Can include multiple paragraphs

### Footer (Optional)

- Reference issues: `Closes #123`, `Fixes #456`
- Breaking changes: `BREAKING CHANGE: <description>`

### Examples

```
feat(tokens): add error color token

Add new error color token to support error states
in the design system.

Closes #42
```

```
fix(dsm): correct theme mapping for spacing tokens

The spacing tokens were not correctly mapped to Blade's
theme structure. This fix ensures proper mapping.

Fixes #15
```

```
docs(root): update contributing guidelines

Add branch naming convention and commit message
guidelines to CONTRIBUTING.md
```

```
refactor(app): restructure component imports

Reorganize component imports for better maintainability
and reduce circular dependencies.
```

## Pull Request Process

### Before Submitting

1. **Update your branch**: Ensure your branch is up to date with `main`

   ```bash
   git checkout main
   git pull origin main
   git checkout <your-branch>
   git rebase main
   ```

2. **Run checks**: Ensure all checks pass

   ```bash
   npm run typecheck
   npm run lint
   npm run format:check
   npm run build
   ```

3. **Test**: Verify your changes work as expected

### PR Title

Follow the same format as commit messages:

```
<type>(<scope>): <subject>
```

### PR Description

Use the PR template (automatically populated). Include:

- **Description**: What changes are being made and why
- **Type of Change**: Check all that apply
- **Testing**: How was this tested?
- **Checklist**: Ensure all items are checked

### Review Process

1. PRs require at least one approval before merging
2. All CI checks must pass
3. Address review comments promptly
4. Keep PRs focused and reasonably sized
5. Update your PR if `main` has new changes

### Merging

- Squash and merge is preferred for most PRs
- Maintain a clean commit history
- PR title becomes the commit message

### Versioning & Releases

This project uses [Changesets](https://github.com/changesets/changesets) for automated version management:

#### GitHub Flow + Changesets Process:

1. **Create changeset** in your feature branch:

   ```bash
   npm run changeset
   ```

2. **Open PR to main** → CI validates your changes

3. **After PR merges to main** → Changesets bot automatically creates a "Version PR" that:
   - Bumps package versions
   - Updates CHANGELOG.md files
   - Aggregates all changesets

4. **When Version PR merges to main** → Packages are automatically published to npm

**Note**: The Version PR may batch multiple merged feature PRs together, allowing coordinated releases.

See [.changeset/README.md](.changeset/README.md) for detailed versioning documentation.

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types; use proper types or `unknown`
- Use interfaces for object shapes
- Prefer `const` over `let`, avoid `var`

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting (runs automatically on commit)
- Maximum line length: 100 characters
- Use meaningful variable and function names

### File Organization

- Keep files focused and single-purpose
- Group related functionality together
- Follow existing project structure

### Monorepo Considerations

- Changes to `@workindia/tokens` may require updates to `@workindia/dsm`
- Changes to `@workindia/dsm` may require updates to `@workindia/app`
- Test changes across packages when making cross-package modifications

## Testing

### Writing Tests

- Write tests for new features
- Update tests when fixing bugs
- Aim for good test coverage
- Use descriptive test names

### Running Tests

```bash
# Run all tests
npm test

# Run tests for specific package
npm test -- --scope @workindia/tokens
```

## Project Structure

```
WorkIndiaXBlade-DSM/
├── packages/
│   ├── tokens/      # Design tokens (@workindia/tokens)
│   ├── dsm/         # Design system wrapper (@workindia/dsm)
│   └── app/         # Example app (@workindia/app)
├── .github/         # GitHub templates and workflows
├── .husky/          # Git hooks
└── [root configs]   # Root-level configuration files
```

### Package Guidelines

- **@workindia/tokens**: Single source of truth for design tokens
- **@workindia/dsm**: Maps tokens to Blade theme, provides components
- **@workindia/app**: Example consumer application

## Questions?

If you have questions or need help:

1. Check existing issues and PRs
2. Open a new issue with the `question` label
3. Reach out to maintainers

Thank you for contributing! 🎉
