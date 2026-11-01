# Architecture Decisions

This document records the architectural and technical decisions made during the development of the portfolio.

Each decision should document its context, the considered alternatives, the selected approach, and the reasoning behind it.

## Decision Status

- **Proposed:** Decision is under consideration.
- **Accepted:** Decision has been approved.
- **Deprecated:** Decision is no longer recommended.
- **Superseded:** Decision has been replaced by another decision.

---

## Architecture Principles

The project architecture should follow these principles:

### Maintainability
The codebase should remain understandable, modular, and easy to maintain.

### Separation of Concerns
Different responsibilities should be separated into clearly defined modules and layers.

### Reusability
Shared functionality and UI elements should be implemented as reusable components where appropriate.

### Scalability
The architecture should support additional pages, features, and functionality without requiring fundamental restructuring.

### Simplicity
Technical complexity and dependencies should be kept to a reasonable minimum.

### Accessibility
Accessibility must be considered throughout the architecture and implementation.

### Performance
Architectural decisions should support efficient loading, rendering, and resource usage.

---

## Architecture Decision Records

### ADR-001: Frontend Framework

**Status:** Accepted

**Context:**

The portfolio requires a modern frontend architecture that supports reusable components, maintainable code, interactive elements, and multilingual content.

**Decision:**

React is selected as the frontend framework.

**Alternatives:**
- Vue
- Angular
- Astro

**Rationale:**

React provides a component-based architecture, a mature ecosystem, and extensive flexibility for building interactive user interfaces. Its ecosystem and tooling make it suitable for the planned portfolio and future interactive project demonstrations.

**Consequences:**
- The application will use React components.
- UI functionality will be organized into reusable components.
- React-specific tooling and libraries may be introduced where appropriate.
- The architecture should avoid unnecessary dependencies.

---

### ADR-002: Programming Language

**Status:** Accepted

**Context:**

The project requires a programming language that supports maintainable application development, reliable code quality, and a scalable component architecture.

**Decision:**

TypeScript is selected as the primary programming language.

**Alternatives:**
- JavaScript

**Rationale:**

TypeScript extends JavaScript with static typing and improved tooling support. It helps detect potential errors during development, improves code readability, and provides better maintainability as the project grows.

**Consequences:**
- Application code will be written in TypeScript.
- React components will use TSX.
- Type definitions should be maintained consistently.
- Strict TypeScript configuration should be enabled.
- The use of `any` should be avoided unless explicitly justified.

---

### ADR-003: Build Tooling

**Status:** Accepted

**Context:**

The project requires a modern development environment and build system that supports React, TypeScript, efficient development workflows, and optimized production builds.

**Decision:**

Vite is selected as the build tool and development server.

**Alternatives:**
- Webpack
- Rsbuild

**Rationale:**

Vite provides a fast development server, efficient Hot Module Replacement (HMR), and optimized production builds. Its native integration with React and TypeScript reduces configuration overhead and supports a straightforward development workflow.

**Consequences:**
- Vite will be used for local development and production builds.
- The project will use the official React plugin for Vite.
- Build configuration will be maintained in `vite.config.ts`.
- Development and production environments will use the same build tooling.

---

### ADR-004: Styling Architecture

**Status:** Accepted

**Context:**

The project requires a maintainable and scalable styling architecture that supports consistent design tokens, reusable styling utilities, responsive layouts, and clear separation of concerns.

**Decision:**

SCSS (Sass) is selected as the styling solution. The project will follow a centralized 7-1 SCSS architecture combined with BEM naming conventions. CSS Modules will not be used.

**Rationale:**

SCSS provides variables, mixins, functions, placeholders, and modular stylesheet organization. The 7-1 architecture establishes a clear separation between foundational styles, components, layouts, pages, themes, and third-party styles. BEM provides predictable and consistent class naming. A centralized styling structure ensures that design decisions and shared styles remain maintainable across the application.

**Consequences:**
- All application styles will be written in SCSS.
- Stylesheets will be organized using the 7-1 architecture.
- BEM will be used for CSS class naming.
- Sass modules (`@use` and `@forward`) will be preferred over legacy `@import`.
- Design tokens will be centrally maintained.
- Component-specific styles will remain in the centralized SCSS structure.
- CSS Modules and CSS-in-JS will not be introduced.

---

### ADR-005: Routing and Internationalization

**Status:** Accepted

**Context:**

The portfolio must support German and English content. Language selection should be reflected in the URL structure and should not require persistent client-side storage.

**Decision:**

React Router is selected as the routing solution.

The application will use language-specific URL prefixes:
- `/de/` for German.
- `/en/` for English.

The active language will be determined exclusively by the current URL.

**Alternatives:**
- React Router with language-specific routes.
- Single URL structure with client-side language switching.
- Browser language detection combined with persistent language preferences.

**Rationale:**

Language-specific URLs provide clear, shareable, and search-engine-friendly page addresses. Using the URL as the single source of truth eliminates the need to persist language preferences through cookies, local storage, or session storage. It also allows visitors to access the desired language directly.

**Consequences:**
- React Router will manage application routing.
- All public pages will have German and English routes.
- Language selection will navigate to the corresponding localized route.
- The active language will be derived from the URL.
- No persistent client-side language preference will be stored.
- Missing translations will fall back to the corresponding language homepage.
- Language-specific metadata and HTML language attributes must be maintained.

---

### ADR-006: Hosting and Rendering Strategy

**Status:** Accepted

**Context:**

The portfolio will be hosted using the existing Serverdiscounter Web Mini hosting environment. The application must provide search-engine-friendly content while remaining compatible with conventional static web hosting.

**Decision:**

The application will use Static Site Generation (SSG) with React and Vite. HTML files for all public routes will be generated during the production build and deployed as static assets.

No persistent Node.js server will be required in production.

**Alternatives:**
- Client-Side Rendering (CSR)
- Server-Side Rendering (SSR)

**Rationale:**

SSG provides pre-rendered HTML for search engines and visitors while remaining compatible with conventional static web hosting. It combines React's component architecture with the operational simplicity of static deployment.

**Consequences:**
- All public routes must be included in the prerendering configuration.
- The build pipeline must generate route-specific HTML files.
- React will initialize interactive functionality in the browser where required.
- Production hosting will serve static HTML, CSS, JavaScript, and media files.
- No long-running Node.js process will be required.
- Dynamic server-side functionality is outside the initial project scope.

---

### ADR-007: Testing Strategy

**Status:** Accepted

**Context:**

The portfolio requires a maintainable testing strategy to ensure the reliability of individual functions, React components, and complete user-facing workflows. Tests should be integrated into the development workflow and executed automatically through continuous integration.

**Decision:**

The project will use the following testing tools:
- Vitest for unit and integration tests.
- React Testing Library for React component tests.
- Playwright for end-to-end browser tests.

GitHub Actions will execute the automated test suites as part of the CI pipeline.

**Alternatives:**
- Jest
- Cypress
- Manual testing only

**Rationale:**

Vitest integrates naturally with the Vite ecosystem and provides fast test execution. React Testing Library encourages testing components from the user's perspective rather than relying on implementation details. Playwright enables reliable end-to-end testing across real browser environments and supports testing complete user workflows.

**Consequences:**
- Unit and integration tests will be implemented using Vitest.
- React components will be tested using React Testing Library.
- Critical user-facing workflows will be covered by Playwright tests.
- Tests must be executable locally and through GitHub Actions.
- Pull requests must pass the required CI checks before merging.
- Test coverage will be monitored as the project grows.
- Tests should focus on meaningful functionality rather than achieving an arbitrary coverage percentage.