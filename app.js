import { templates } from "./templates.js";

// --- State ---
let activeTab = "css"; // "css" | "sandbox"
let cssEditor = null;
let sandboxEditor = null;
let currentCss = "";
let currentHtml = "";
let updateTimer = null;
let isDark = false;

const DEBOUNCE_MS = 400;

// --- Theme Toggle ---
function initTheme() {
  // Respect system preference on first load
  isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme();

  document.getElementById("theme-toggle").addEventListener("click", () => {
    isDark = !isDark;
    applyTheme();
  });
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

  // Update toggle icon
  const btn = document.getElementById("theme-toggle");
  btn.innerHTML = isDark ? SUN_ICON : MOON_ICON;
  btn.title = isDark ? "Switch to light mode" : "Switch to dark mode";

  // Switch Monaco theme
  if (typeof monaco !== "undefined") {
    monaco.editor.setTheme(isDark ? "pg-dark" : "pg-light");
  }

  // Sync dark class into preview iframe
  const iframe = document.getElementById("preview-frame");
  try {
    const iframeDoc = iframe.contentDocument;
    if (iframeDoc?.documentElement) {
      iframeDoc.documentElement.classList.toggle("dark", isDark);
    }
  } catch (_) {
    // iframe not ready yet, will be set on next full render
  }
}

const MOON_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
const SUN_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

// --- Monaco Setup ---
function initMonaco() {
  return new Promise((resolve) => {
    require.config({
      paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs",
      },
    });
    require(["vs/editor/editor.main"], () => {
      // Dark theme
      monaco.editor.defineTheme("pg-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#0f172a",
          "editor.lineHighlightBackground": "#1e293b",
          "editorGutter.background": "#0f172a",
          "editorWidget.background": "#1e293b",
        },
      });

      // Light theme
      monaco.editor.defineTheme("pg-light", {
        base: "vs",
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#ffffff",
          "editor.lineHighlightBackground": "#f8fafc",
          "editorGutter.background": "#ffffff",
          "editorWidget.background": "#f8fafc",
        },
      });

      const currentTheme = isDark ? "pg-dark" : "pg-light";

      cssEditor = monaco.editor.create(
        document.getElementById("editor-container"),
        {
          value: currentCss,
          language: "css",
          theme: currentTheme,
          minimap: { enabled: false },
          fontSize: 13,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          wordWrap: "on",
          padding: { top: 12 },
          automaticLayout: true,
          tabSize: 2,
        }
      );

      sandboxEditor = monaco.editor.create(
        document.getElementById("sandbox-editor-container"),
        {
          value: currentHtml,
          language: "html",
          theme: currentTheme,
          minimap: { enabled: false },
          fontSize: 13,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          wordWrap: "on",
          padding: { top: 12 },
          automaticLayout: true,
          tabSize: 2,
        }
      );

      cssEditor.onDidChangeModelContent(() => {
        currentCss = cssEditor.getValue();
        scheduleUpdate();
      });

      sandboxEditor.onDidChangeModelContent(() => {
        currentHtml = sandboxEditor.getValue();
        scheduleUpdate();
      });

      resolve();
    });
  });
}

// --- Tab Switching ---
function setupTabs() {
  document.getElementById("tab-css").addEventListener("click", () => activateTab("css"));
  document.getElementById("tab-sandbox").addEventListener("click", () => activateTab("sandbox"));
}

// --- Template Dropdown ---
function setupTemplateDropdown() {
  const select = document.getElementById("template-select");
  for (const key of Object.keys(templates)) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = templates[key].label;
    select.appendChild(opt);
  }

  select.addEventListener("change", () => {
    const t = templates[select.value];
    if (!t) return;
    currentCss = t.css;
    currentHtml = t.html;
    cssEditor?.setValue(currentCss);
    sandboxEditor?.setValue(currentHtml);
    updatePreview();
  });
}

// --- Preview ---
function buildIframeDoc(css, html) {
  const darkClass = isDark ? ' class="dark"' : "";
  return `<!DOCTYPE html>
<html${darkClass}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style type="text/tailwindcss">
${css}
</style>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
</style>
</head>
<body>
${html}
</body>
</html>`;
}

function updatePreview() {
  const iframe = document.getElementById("preview-frame");
  iframe.srcdoc = buildIframeDoc(currentCss, currentHtml);
}

function scheduleUpdate() {
  clearTimeout(updateTimer);
  updateTimer = setTimeout(updatePreview, DEBOUNCE_MS);
}

// --- Resizer ---
function setupResizer() {
  const resizer = document.getElementById("resizer");
  const editorPanel = document.getElementById("editor-panel");
  let dragging = false;

  resizer.addEventListener("mousedown", (e) => {
    e.preventDefault();
    dragging = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const container = document.getElementById("app");
    const rect = container.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    const clamped = Math.min(Math.max(pct, 20), 80);
    editorPanel.style.width = clamped + "%";
    cssEditor?.layout();
    sandboxEditor?.layout();
  });

  window.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  });
}

// --- Responsive Preview ---
function setupResponsiveControls() {
  const btns = document.querySelectorAll("[data-viewport]");
  const frame = document.getElementById("preview-frame");
  const wrapper = document.getElementById("preview-wrapper");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("vp-active"));
      btn.classList.add("vp-active");
      const vp = btn.dataset.viewport;
      if (vp === "full") {
        frame.style.width = "100%";
        wrapper.classList.remove("preview-constrained");
      } else {
        frame.style.width = vp + "px";
        wrapper.classList.add("preview-constrained");
      }
    });
  });
}

