# React Router v5 Website

This repository vendors the legacy React Router v5 website as a standalone app,
without depending on the upstream `remix-run/react-router` monorepo to build the
site.

## Local Development

```bash
npm install
npm start
```

## GitHub Pages Build

```bash
npm run build
```

This emits a `build/` directory that is ready for the `v5.reactrouter.com`
GitHub Pages custom domain, including a root-relative base path, `404.html`
SPA fallback, `.nojekyll`, and `CNAME`.

To build for a GitHub Pages project site instead, override the public path:

```bash
PUBLIC_PATH=/react-router-v5-website/ npm run build
```

The site runs with the original webpack-based setup and serves the vendored docs,
examples, and only the router source files the website actually needs.

## Vendored Content

- `modules`, `static`, `webpack`, `index.html.ejs`, and `webpack.config.js`
- Minimal `react-router` runtime source used by the site
- The markdown docs rendered by the site
- The example source files used by the docs UI and CodeSandbox embeds

Tests, publish/build scaffolding, transpiled package outputs, and unused upstream
package files have been removed so this repo only contains what the website needs.
