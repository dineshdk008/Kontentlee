# Deploying Kontentlee Media

This project is built with **TanStack Start** (React + Vite). It can be deployed as a static site on Netlify, GitHub Pages, or any static host.

## Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20+

## Install dependencies

```bash
bun install
```

## Build

```bash
bun run build
```

The static site is output to `dist/client/`.

---

## Deploy on Netlify (recommended)

### Option A: Drag & drop

1. Run `bun run build`.
2. Drag the `dist/client` folder into Netlify's deploy UI.

### Option B: Git-connected deploy

1. Push this project to a GitHub repository.
2. In Netlify, click **Add new site → Import an existing project** and select the repo.
3. Netlify will read the included `netlify.toml`:
   - Build command: `bun install && bun run build`
   - Publish directory: `dist/client`
4. Click **Deploy**.

The included `public/_redirects` and `netlify.toml` SPA redirect rule makes client-side routing work automatically.

---

## Deploy on GitHub Pages

1. Push this project to a GitHub repository.
2. Open **Settings → Pages** in the repo.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Create `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
      - run: bun install
      - run: bun run build
      - name: Add 404 fallback
        run: cp dist/client/index.html dist/client/404.html
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/client
      - uses: actions/deploy-pages@v4
```

5. If your repo is **not** named `<username>.github.io`, edit `vite.config.ts` and add a base path:

```ts
export default defineConfig({
  base: "/your-repo-name/",
  tanstackStart: {
    server: { entry: "server" },
  },
});
```

6. Commit and push — the action will deploy the site.

---

## Important notes

- The contact form opens WhatsApp with the form details. This is a client-side action and does not need a backend.
- All assets are bundled at build time; no external CMS or API keys are required.
- If you deploy to a sub-path (GitHub Pages project site), update the `base` option in `vite.config.ts` and make sure the 404 fallback is created so direct links/refresh work.
