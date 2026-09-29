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
| 1. Import | `Zilla_Slab` is imported from `next/font/google` | `src/pages/_app.tsx` (line 8) |
| 2. Configure | `primaryFont` loads the font (weights 300–700, normal + italic, latin subset) and exposes it as the CSS variable `--font-primary` | `src/pages/_app.tsx` (lines 24–30) |
| 3. Apply | `primaryFont.variable` / `primaryFont.className` are added to `<body>` and `<main>` | `src/pages/_app.tsx` |
| 4. Use | `body { font-family: var(--font-primary) }` and the Tailwind `font-primary` / `font-heading` utilities read the same variable | `src/styles/globals.css` |

Because every style reads `--font-primary`, you **only need to edit `src/pages/_app.tsx`** to change the font across the whole site.

---

## How to Change the Font

Open `src/pages/_app.tsx`.

### Step 1 — Replace the Import (line 8)

```ts
// Before
import { Zilla_Slab } from "next/font/google";

// After (example: Poppins)
import { Poppins } from "next/font/google";
```

:::tip
Font names with spaces use underscores in `next/font/google` — e.g. `Open Sans` → `Open_Sans`, `Zilla Slab` → `Zilla_Slab`.
:::

### Step 2 — Update the `primaryFont` Definition (lines 24–30)

Replace `Zilla_Slab(...)` with your font. **Keep the variable name `primaryFont` and `variable: "--font-primary"` unchanged** — the rest of the app depends on them.

```ts
// Before
const primaryFont = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-primary",
});

// After (example: Poppins)
const primaryFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-primary",
});
```

:::caution
Only list `weight` and `style` values the font actually provides on [Google Fonts](https://fonts.google.com), otherwise the build fails. For variable fonts (e.g. `Inter`) you can omit `weight`.
:::

### Step 3 — Rebuild

Restart the dev server (`npm run dev`) or rebuild your site so `next/font` downloads and self-hosts the new font.

No changes are needed in `globals.css` or any component.

---

:::info
Any font available on [Google Fonts](https://fonts.google.com) can be imported via `next/font/google`. `next/font` self-hosts it at build time — no runtime network request to Google CDN.
:::
