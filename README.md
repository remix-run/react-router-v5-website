# React Router v5 Website

This repository vendors the legacy React Router v5 website so it can run locally
without depending on the upstream `remix-run/react-router` monorepo.

## Local Development

```bash
npm install
npm start
```

The site runs with the original webpack-based setup and serves the vendored docs,
examples, and package source from this repository.

## Included Upstream Content

- `modules`, `static`, `webpack`, `index.html.ejs`, and `webpack.config.js`
- `packages/react-router`
- `packages/react-router-dom`
- `packages/react-router-native`

Everything else from the old monorepo was intentionally left out for this first
standalone local-development pass.
