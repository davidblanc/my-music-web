# Welcome to Music Web Site!

This is a [React Router 7](https://reactrouter.com) app to show my music:
www.davidblanc.com

It runs on [Cloudflare Workers](https://developers.cloudflare.com/workers/)
(`@cloudflare/vite-plugin` + `wrangler.jsonc`, Worker entry in
`workers/app.ts`). Images and JS/CSS are served as the Worker's static assets.

Requires Node 22.12 or newer (Wrangler 4).

## development

```sh
npm ci
npm run dev          # Vite dev server; the server code runs inside workerd
npm run verify       # lint + typecheck + tests
```

## build and local preview

```sh
npm run build        # build/client (static assets) + build/server (Worker)
npm run preview      # builds and serves the Worker locally with Wrangler's runtime
```

`npm run deploy` (`wrangler deploy`) uploads the Worker by hand. Normally you
don't need it: Workers Builds deploys on every push (see below).

## deployment: Cloudflare Workers Builds

The site is deployed by [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
from this repo (`davidblanc/my-music-web`) to the Worker `davidblanc` (the
`"name"` in `wrangler.jsonc`):

- **Production**: every merge to `main` builds (`npm run build`) and deploys
  (`npx wrangler deploy`) to https://davidblanc.com and
  https://www.davidblanc.com (custom domains of the Worker; the
  `davidblanc.com` DNS zone lives in Cloudflare).
- **Previews**: every pull request is built and uploaded as a Worker version
  (`npx wrangler versions upload`); the Cloudflare GitHub app comments the
  preview URL on the PR.

Build settings, domains and DNS are managed in the
[Cloudflare dashboard](https://dash.cloudflare.com/) (Worker `davidblanc` →
**Settings** → **Build** / **Domains & Routes**), not in this repo.