// --- Activate a specific tab programmatically ---
function activateTab(tab) {
  activeTab = tab;
  const tabCss = document.getElementById("tab-css");
  const tabSandbox = document.getElementById("tab-sandbox");
  const editorPane = document.getElementById("editor-container");
  const sandboxPane = document.getElementById("sandbox-editor-container");

  tabCss.classList.toggle("tab-active", tab === "css");
  tabSandbox.classList.toggle("tab-active", tab === "sandbox");
  editorPane.classList.toggle("hidden", tab !== "css");
  sandboxPane.classList.toggle("hidden", tab !== "sandbox");

  if (tab === "css") cssEditor?.layout();
  else sandboxEditor?.layout();
}

// --- WebMCP Tool Registration ---
function registerWebMCPTools() {
  if (!navigator.modelContext) return;

  navigator.modelContext.registerTool({
    name: "get_theme_css",
    description:
      "Get the current Tailwind v4 theme CSS. Returns the contents of the theme.css editor, which contains the @theme block with design tokens (colors, border radius, font sizes, shadows, spacing) and dark mode overrides.",
    inputSchema: { type: "object", properties: {} },
    async execute() {
      return {
        content: [{ type: "text", text: currentCss }],
      };
    },
  });

  navigator.modelContext.registerTool({
    name: "set_theme_css",
    description:
      "Replace the Tailwind v4 theme CSS. Accepts a full CSS string containing a @theme block with design tokens and optional .dark overrides. Updates the editor and live preview, then focuses the window so the user can see changes.",
    inputSchema: {
      type: "object",
      properties: {
        css: {
          type: "string",
          description:
            "Complete CSS string with @theme { ... } block and optional .dark { ... } overrides",
        },
      },
      required: ["css"],
    },
    async execute({ css }) {
      currentCss = css;
      cssEditor?.setValue(currentCss);
      activateTab("css");
      updatePreview();
      window.focus();
      return {
        content: [
          { type: "text", text: "Theme CSS updated and preview refreshed." },
        ],
      };
    },
  });

  navigator.modelContext.registerTool({
    name: "get_sandbox_html",
    description:
      "Get the current sandbox HTML. Returns the contents of the sandbox.html editor, which contains HTML using Tailwind utility classes rendered in the live preview.",
    inputSchema: { type: "object", properties: {} },
    async execute() {
      return {
        content: [{ type: "text", text: currentHtml }],
      };
    },
  });

  navigator.modelContext.registerTool({
    name: "set_sandbox_html",
    description:
      "Replace the sandbox HTML. Accepts an HTML string using Tailwind utility classes. Updates the editor and live preview, then focuses the window so the user can see changes.",
    inputSchema: {
      type: "object",
      properties: {
        html: {
          type: "string",
          description:
            "HTML string using Tailwind utility classes. Use semantic tokens like bg-surface, text-foreground, border-border for dark mode compatibility.",
        },
      },
      required: ["html"],
    },
    async execute({ html }) {
      currentHtml = html;
      sandboxEditor?.setValue(currentHtml);
      activateTab("sandbox");
      updatePreview();
      window.focus();
      return {
        content: [
          {
            type: "text",
            text: "Sandbox HTML updated and preview refreshed.",
          },
        ],
      };
    },
  });

  navigator.modelContext.registerTool({
    name: "list_templates",
    description:
      "List available canned templates. Returns template names and descriptions that can be loaded with the select_template tool.",
    inputSchema: { type: "object", properties: {} },
    async execute() {
      const list = Object.entries(templates).map(([key, t]) => ({
        name: key,
        label: t.label,
        description: t.description,
      }));
      return {
        content: [{ type: "text", text: JSON.stringify(list, null, 2) }],
      };
    },
  });

  navigator.modelContext.registerTool({
    name: "select_template",
    description:
      "Load a canned template by name. Replaces both the theme CSS and sandbox HTML with the template content, updates the dropdown, editors, and live preview, then focuses the window.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description:
            'Template name from list_templates (e.g. "Design System", "Hero — Gradient")',
        },
      },
      required: ["name"],
    },
    async execute({ name }) {
      const t = templates[name];
      if (!t) {
        const available = Object.keys(templates).join(", ");
        return {
          content: [
            {
              type: "text",
              text: `Template "${name}" not found. Available: ${available}`,
            },
          ],
        };
      }
      currentCss = t.css;
      currentHtml = t.html;
      cssEditor?.setValue(currentCss);
      sandboxEditor?.setValue(currentHtml);
      document.getElementById("template-select").value = name;
      updatePreview();
      window.focus();
      return {
        content: [
          {
            type: "text",
            text: `Template "${t.label}" loaded. Both theme CSS and sandbox HTML updated.`,
          },
        ],
      };
    },
  });
}

// --- Init ---
async function boot() {
  // Load default template
  const defaultKey = "Design System";
  const t = templates[defaultKey];
  currentCss = t.css;
  currentHtml = t.html;

  initTheme();
  setupTabs();
  setupTemplateDropdown();
  setupResizer();
  setupResponsiveControls();
  await initMonaco();
  updatePreview();
  registerWebMCPTools();
}

boot();
