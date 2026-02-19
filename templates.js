// Canned component templates for the Tailwind v4 Playground

const SHARED_THEME = `/* ═══════════════════════════════════════════
   Brand Colors
   ═══════════════════════════════════════════ */
  --color-primary: oklch(0.55 0.2 260);
  --color-primary-hover: oklch(0.48 0.22 260);
  --color-primary-light: oklch(0.92 0.05 260);

  --color-secondary: oklch(0.6 0.15 300);
  --color-secondary-hover: oklch(0.52 0.17 300);
  --color-secondary-light: oklch(0.92 0.05 300);

  --color-accent: oklch(0.75 0.15 85);
  --color-accent-hover: oklch(0.68 0.17 85);
  --color-accent-light: oklch(0.94 0.05 85);

/* ═══════════════════════════════════════════
   Semantic Colors
   ═══════════════════════════════════════════ */
  --color-success: oklch(0.6 0.18 145);
  --color-success-light: oklch(0.95 0.03 145);
  --color-warning: oklch(0.75 0.15 75);
  --color-warning-light: oklch(0.95 0.03 75);
  --color-danger: oklch(0.55 0.2 25);
  --color-danger-light: oklch(0.95 0.03 25);
  --color-info: oklch(0.6 0.15 230);
  --color-info-light: oklch(0.95 0.03 230);

/* ═══════════════════════════════════════════
   Surface & Content (auto-switch in dark)
   ═══════════════════════════════════════════ */
  --color-surface: oklch(0.97 0 0);
  --color-raised: #ffffff;
  --color-sunken: oklch(0.95 0 0);
  --color-foreground: oklch(0.14 0.005 260);
  --color-foreground-muted: oklch(0.45 0.01 260);
  --color-border: oklch(0.9 0 0);
  --color-ring: oklch(0.55 0.2 260 / 0.3);

/* ═══════════════════════════════════════════
   Typography
   ═══════════════════════════════════════════ */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --text-xs: 0.75rem;
  --text-xs--line-height: 1rem;
  --text-sm: 0.875rem;
  --text-sm--line-height: 1.25rem;
  --text-base: 1rem;
  --text-base--line-height: 1.5rem;
  --text-lg: 1.125rem;
  --text-lg--line-height: 1.75rem;
  --text-xl: 1.25rem;
  --text-xl--line-height: 1.75rem;
  --text-2xl: 1.5rem;
  --text-2xl--line-height: 2rem;
  --text-3xl: 1.875rem;
  --text-3xl--line-height: 2.25rem;
  --text-4xl: 2.25rem;
  --text-4xl--line-height: 2.5rem;
  --text-5xl: 3rem;
  --text-5xl--line-height: 1.15;

/* ═══════════════════════════════════════════
   Border Radius
   ═══════════════════════════════════════════ */
  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-full: 9999px;

/* ═══════════════════════════════════════════
   Shadows
   ═══════════════════════════════════════════ */
  --shadow-xs: 0 1px 2px oklch(0 0 0 / 0.04);
  --shadow-sm: 0 1px 3px oklch(0 0 0 / 0.08), 0 1px 2px oklch(0 0 0 / 0.06);
  --shadow-md: 0 4px 6px -1px oklch(0 0 0 / 0.08), 0 2px 4px -2px oklch(0 0 0 / 0.06);
  --shadow-lg: 0 10px 15px -3px oklch(0 0 0 / 0.08), 0 4px 6px -4px oklch(0 0 0 / 0.06);
  --shadow-xl: 0 20px 25px -5px oklch(0 0 0 / 0.08), 0 8px 10px -6px oklch(0 0 0 / 0.06);

/* ═══════════════════════════════════════════
   Spacing base unit (p-4 = 4 × 0.25rem = 1rem)
   ═══════════════════════════════════════════ */
  --spacing: 0.25rem;`;

