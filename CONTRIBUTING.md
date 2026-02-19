# Contributing

Thanks for your interest in contributing to Tailwind Playground! Here's how to get started.

## Getting Started

### Prerequisites

- A modern browser (Chrome 111+, Firefox 128+, Safari 16.4+)
- Any static file server (e.g. `npx serve`)

### Setup

```bash
git clone https://github.com/lukeocodes/tailwind-playground.git
cd tailwind-playground
npx serve .
```

Open http://localhost:3000 in your browser.

## Project Structure

```
.
├── index.html       # Main page — layout, Monaco editor, preview iframe
├── app.js           # Application logic — editors, tabs, theme, resizer
├── templates.js     # Canned component templates and shared theme
└── package.json     # Metadata and version (used by Release Please)
```

There is no build step. Everything runs directly in the browser using ES modules and CDN dependencies.

## Development Workflow

1. Fork the repo and create a feature branch from `main`
2. Make your changes
3. Test in both light and dark mode
4. Test responsive viewport controls (mobile, tablet, desktop)
5. Submit a pull request

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/) and [Release Please](https://github.com/googleapis/release-please) for automated releases.

```
feat: add new template for login form
fix: resolve Monaco theme not switching on toggle
docs: update README with deployment instructions
chore: update Monaco editor CDN version
```

## Adding Templates

Templates live in `templates.js`. Each template has:

- `label` — display name in the dropdown
- `description` — short summary
- `css` — Tailwind v4 `@theme` block with dark mode overrides
- `html` — HTML content using Tailwind utility classes

Use semantic color tokens (`bg-surface`, `text-foreground`, `border-border`, etc.) so templates work in both light and dark mode automatically.

## Code Style

- No build tools or transpilers — vanilla JS with ES modules
- Keep bundle size minimal — everything loads from CDN
- Use CSS custom properties for theming
- Prefer semantic HTML

## Submitting Changes

- Keep PRs focused on a single change
- Include a clear description of what and why
- Test in both light and dark mode before submitting
- Ensure the preview renders correctly at all viewport sizes
