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

Production is `main`; every pull request gets its own preview URL. One-time
setup, in this order:

### 1. Connect the repo in Workers Builds

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) and go
   to **Workers & Pages** → **Create** → **Import a repository**.
2. Connect GitHub if asked and pick `davidblanc/my-music-web`.
3. Settings:
   - **Project name**: `davidblanc` (must match `"name"` in `wrangler.jsonc`).
   - **Build command**: `npm run build`
   - **Deploy command**: `npx wrangler deploy`
   - **Root directory**: leave empty (repo root).
4. Click **Create and deploy**. The first build deploys `main` to
   `https://davidblanc.<your-subdomain>.workers.dev`. Check it opens.
5. In the Worker → **Settings** → **Build**:
   - **Branch control**: production branch `main`.
   - Turn on **Builds for non-production branches**, with the non-production
     deploy command `npx wrangler versions upload`. Each PR then gets a
     preview URL, posted as a comment on the PR by the Cloudflare GitHub app.
   - In **Settings** → **Domains & Routes**, check **Preview URLs** is on
     (it is by default with `workers.dev`).

### 2. Move davidblanc.com to Cloudflare

1. Dashboard → **Add a domain** → `davidblanc.com` → **Free** plan. Cloudflare
   scans and imports the current DNS records: review them (keep any MX/TXT
   for email) and delete the records that point to Fly.io (`A`/`AAAA`/`CNAME`
   for `davidblanc.com` and `www`).
2. At the domain registrar, replace the nameservers with the two Cloudflare
   gives you. Wait until the domain shows **Active** in Cloudflare (minutes
   to a few hours).
3. Worker `davidblanc` → **Settings** → **Domains & Routes** → **Add** →
   **Custom domain** → `davidblanc.com`. Repeat for `www.davidblanc.com`.
   Cloudflare creates the DNS records and the certificate.
4. Check `https://davidblanc.com` and `https://www.davidblanc.com` serve the
   site from Cloudflare (response header `server: cloudflare`).
5. Once it's stable, stop the Fly.io app (`fly apps destroy davidblancv1` or
   from the Fly dashboard) and remove `fly.toml` and `dockerfile` from the
   repo (backlog item `remove-fly-io`).