const DARK_OVERRIDES = `
/* ═══════════════════════════════════════════
   Dark Mode — override surface & content
   ═══════════════════════════════════════════ */
.dark {
  --color-surface: oklch(0.13 0.015 260);
  --color-raised: oklch(0.18 0.015 260);
  --color-sunken: oklch(0.1 0.015 260);
  --color-foreground: oklch(0.93 0 0);
  --color-foreground-muted: oklch(0.6 0 0);
  --color-border: oklch(0.28 0.02 260);
  --color-ring: oklch(0.6 0.2 260 / 0.4);

  --color-primary-light: oklch(0.22 0.06 260);
  --color-secondary-light: oklch(0.22 0.06 300);
  --color-accent-light: oklch(0.24 0.06 85);
  --color-success-light: oklch(0.2 0.04 145);
  --color-warning-light: oklch(0.22 0.04 75);
  --color-danger-light: oklch(0.2 0.04 25);
  --color-info-light: oklch(0.2 0.04 230);

  --shadow-xs: 0 1px 2px oklch(0 0 0 / 0.2);
  --shadow-sm: 0 1px 3px oklch(0 0 0 / 0.3), 0 1px 2px oklch(0 0 0 / 0.2);
  --shadow-md: 0 4px 6px -1px oklch(0 0 0 / 0.3), 0 2px 4px -2px oklch(0 0 0 / 0.2);
  --shadow-lg: 0 10px 15px -3px oklch(0 0 0 / 0.3), 0 4px 6px -4px oklch(0 0 0 / 0.2);
  --shadow-xl: 0 20px 25px -5px oklch(0 0 0 / 0.3), 0 8px 10px -6px oklch(0 0 0 / 0.2);
}`;

function themeBlock(inner) {
  return `@theme {\n${inner}\n}\n${DARK_OVERRIDES}`;
}

