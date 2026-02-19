# Tailwind v4 Playground

A browser-based [Tailwind CSS v4](https://tailwindcss.com/) playground with a live preview, Monaco editor, and dark mode. No build step — runs entirely in the browser.

**[Try it live](https://lukeocodes.github.io/tailwind-playground/)**

## Features

- **Monaco Editor** with CSS and HTML tabs — full syntax highlighting, autocomplete, and error detection
- **Live preview** powered by [`@tailwindcss/browser`](https://www.npmjs.com/package/@tailwindcss/browser) (Tailwind v4 JIT in the browser)
- **Light/dark mode** toggle — synced across editor and preview using semantic color tokens
- **Responsive viewport controls** — preview at mobile (375px), tablet (768px), desktop (1024px), or full width
- **Draggable split pane** — resize the editor and preview panels
- **Canned templates** — Design System, Gradient Hero, Split Hero, Dashboard Cards, Pricing Table
- **Comprehensive theme editor** — customize colors, border radius, font sizes, shadows, spacing, and more via CSS
- **WebMCP support** — AI agents can read/write the theme CSS and sandbox HTML via [`navigator.modelContext`](https://webmcp.link/)

## Getting Started

No install required. Clone and serve:

```bash
git clone https://github.com/lukeocodes/tailwind-playground.git
cd tailwind-playground
npx serve .
```

Or just open `index.html` with any static file server.

## How It Works

The playground uses Tailwind CSS v4's browser CDN (`@tailwindcss/browser@4`) which runs the JIT compiler directly in an iframe. When you edit the theme CSS or sandbox HTML, the preview updates live.

### Theme CSS

Edit the `@theme` block to customize your design tokens. Changes apply instantly:

```css
@theme {
  --color-primary: oklch(0.55 0.2 260);
  --radius-lg: 0.5rem;
  --text-base: 1rem;
  --shadow-md: 0 4px 6px -1px oklch(0 0 0 / 0.08);
}
```

Dark mode is handled via semantic color tokens that automatically switch when toggled — no `dark:` prefixes needed in the HTML.

### Sandbox HTML

Write HTML using Tailwind utility classes. Use the semantic tokens from your theme:

```html
<div class="bg-surface text-foreground rounded-lg shadow-md p-6">
  <h1 class="text-2xl font-bold text-primary">Hello</h1>
</div>
```

## WebMCP

The playground exposes tools via the [WebMCP](https://webmcp.link/) standard, allowing AI agents to interact with the site programmatically. Available tools:

| Tool | Description |
|------|-------------|
| `get_theme_css` | Read the current theme CSS |
| `set_theme_css` | Replace the theme CSS and refresh the preview |
| `get_sandbox_html` | Read the current sandbox HTML |
| `set_sandbox_html` | Replace the sandbox HTML and refresh the preview |
| `list_templates` | List available canned templates |
| `select_template` | Load a template by name |

Write tools automatically focus the browser window so the user can see changes. Requires [Chrome Canary 146+](https://www.google.com/chrome/canary/) with the WebMCP flag enabled, or any browser with the [`@mcp-b/global`](https://www.npmjs.com/package/@mcp-b/global) polyfill (included).

## Tech Stack

| Dependency | Source | Purpose |
|------------|--------|---------|
| [Tailwind CSS v4](https://tailwindcss.com/) | CDN | JIT compilation in the browser |
| [Monaco Editor](https://microsoft.github.io/monaco-editor/) | CDN | Code editing |
| [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Google Fonts | Typography |
| [`@mcp-b/global`](https://www.npmjs.com/package/@mcp-b/global) | CDN | WebMCP polyfill |

Zero npm dependencies. Zero build step. ~50KB of application code.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions, coding guidelines, and how to add templates.

## License

[MIT](LICENSE)
