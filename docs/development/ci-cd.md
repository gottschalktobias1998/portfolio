# CI/CD Pipeline

This document describes the Continuous Integration and Continuous Deployment strategy for the portfolio project.

The pipeline will automate code validation, testing, production builds, and deployment to the production hosting environment.

## 1. Objectives

The CI/CD pipeline should:

- Automatically validate changes before they are merged.
- Execute automated tests.
- Detect build and type errors early.
- Ensure that only verified changes reach production.
- Automate production deployments.
- Keep the deployment process reproducible and maintainable.

GitHub Actions will be used as the CI/CD platform.

## 2. Continuous Integration (CI)

Continuous Integration validates code changes automatically.

### Trigger Events

CI workflows will run on the following events:

- Pull requests targeting `dev`.
- Pull requests targeting `main`.
- Pushes to `dev`.
- Pushes to `main`.

Feature and other supporting branches are validated through their pull requests.

### CI Pipeline Steps

The CI pipeline will perform the following steps:

1. Check out the repository.
2. Set up the required Node.js version.
3. Install project dependencies using the lockfile.
4. Run TypeScript type checking.
5. Run automated unit and integration tests using Vitest.
6. Generate and evaluate test coverage where configured.
7. Run the production build.
8. Execute Playwright end-to-end tests where configured.

The pipeline must fail if a required step fails.

### Quality Requirements

The following checks must pass before a pull request can be merged:

- Dependency installation.
- TypeScript type checking.
- Unit and integration tests.
- Production build.

End-to-end tests will be integrated into the CI pipeline once the application and relevant browser workflows are implemented.

Required GitHub status checks will be configured through the repository's branch rulesets after the corresponding workflows have been created and verified.

## 3. Continuous Deployment (CD)

Continuous Deployment automates the publication of approved production changes.

### Production Deployment Trigger

Production deployment will only be triggered by a push to the `main` branch resulting from a merged pull request.

Changes pushed or merged into `dev` must never trigger a production deployment.

### Deployment Process

The production deployment pipeline will:

1. Check out the latest `main` revision.
2. Set up the required Node.js version.
3. Install project dependencies using the lockfile.
4. Generate the production build, including all prerendered routes.
5. Prepare the static deployment artifacts.
6. Upload the generated files to the Serverdiscounter Web Mini hosting environment using a suitable deployment method.
7. Verify that the deployment completed successfully.

The deployment must publish only the generated production artifacts.

Development files, source code, test files, and environment-specific configuration must not be uploaded unless explicitly required.

## 4. Deployment Environment

The project uses the following environments:

| Environment | Branch | Purpose |
|---|---|---|
| Development | Feature branches and `dev` | Local development and integration. |
| Production | `main` | Public portfolio website. |

The production environment is hosted by Serverdiscounter using the existing Web Mini package.

The production domain must remain unchanged until a new version has been approved and successfully deployed.

## 5. Secrets and Credentials

Deployment credentials must be stored securely as GitHub Actions repository secrets or environment secrets.

The following credentials may be required depending on the selected deployment method:

- FTP or SFTP hostname.
- FTP or SFTP username.
- FTP or SFTP password or SSH key.
- Deployment directory.

Secrets must:

- Never be committed to the repository.
- Never be stored directly in workflow files.
- Never be printed in CI/CD logs.
- Only be accessible to workflows that require them.

Production deployment credentials should only be available to the production deployment workflow.

## 6. Build Artifacts

The production build must generate static files suitable for conventional web hosting.

The build output will include:

- Prerendered HTML files for public routes.
- Optimized JavaScript bundles.
- Compiled CSS files.
- Static media and other required assets.

The generated output directory must be consistent and documented.

Only production build artifacts will be deployed.

## 7. Deployment Safety

The deployment pipeline must follow these safety requirements:

- Production deployments must only originate from `main`.
- Failed CI checks must prevent merging when configured as required checks.
- Failed production builds must prevent deployment.
- Deployment credentials must be protected.
- The deployment process must not expose development or test configuration.
- The existing production website must remain available until a replacement version is ready.
- Deployment failures must be visible in GitHub Actions.

## 8. Future Improvements

The CI/CD pipeline may be extended with:

- Automated accessibility checks.
- Automated Lighthouse performance audits.
- Dependency vulnerability scanning.
- Pull request preview deployments.
- Deployment rollback procedures.
- Automated post-deployment health checks.

These improvements will be introduced when they provide practical value to the project.