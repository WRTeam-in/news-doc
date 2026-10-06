---
id: change-fonts
title: Change Fonts
---

# How to Change Fonts

News web uses **Zilla Slab** (Google Fonts) as the global font. It is self-hosted at build time via `next/font` — no external CDN requests at runtime.

---

## How It Works

| Step | What happens | File |
|------|-------------|------|
| 1. Import | `Zilla_Slab` is imported from `next/font/google` | `src/lib/fonts.ts` (line 1) |
| 2. Configure | `primaryFont` loads the font (weights 400–700, latin subset) and exposes it as the CSS variable `--font-primary` | `src/lib/fonts.ts` (lines 6–11) |
| 3. Apply | `primaryFont.variable` is added to `<html>`; `primaryFont.variable` / `primaryFont.className` are added to `<main>` | `src/pages/_document.tsx`, `src/pages/_app.tsx` |
| 4. Use | `body { font-family: var(--font-primary) }` and the Tailwind `font-primary` / `font-heading` utilities read the same variable | `src/styles/globals.css` |

Because every style reads `--font-primary`, you **only need to edit `src/lib/fonts.ts`** to change the font across the whole site.

---

## How to Change the Font

Open `src/lib/fonts.ts`.

### Step 1 — Replace the Import (line 1)

```ts
// Before
import { Zilla_Slab } from "next/font/google";

// After (example: Poppins)
import { Poppins } from "next/font/google";
```

:::tip
Font names with spaces use underscores in `next/font/google` — e.g. `Open Sans` → `Open_Sans`, `Zilla Slab` → `Zilla_Slab`.
:::

### Step 2 — Update the `primaryFont` Definition (lines 6–11)

Replace `Zilla_Slab(...)` with your font. **Keep the export name `primaryFont` and `variable: "--font-primary"` unchanged** — `_app.tsx`, `_document.tsx` and `globals.css` depend on them.

```ts
// Before
export const primaryFont = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-primary",
});

// After (example: Poppins)
export const primaryFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-primary",
});
```

:::caution
Only list `weight` values the font actually provides on [Google Fonts](https://fonts.google.com), otherwise the build fails. For variable fonts (e.g. `Inter`) you can omit `weight`.
:::

:::note
Only the weights the UI uses (400, 500, 600, 700) are loaded, to avoid layout shift from late-arriving font files. Italic is not loaded — the browser synthesizes it. To load real italics, add `style: ["normal", "italic"]` (only if the font has italic).
:::

### Step 3 — Rebuild

Restart the dev server (`npm run dev`) or rebuild your site so `next/font` downloads and self-hosts the new font.

No changes are needed in `_app.tsx`, `_document.tsx`, `globals.css` or any component.

---

:::info
Any font available on [Google Fonts](https://fonts.google.com) can be imported via `next/font/google`. `next/font` self-hosts it at build time — no runtime network request to Google CDN.
:::
