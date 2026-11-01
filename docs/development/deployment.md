# Deployment and Hosting

This document describes the production hosting environment, deployment structure, and operational requirements for the portfolio website.

It defines how the generated application is published and maintained on the production server.

## 1. Hosting Provider

The portfolio will be hosted using the existing Serverdiscounter Web Mini hosting package.

### Hosting Details

| Property | Configuration |
|---|---|
| Hosting Provider | Serverdiscounter |
| Hosting Package | Web Mini |
| Primary Domain | `tobiasgottschalk.de` |
| Hosting Type | Shared Web Hosting |
| Storage | 5 GB SSD |
| Web Server | Serverdiscounter hosting environment |
| SSL Certificate | Included |
| Deployment Method | FTP-based deployment |
| Application Rendering | Static Site Generation (SSG) |

The hosting package provides conventional web hosting functionality and supports static website deployment.

The production application must not depend on a permanently running Node.js process.

## 2. Domain and HTTPS

The portfolio will be published under the primary domain:

`https://tobiasgottschalk.de`

All production traffic must use HTTPS.

The included SSL certificate will be used to provide encrypted connections.

The following requirements apply:

- HTTP requests should be redirected to HTTPS.
- The primary domain must remain accessible.
- Domain redirects must be configured consistently.
- Internal links and canonical URLs must use HTTPS.
- SSL certificate validity must be monitored.

The existing domain and associated email services must remain operational during website deployment and updates.

## 3. Production Build

The application will use React, TypeScript, Vite, and Static Site Generation.

The production build will generate static files that can be served directly by the web server.

The generated output will contain:

- Prerendered HTML files for all public routes.
- Optimized JavaScript bundles.
- Compiled CSS files.
- Images, fonts, icons, and other static assets.

The build process must generate the required German and English routes.

Example route structure:

```text
/de/
/de/about/
/de/skills/
/de/projects/
/de/contact/

/en/
/en/about/
/en/skills/
/en/projects/
/en/contact/
```

Each public route must be accessible directly without requiring prior navigation from the homepage.

The final build output directory will be determined during project implementation.

## 4. Server Directory Structure

The production website will be deployed to the document root assigned to the primary domain by the hosting provider.

The deployment directory must be verified in the hosting control panel before the first deployment.

The deployed structure will contain the generated production files, for example:

```text
public_html/
├── index.html
├── de/
│   ├── index.html
│   ├── about/
│   ├── skills/
│   ├── projects/
│   └── contact/
├── en/
│   ├── index.html
│   ├── about/
│   ├── skills/
│   ├── projects/
│   └── contact/
└── assets/
    ├── css/
    ├── js/
    ├── images/
    └── fonts/
```

This structure is an example. The actual directory layout depends on the selected SSG implementation and production build configuration.

## 5. Deployment Method

Production files will be transferred using FTP through the hosting package.

Deployment credentials must be stored securely in GitHub Actions secrets.

The exact FTP hostname, username, password, and target directory must be obtained from the hosting control panel.

The deployment process must:

1. Build the application in the production environment.
2. Verify that the generated files are complete.
3. Connect to the hosting account using the configured deployment credentials.
4. Upload the generated production files to the correct document root.
5. Verify the deployed website.
6. Report the deployment result through GitHub Actions.

Only generated production artifacts may be uploaded.

Source code, development dependencies, test files, and repository metadata must not be deployed.

The deployment implementation must use encrypted transport where supported by the hosting provider. The availability of FTPS or SFTP must be verified before selecting the final transfer configuration.

## 6. Production Configuration

The production website must not require runtime environment variables or server-side application configuration unless explicitly introduced by a future architectural decision.

Configuration that is required during the build must be handled through the appropriate build environment.

Sensitive credentials must never be included in generated frontend assets.

The website must not expose:

- Deployment credentials.
- API secrets.
- Private configuration files.
- Development-only settings.
- Internal repository information.

## 7. Routing and Web Server Configuration

The application uses React Router and language-specific URL prefixes.

The web server must serve the generated HTML file for each public route.

Direct navigation and browser refreshes must work for all supported routes.

The server configuration must be compatible with the selected SSG output structure.

If required, Apache `.htaccess` configuration may be used for:

- HTTPS redirection.
- URL normalization.
- Appropriate fallback handling.
- Cache headers for static assets.
- Security-related response headers.

Fallback rules must not interfere with existing prerendered HTML routes or cause missing pages to return incorrect content.

The final server configuration will be defined and tested during implementation.

## 8. Backups and Recovery

The hosting provider offers daily backups.

These backups provide an additional recovery option in case of deployment failures or accidental file changes.

The following practices apply:

- The Git repository remains the primary source of truth.
- Production builds must be reproducible from the repository.
- Deployment configuration must be version-controlled where possible.
- Hosting backups must not replace version control.
- Recovery procedures must be documented and tested when practical.

Before the first production deployment, the existing website must be backed up independently.

## 9. Deployment Safety

The existing production website must remain available until the replacement portfolio is ready.

The first production deployment must only take place after explicit approval.

The following requirements apply:

- Development changes must never overwrite the production website.
- Only verified builds from `main` may be deployed.
- The production target directory must be checked before uploading.
- Deployment must not modify unrelated website or email configuration.
- Failed deployments must be investigated before another deployment is attempted.
- A recovery path must be available if the new website causes problems.

Where practical, deployment should use a temporary upload directory and a controlled switch to the new release.

## 10. Maintenance

The production environment must be maintained to ensure continued availability and security.

Maintenance activities include:

- Monitoring website availability.
- Checking SSL certificate validity.
- Updating project dependencies.
- Reviewing deployment logs.
- Verifying external links and public routes.
- Monitoring available hosting storage.
- Reviewing backup and recovery procedures.

Changes to the hosting environment or deployment process must be reflected in this document.

## 11. Future Improvements

The deployment process may be extended with:

- Automated post-deployment health checks.
- Deployment rollback automation.
- Release-specific backup snapshots.
- More advanced deployment strategies.
- Automated performance and accessibility monitoring.

These improvements will be introduced when they provide practical value to the project.