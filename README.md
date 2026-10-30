## Git Commit Conventions

Commit messages follow the conventional format:

`<type>: <description>`

| Prefix | Usage |
|---|---|
| `feat:` | New features or functionality |
| `fix:` | Bug fixes |
| `style:` | Formatting and visual changes without functional impact |
| `refactor:` | Code restructuring without changing behavior |
| `chore:` | Configuration, dependencies and maintenance tasks |
| `docs:` | Documentation changes |
| `test:` | Adding or modifying tests |

### Examples

- `feat: add responsive navigation`
- `fix: correct mobile layout`
- `style: adjust typography`
- `refactor: restructure portfolio components`
- `chore: configure prettier`
- `docs: document project setup`
- `test: add navigation component tests`

## SCSS Architecture

The project follows the **7-1 SCSS architecture** to maintain a scalable,
modular and maintainable stylesheet structure.

### Structure

| Folder | Purpose |
|---|---|
| `abstracts/` | Variables, functions, mixins and placeholders |
| `base/` | Reset, typography and global styles |
| `components/` | Reusable UI component styles |
| `layout/` | Layout structures and page sections |
| `pages/` | Page-specific styles |
| `themes/` | Theme definitions |
| `vendors/` | Third-party stylesheets |

### Conventions

- Use Sass modules (`@use` and `@forward`).
- Avoid deprecated `@import` syntax.
- Keep all SCSS files centralized in `src/styles/`.
- Do not place SCSS files alongside React components.
- Use BEM (Block Element Modifier) for CSS class naming.
- Use `_index.scss` files as public entry points for each folder.
- Import the main stylesheet through `src/main.tsx`.