# Development Workflow

This document defines the Git branching strategy, development process, commit conventions, and pull request workflow used throughout the portfolio project.

The goal is to maintain a consistent, traceable, and reliable development process.

## 1. Branching Strategy

The project follows a simplified Git Flow branching model.

### Main Branches

| Branch | Purpose |
|---|---|
| `main` | Stable production-ready code. |
| `dev` | Integration branch for completed features and fixes. |

Both branches are protected by GitHub Rulesets.

Direct pushes to protected branches are not permitted. Changes must be submitted through pull requests.

### Supporting Branches

The following branch types are used for development:

| Prefix | Purpose | Example |
|---|---|---|
| `feature/` | New functionality or improvements. | `feature/contact-form` |
| `fix/` | Bug fixes. | `fix/navigation-layout` |
| `hotfix/` | Urgent production fixes. | `hotfix/critical-build-error` |
| `docs/` | Documentation changes. | `docs/update-deployment-guide` |
| `refactor/` | Code restructuring without changing functionality. | `refactor/header-component` |
| `test/` | Adding or modifying tests. | `test/navigation-coverage` |
| `chore/` | Maintenance and configuration tasks. | `chore/update-dependencies` |

Branch names should be descriptive, lowercase, and use hyphens to separate words.

## 2. Branch Creation

All regular development branches must be created from the latest `dev` branch.

Before creating a new branch, synchronize the local repository:

```bash
git switch dev
git pull origin dev
```

Create the appropriate branch:

```bash
git switch -c feature/feature-name
```

For example:

```bash
git switch -c feature/contact-form
```

Hotfix branches are the exception. They must be created from the latest `main` branch:

```bash
git switch main
git pull origin main
git switch -c hotfix/critical-build-error
```

## 3. Development Process

All development work must take place on a dedicated supporting branch.

The development process follows these steps:

1. Create a branch from the appropriate base branch.
2. Implement the intended changes.
3. Run relevant tests and quality checks locally.
4. Review the changes before committing.
5. Create meaningful commits.
6. Push the branch to GitHub.
7. Open a pull request against the appropriate target branch.
8. Resolve any review comments or CI failures.
9. Merge the pull request after all requirements are satisfied.
10. Delete the supporting branch after successful merging.

Feature, fix, documentation, refactoring, test, and chore branches normally target `dev`.

Hotfix branches target `main`.

## 4. Commit Conventions

The project follows the Conventional Commits specification.

Commit messages must use the following format:

```text
<type>(optional scope): <description>
```

### Commit Types

| Type | Purpose |
|---|---|
| `feat` | Introduces a new feature. |
| `fix` | Fixes a bug. |
| `docs` | Changes documentation. |
| `style` | Changes formatting without affecting functionality. |
| `refactor` | Restructures code without changing functionality. |
| `test` | Adds or modifies tests. |
| `chore` | Maintenance tasks and configuration changes. |
| `perf` | Performance improvements. |
| `build` | Changes to the build system or dependencies. |
| `ci` | Changes to CI/CD configuration. |

### Commit Message Examples

```text
feat: add contact form
fix: correct mobile navigation
docs: update architecture decisions
refactor: simplify header component
test: add navigation component tests
chore: update dependencies
ci: configure GitHub Actions workflow
```

Commit messages should:
- Be written in English.
- Use the imperative mood where appropriate.
- Be concise and descriptive.
- Describe one logical change whenever possible.

## 5. Pull Request Workflow

All changes to `main` and `dev` must be submitted through pull requests.

### Feature and Development Pull Requests

Regular development branches must target `dev`.

Each pull request should:
- Have a clear and descriptive title.
- Explain the purpose of the changes.
- Reference related issues when applicable.
- Include relevant testing information.
- Pass all required automated checks.
- Contain no unresolved merge conflicts.

### Production Release Pull Requests

Production releases are created by opening a pull request from `dev` into `main`.

Before merging a release pull request:
- Verify that the intended changes are included.
- Ensure all automated checks pass.
- Review the final changes.
- Confirm that the application is ready for production deployment.

Only changes merged into `main` are eligible for production deployment.

### Hotfix Pull Requests

Hotfix branches are created from `main` and must target `main`.

After a hotfix has been merged into `main`, the changes must also be integrated into `dev` to prevent the branches from diverging.

## 6. Merge Strategy

The project uses merge commits to preserve the development history and the relationship between feature branches and their target branches.

Pull requests should be merged using the GitHub **Create a merge commit** option.

Squash merging and rebase merging are not used as the standard merge strategy.

Supporting branches should be deleted after successful merging unless they are intentionally retained for an ongoing purpose.

## 7. Branch Protection

The `main` and `dev` branches are protected using GitHub Rulesets.

The following restrictions apply:

- Pull requests are required before merging.
- Required approval count is currently set to zero because the project is maintained by a single developer.
- Force pushes are blocked.
- Branch deletion is restricted.
- Required CI status checks will be configured once the CI pipeline has been implemented.

Branch protection rules must not be bypassed during normal development.

## 8. Release Process

The release process follows these steps:

1. Complete and merge all intended changes into `dev`.
2. Verify that the integration branch is stable.
3. Create a pull request from `dev` into `main`.
4. Review the release changes and automated checks.
5. Merge the release pull request using a merge commit.
6. Trigger the production deployment through GitHub Actions.
7. Verify that the deployed website is functioning correctly.

The `main` branch represents the currently released production version.

## 9. General Development Rules

- Never commit directly to `main` or `dev`.
- Never force-push to protected branches.
- Always create regular development branches from the latest `dev`.
- Keep branches focused on a single logical task.
- Commit changes in small, meaningful units.
- Run relevant tests before opening a pull request.
- Do not merge pull requests with failing required checks.
- Keep documentation synchronized with relevant architectural and technical changes.
- Do not deploy unfinished development work to production.
- Keep the production website unchanged until a release has been explicitly approved and merged into `main`.