export const templates = {
  "Design System": {
    label: "Design System",
    description: "Colors, typography, buttons, alerts, forms, and more",
    css: themeBlock(SHARED_THEME),
    html: `<div class="min-h-screen bg-surface text-foreground font-sans">
  <div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">

    <!-- Header -->
    <header class="space-y-2">
      <h1 class="text-3xl sm:text-4xl font-bold">Design System</h1>
      <p class="text-foreground-muted text-lg">Tailwind CSS v4 component reference</p>
    </header>

    <!-- Color Palette -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Colors</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-primary shadow-xs"></div><p class="text-sm font-medium">Primary</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-primary-light shadow-xs"></div><p class="text-sm font-medium">Primary Light</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-secondary shadow-xs"></div><p class="text-sm font-medium">Secondary</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-secondary-light shadow-xs"></div><p class="text-sm font-medium">Secondary Light</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-accent shadow-xs"></div><p class="text-sm font-medium">Accent</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-success shadow-xs"></div><p class="text-sm font-medium">Success</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-warning shadow-xs"></div><p class="text-sm font-medium">Warning</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-danger shadow-xs"></div><p class="text-sm font-medium">Danger</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-info shadow-xs"></div><p class="text-sm font-medium">Info</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-sunken border border-border shadow-xs"></div><p class="text-sm font-medium">Sunken</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-foreground-muted shadow-xs"></div><p class="text-sm font-medium">Muted</p></div>
        <div class="space-y-1.5"><div class="h-16 rounded-lg bg-border shadow-xs"></div><p class="text-sm font-medium">Border</p></div>
      </div>
    </section>

    <!-- Border Radius -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Border Radius</h2>
      <div class="bg-raised rounded-xl border border-border p-6">
        <div class="flex flex-wrap gap-4 items-end">
          <div class="text-center space-y-2"><div class="w-16 h-16 bg-primary rounded-xs"></div><p class="text-xs text-foreground-muted">xs</p></div>
          <div class="text-center space-y-2"><div class="w-16 h-16 bg-primary rounded-sm"></div><p class="text-xs text-foreground-muted">sm</p></div>
          <div class="text-center space-y-2"><div class="w-16 h-16 bg-primary rounded-md"></div><p class="text-xs text-foreground-muted">md</p></div>
          <div class="text-center space-y-2"><div class="w-16 h-16 bg-primary rounded-lg"></div><p class="text-xs text-foreground-muted">lg</p></div>
          <div class="text-center space-y-2"><div class="w-16 h-16 bg-primary rounded-xl"></div><p class="text-xs text-foreground-muted">xl</p></div>
          <div class="text-center space-y-2"><div class="w-16 h-16 bg-primary rounded-2xl"></div><p class="text-xs text-foreground-muted">2xl</p></div>
          <div class="text-center space-y-2"><div class="w-16 h-16 bg-primary rounded-3xl"></div><p class="text-xs text-foreground-muted">3xl</p></div>
          <div class="text-center space-y-2"><div class="w-16 h-16 bg-primary rounded-full"></div><p class="text-xs text-foreground-muted">full</p></div>
        </div>
      </div>
    </section>

    <!-- Shadows -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Shadows</h2>
      <div class="bg-raised rounded-xl border border-border p-6">
        <div class="flex flex-wrap gap-6 items-end">
          <div class="text-center space-y-3"><div class="w-20 h-20 bg-raised rounded-lg shadow-xs border border-border"></div><p class="text-xs text-foreground-muted">xs</p></div>
          <div class="text-center space-y-3"><div class="w-20 h-20 bg-raised rounded-lg shadow-sm border border-border"></div><p class="text-xs text-foreground-muted">sm</p></div>
          <div class="text-center space-y-3"><div class="w-20 h-20 bg-raised rounded-lg shadow-md"></div><p class="text-xs text-foreground-muted">md</p></div>
          <div class="text-center space-y-3"><div class="w-20 h-20 bg-raised rounded-lg shadow-lg"></div><p class="text-xs text-foreground-muted">lg</p></div>
          <div class="text-center space-y-3"><div class="w-20 h-20 bg-raised rounded-lg shadow-xl"></div><p class="text-xs text-foreground-muted">xl</p></div>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Typography</h2>
      <div class="bg-raised rounded-xl border border-border p-6 space-y-3">
        <p class="text-5xl font-bold">Heading 1</p>
        <p class="text-4xl font-bold">Heading 2</p>
        <p class="text-3xl font-semibold">Heading 3</p>
        <p class="text-2xl font-semibold">Heading 4</p>
        <p class="text-xl font-medium">Heading 5</p>
        <p class="text-lg font-medium">Heading 6</p>
        <hr class="border-border">
        <p class="text-base">Body — The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</p>
        <p class="text-sm text-foreground-muted">Small — The quick brown fox jumps over the lazy dog.</p>
        <p class="text-xs text-foreground-muted">Extra Small — The quick brown fox jumps over the lazy dog.</p>
        <p class="font-mono text-sm bg-sunken px-3 py-2 rounded-md">Monospace — const greeting = "Hello, World!";</p>
      </div>
    </section>

    <!-- Font Size Scale -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Font Size Scale</h2>
      <div class="bg-raised rounded-xl border border-border p-6 space-y-2">
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">xs</span><span class="text-xs">0.75rem — The quick brown fox</span></div>
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">sm</span><span class="text-sm">0.875rem — The quick brown fox</span></div>
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">base</span><span class="text-base">1rem — The quick brown fox</span></div>
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">lg</span><span class="text-lg">1.125rem — The quick brown fox</span></div>
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">xl</span><span class="text-xl">1.25rem — The quick brown fox</span></div>
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">2xl</span><span class="text-2xl">1.5rem — The quick brown fox</span></div>
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">3xl</span><span class="text-3xl">1.875rem — Quick brown</span></div>
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">4xl</span><span class="text-4xl">2.25rem — Quick</span></div>
        <div class="flex items-baseline gap-3"><span class="text-xs text-foreground-muted w-12 shrink-0">5xl</span><span class="text-5xl">3rem — Quick</span></div>
      </div>
    </section>

    <!-- Prose -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Prose</h2>
      <div class="bg-raised rounded-xl border border-border p-6 space-y-4 leading-relaxed">
        <p>This is a paragraph of <strong>body text</strong> demonstrating how prose looks. It includes <em>italic text</em>, <a href="#" class="text-primary underline hover:text-primary-hover">inline links</a>, and <code class="bg-sunken text-sm px-1.5 py-0.5 rounded-md font-mono">inline code</code>.</p>
        <blockquote class="border-l-4 border-primary pl-4 italic text-foreground-muted">"Good design is as little design as possible." — Dieter Rams</blockquote>
        <ul class="list-disc pl-6 space-y-1">
          <li>First item in an unordered list</li>
          <li>Second item with more detail</li>
          <li>Third item to show spacing</li>
        </ul>
        <ol class="list-decimal pl-6 space-y-1">
          <li>First ordered item</li>
          <li>Second ordered item</li>
          <li>Third ordered item</li>
        </ol>
      </div>
    </section>

    <!-- Buttons -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Buttons</h2>
      <div class="bg-raised rounded-xl border border-border p-6 space-y-6">
        <div>
          <p class="text-sm font-medium text-foreground-muted mb-3">Solid</p>
          <div class="flex flex-wrap gap-3">
            <button class="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors text-sm">Primary</button>
            <button class="px-4 py-2 rounded-lg bg-secondary text-white font-medium hover:bg-secondary-hover transition-colors text-sm">Secondary</button>
            <button class="px-4 py-2 rounded-lg bg-accent text-foreground font-medium hover:bg-accent-hover transition-colors text-sm">Accent</button>
            <button class="px-4 py-2 rounded-lg bg-danger text-white font-medium hover:brightness-110 transition-all text-sm">Danger</button>
            <button class="px-4 py-2 rounded-lg bg-sunken text-foreground border border-border font-medium hover:bg-border transition-colors text-sm">Neutral</button>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-foreground-muted mb-3">Outline</p>
          <div class="flex flex-wrap gap-3">
            <button class="px-4 py-2 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors text-sm">Primary</button>
            <button class="px-4 py-2 rounded-lg border-2 border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition-colors text-sm">Secondary</button>
            <button class="px-4 py-2 rounded-lg border-2 border-danger text-danger font-medium hover:bg-danger hover:text-white transition-colors text-sm">Danger</button>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-foreground-muted mb-3">Ghost</p>
          <div class="flex flex-wrap gap-3">
            <button class="px-4 py-2 rounded-lg text-primary font-medium hover:bg-primary-light transition-colors text-sm">Primary</button>
            <button class="px-4 py-2 rounded-lg text-secondary font-medium hover:bg-secondary-light transition-colors text-sm">Secondary</button>
            <button class="px-4 py-2 rounded-lg text-danger font-medium hover:bg-danger-light transition-colors text-sm">Danger</button>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-foreground-muted mb-3">Sizes</p>
          <div class="flex flex-wrap items-center gap-3">
            <button class="px-3 py-1 rounded-md text-xs bg-primary text-white font-medium hover:bg-primary-hover transition-colors">Small</button>
            <button class="px-4 py-2 rounded-lg text-sm bg-primary text-white font-medium hover:bg-primary-hover transition-colors">Medium</button>
            <button class="px-6 py-3 rounded-xl text-base bg-primary text-white font-medium hover:bg-primary-hover transition-colors">Large</button>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-foreground-muted mb-3">States</p>
          <div class="flex flex-wrap gap-3 items-center">
            <button class="px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm">Default</button>
            <button class="px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm opacity-50 cursor-not-allowed" disabled>Disabled</button>
            <button class="px-4 py-2 rounded-lg bg-primary text-white font-medium text-sm w-full sm:w-auto">Full Width (sm: auto)</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Alerts -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Alerts</h2>
      <div class="space-y-3">
        <div class="flex items-start gap-3 p-4 rounded-xl bg-info-light border border-info/20">
          <svg class="w-5 h-5 text-info shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div><p class="font-medium text-info">Info</p><p class="text-sm">This is an informational message for the user.</p></div>
        </div>
        <div class="flex items-start gap-3 p-4 rounded-xl bg-success-light border border-success/20">
          <svg class="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div><p class="font-medium text-success">Success</p><p class="text-sm">Operation completed successfully.</p></div>
        </div>
        <div class="flex items-start gap-3 p-4 rounded-xl bg-warning-light border border-warning/20">
          <svg class="w-5 h-5 text-warning shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
          <div><p class="font-medium text-warning">Warning</p><p class="text-sm">Please review before continuing.</p></div>
        </div>
        <div class="flex items-start gap-3 p-4 rounded-xl bg-danger-light border border-danger/20">
          <svg class="w-5 h-5 text-danger shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div><p class="font-medium text-danger">Error</p><p class="text-sm">Something went wrong. Please try again.</p></div>
        </div>
      </div>
    </section>

    <!-- Labels / Badges -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Labels &amp; Badges</h2>
      <div class="bg-raised rounded-xl border border-border p-6 space-y-4">
        <div class="flex flex-wrap gap-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">Primary</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-white">Secondary</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-foreground">Accent</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success text-white">Success</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning text-foreground">Warning</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger text-white">Danger</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-info text-white">Info</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">Soft Primary</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-light text-success">Soft Success</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-danger-light text-danger">Soft Danger</span>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-border text-foreground-muted">Outlined</span>
        </div>
      </div>
    </section>

    <!-- Forms -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Forms</h2>
      <div class="bg-raised rounded-xl border border-border p-6">
        <form class="space-y-5" onsubmit="return false">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="block text-sm font-medium">First Name</label>
              <input type="text" placeholder="Jane" class="w-full px-3 py-2 rounded-lg border border-border bg-raised text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors placeholder:text-foreground-muted/50">
            </div>
            <div class="space-y-1.5">
              <label class="block text-sm font-medium">Last Name</label>
              <input type="text" placeholder="Doe" class="w-full px-3 py-2 rounded-lg border border-border bg-raised text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors placeholder:text-foreground-muted/50">
            </div>
          </div>
          <div class="space-y-1.5">
            <label class="block text-sm font-medium">Email</label>
            <input type="email" placeholder="jane@example.com" class="w-full px-3 py-2 rounded-lg border border-border bg-raised text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors placeholder:text-foreground-muted/50">
          </div>
          <div class="space-y-1.5">
            <label class="block text-sm font-medium">Password</label>
            <input type="password" placeholder="••••••••" class="w-full px-3 py-2 rounded-lg border border-border bg-raised text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors placeholder:text-foreground-muted/50">
            <p class="text-xs text-foreground-muted">Must be at least 8 characters.</p>
          </div>
          <div class="space-y-1.5">
            <label class="block text-sm font-medium">Bio</label>
            <textarea rows="3" placeholder="Tell us about yourself..." class="w-full px-3 py-2 rounded-lg border border-border bg-raised text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors resize-y placeholder:text-foreground-muted/50"></textarea>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="block text-sm font-medium">Role</label>
              <select class="w-full px-3 py-2 rounded-lg border border-border bg-raised text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors">
                <option>Select a role…</option>
                <option>Designer</option>
                <option>Developer</option>
                <option>Manager</option>
              </select>
            </div>
            <div class="space-y-1.5">
              <label class="block text-sm font-medium">Experience</label>
              <select class="w-full px-3 py-2 rounded-lg border border-border bg-raised text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors">
                <option>Select…</option>
                <option>Junior (0-2 yrs)</option>
                <option>Mid (3-5 yrs)</option>
                <option>Senior (6+ yrs)</option>
              </select>
            </div>
          </div>
          <div class="space-y-1.5">
            <label class="block text-sm font-medium">Upload Avatar</label>
            <input type="file" class="w-full text-sm text-foreground-muted file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary-hover file:cursor-pointer file:transition-colors">
          </div>
          <fieldset class="space-y-2">
            <legend class="text-sm font-medium">Notifications</legend>
            <label class="flex items-center gap-2 text-sm"><input type="checkbox" class="w-4 h-4 accent-primary rounded" checked><span>Email notifications</span></label>
            <label class="flex items-center gap-2 text-sm"><input type="checkbox" class="w-4 h-4 accent-primary rounded"><span>SMS notifications</span></label>
            <label class="flex items-center gap-2 text-sm"><input type="checkbox" class="w-4 h-4 accent-primary rounded"><span>Push notifications</span></label>
          </fieldset>
          <fieldset class="space-y-2">
            <legend class="text-sm font-medium">Plan</legend>
            <label class="flex items-center gap-2 text-sm"><input type="radio" name="plan" class="w-4 h-4 accent-primary"><span>Free</span></label>
            <label class="flex items-center gap-2 text-sm"><input type="radio" name="plan" class="w-4 h-4 accent-primary" checked><span>Pro — $9/mo</span></label>
            <label class="flex items-center gap-2 text-sm"><input type="radio" name="plan" class="w-4 h-4 accent-primary"><span>Enterprise — Contact us</span></label>
          </fieldset>
          <div class="space-y-1.5">
            <label class="block text-sm font-medium">Volume</label>
            <input type="range" min="0" max="100" value="60" class="w-full accent-primary">
          </div>
          <div class="flex items-center gap-3 pt-2">
            <button type="submit" class="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors text-sm">Save Changes</button>
            <button type="reset" class="px-4 py-2 rounded-lg border border-border text-foreground font-medium hover:bg-sunken transition-colors text-sm">Cancel</button>
          </div>
        </form>
      </div>
    </section>

  </div>
</div>`
  },

  "Hero — Gradient": {
    label: "Hero — Gradient",
    description: "Bold gradient hero with CTA buttons",
    css: themeBlock(`${SHARED_THEME}

  --color-glow-a: oklch(0.65 0.2 265);
  --color-glow-b: oklch(0.7 0.2 330);`),
    html: `<div class="min-h-screen bg-sunken flex items-center justify-center px-4">
  <div class="text-center max-w-3xl mx-auto space-y-8">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-raised text-foreground-muted text-sm border border-border">
      <span class="w-2 h-2 rounded-full bg-success animate-pulse"></span>
      Now in public beta
    </div>
    <h1 class="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-glow-a via-glow-b to-glow-a bg-clip-text text-transparent leading-tight">
      Build faster.<br>Ship smarter.
    </h1>
    <p class="text-lg sm:text-xl text-foreground-muted max-w-xl mx-auto leading-relaxed">
      The modern developer platform that helps you go from idea to production in record time.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="px-8 py-3 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary-hover transition-colors shadow-lg">
        Get Started Free
      </button>
      <button class="px-8 py-3 rounded-xl border border-border text-foreground font-semibold text-lg hover:bg-raised transition-colors">
        View Demo &rarr;
      </button>
    </div>
    <div class="pt-8 flex items-center justify-center gap-6 text-sm text-foreground-muted">
      <span>No credit card required</span>
      <span class="w-1 h-1 rounded-full bg-border"></span>
      <span>Free forever plan</span>
      <span class="w-1 h-1 rounded-full bg-border"></span>
      <span>Cancel anytime</span>
    </div>
  </div>
</div>`
  },

  "Hero — Split Image": {
    label: "Hero — Split Image",
    description: "Two-column hero with image placeholder",
    css: themeBlock(SHARED_THEME),
    html: `<div class="min-h-screen bg-raised">
  <nav class="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
    <span class="text-xl font-bold text-primary">Acme</span>
    <div class="hidden sm:flex items-center gap-6 text-sm text-foreground-muted">
      <a href="#" class="hover:text-primary transition-colors">Features</a>
      <a href="#" class="hover:text-primary transition-colors">Pricing</a>
      <a href="#" class="hover:text-primary transition-colors">Docs</a>
      <button class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors">Sign Up</button>
    </div>
  </nav>
  <div class="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <span class="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium">New Release v2.0</span>
      <h1 class="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
        Design with<br>confidence
      </h1>
      <p class="text-lg text-foreground-muted leading-relaxed">
        Create beautiful, responsive interfaces without writing CSS from scratch. Built for teams who move fast.
      </p>
      <div class="flex gap-3">
        <button class="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors">Start Building</button>
        <button class="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-sunken transition-colors">Learn More</button>
      </div>
    </div>
    <div class="bg-primary-light rounded-2xl aspect-video flex items-center justify-center border border-primary/10">
      <span class="text-primary/40 text-lg font-medium">Your Image Here</span>
    </div>
  </div>
</div>`
  },

  "Dashboard Cards": {
    label: "Dashboard Cards",
    description: "Stats cards and data display components",
    css: themeBlock(SHARED_THEME),
    html: `<div class="min-h-screen bg-surface p-4 sm:p-8 font-sans">
  <div class="max-w-5xl mx-auto space-y-6">
    <h1 class="text-2xl font-bold text-foreground">Dashboard</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-raised rounded-xl p-5 shadow-sm border border-border">
        <p class="text-sm text-foreground-muted">Revenue</p>
        <p class="text-2xl font-bold mt-1">$45,231</p>
        <p class="text-sm text-success mt-2">+20.1% from last month</p>
      </div>
      <div class="bg-raised rounded-xl p-5 shadow-sm border border-border">
        <p class="text-sm text-foreground-muted">Users</p>
        <p class="text-2xl font-bold mt-1">2,350</p>
        <p class="text-sm text-success mt-2">+180 this week</p>
      </div>
      <div class="bg-raised rounded-xl p-5 shadow-sm border border-border">
        <p class="text-sm text-foreground-muted">Orders</p>
        <p class="text-2xl font-bold mt-1">1,247</p>
        <p class="text-sm text-danger mt-2">-4.5% from last month</p>
      </div>
      <div class="bg-raised rounded-xl p-5 shadow-sm border border-border">
        <p class="text-sm text-foreground-muted">Conversion</p>
        <p class="text-2xl font-bold mt-1">3.2%</p>
        <p class="text-sm text-success mt-2">+0.3% from last month</p>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="lg:col-span-2 bg-raised rounded-xl shadow-sm border border-border p-5">
        <h2 class="font-semibold mb-4">Recent Activity</h2>
        <div class="divide-y divide-border">
          <div class="flex items-center justify-between py-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-primary-light text-primary flex items-center justify-center text-sm font-bold">JD</div>
              <div><p class="text-sm font-medium">Jane Doe</p><p class="text-xs text-foreground-muted">Upgraded to Pro</p></div>
            </div>
            <span class="text-xs text-foreground-muted">2m ago</span>
          </div>
          <div class="flex items-center justify-between py-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-success-light text-success flex items-center justify-center text-sm font-bold">AS</div>
              <div><p class="text-sm font-medium">Alex Smith</p><p class="text-xs text-foreground-muted">Completed onboarding</p></div>
            </div>
            <span class="text-xs text-foreground-muted">15m ago</span>
          </div>
          <div class="flex items-center justify-between py-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-danger-light text-danger flex items-center justify-center text-sm font-bold">MK</div>
              <div><p class="text-sm font-medium">Maria Kim</p><p class="text-xs text-foreground-muted">Cancelled subscription</p></div>
            </div>
            <span class="text-xs text-foreground-muted">1h ago</span>
          </div>
        </div>
      </div>
      <div class="bg-raised rounded-xl shadow-sm border border-border p-5">
        <h2 class="font-semibold mb-4">Quick Actions</h2>
        <div class="space-y-2">
          <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-sunken text-sm font-medium transition-colors border border-border">+ New Project</button>
          <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-sunken text-sm font-medium transition-colors border border-border">+ Invite Member</button>
          <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-sunken text-sm font-medium transition-colors border border-border">+ Create Report</button>
        </div>
      </div>
    </div>
  </div>
</div>`
  },

  "Pricing Table": {
    label: "Pricing Table",
    description: "Three-tier pricing comparison",
    css: themeBlock(SHARED_THEME),
    html: `<div class="min-h-screen bg-surface px-4 py-16 font-sans">
  <div class="max-w-5xl mx-auto">
    <div class="text-center space-y-4 mb-12">
      <h1 class="text-4xl font-bold">Simple, transparent pricing</h1>
      <p class="text-lg text-foreground-muted max-w-xl mx-auto">Choose the plan that fits your needs. Upgrade or downgrade at any time.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="rounded-2xl border border-border bg-raised p-6 sm:p-8 space-y-6">
        <div><h3 class="text-lg font-semibold">Free</h3><p class="text-sm text-foreground-muted mt-1">For individuals getting started</p></div>
        <div class="flex items-baseline gap-1"><span class="text-4xl font-bold">$0</span><span class="text-foreground-muted">/mo</span></div>
        <button class="w-full py-2.5 rounded-lg border border-border font-medium text-sm hover:bg-sunken transition-colors">Get Started</button>
        <ul class="space-y-3 text-sm">
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>1 project</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Basic analytics</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Community support</li>
        </ul>
      </div>
      <div class="rounded-2xl border-2 border-primary bg-raised p-6 sm:p-8 space-y-6 relative shadow-lg">
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-white text-xs font-semibold rounded-full">Most Popular</span>
        <div><h3 class="text-lg font-semibold">Pro</h3><p class="text-sm text-foreground-muted mt-1">For growing teams</p></div>
        <div class="flex items-baseline gap-1"><span class="text-4xl font-bold">$29</span><span class="text-foreground-muted">/mo</span></div>
        <button class="w-full py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-hover transition-colors">Get Started</button>
        <ul class="space-y-3 text-sm">
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Unlimited projects</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Advanced analytics</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Priority support</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Custom domains</li>
        </ul>
      </div>
      <div class="rounded-2xl border border-border bg-raised p-6 sm:p-8 space-y-6">
        <div><h3 class="text-lg font-semibold">Enterprise</h3><p class="text-sm text-foreground-muted mt-1">For large organizations</p></div>
        <div class="flex items-baseline gap-1"><span class="text-4xl font-bold">$99</span><span class="text-foreground-muted">/mo</span></div>
        <button class="w-full py-2.5 rounded-lg border border-border font-medium text-sm hover:bg-sunken transition-colors">Contact Sales</button>
        <ul class="space-y-3 text-sm">
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Everything in Pro</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>SSO &amp; SAML</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Dedicated support</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>SLA guarantee</li>
        </ul>
      </div>
    </div>
  </div>
</div>`
  }
};
