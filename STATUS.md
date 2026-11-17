# Project Status

> Read this first when starting work on this project — new session, new
> agent, or just picking it back up after time away. Update it whenever you
> finish a meaningful chunk of work, make a non-obvious decision, or leave
> something pending.

## Current state

_Updated 2026-11-17 (AGE-143)._

- Web oficial de David Blanc migrada de Remix 2 a **React Router 7** (modo
  framework, SSR, `react-router-serve` sobre Node). Aspecto y contenido
  idénticos a la versión Remix (capturas antes/después equivalentes).
- Rutas: `/` (home: hero, Música, Próximos Shows, Biografía, Contacto),
  `/concerts` (placeholder con "hola"); cualquier otra → ErrorBoundary
  "¡Ups! La música se detuvo" (404).
- Base de agent-box: `CLAUDE.md` con `## Project rules`, este archivo,
  `backlog.json`, `docs/producto.md` y `npm run verify` (lint + typecheck +
  Vitest). Test de humo en `test/home.test.tsx`.
- Runtime: **Cloudflare Workers** (AGE-143). `@cloudflare/vite-plugin`,
  `wrangler.jsonc` (Worker `davidblanc`), entry en `workers/app.ts` y
  `app/entry.server.tsx` con `renderToReadableStream`. Imágenes y JS/CSS se
  sirven como assets estáticos del Worker (`build/client`).
- Despliegue previsto: Workers Builds (producción al fusionar en `main`,
  preview por PR). **Pendiente de David**: conectar el repo y mover
  `davidblanc.com` a Cloudflare (pasos en el README). Ningún agente ejecuta
  `wrangler deploy` ni toca DNS.
- Producción hoy: sigue en Fly.io (`fly.toml`, app `davidblancv1`) con la
  imagen ya desplegada. Ojo: desde AGE-143 el `dockerfile` ya no construye
  desde `main` (no hay `react-router-serve`); se borra con `remove-fly-io`.

## Recent decisions

- 2026-11-17 (AGE-143): Vite 5 → 6 (el plugin de Cloudflare exige ≥ 6.1) y
  `engines.node` ≥ 22.12 (lo exige Wrangler 4). Se quitaron
  `@react-router/node`, `@react-router/serve` y el script `start`: no hay
  servidor Node.
- 2026-11-17 (AGE-143): `worker-configuration.d.ts` (tipos de `Env` y del
  runtime, ~16k líneas) no se versiona; `npm run typecheck` lo regenera con
  `wrangler types`.
- 2026-11-17 (AGE-143): `npm run preview` = `react-router build` +
  `vite preview`, que con el plugin de Cloudflare ejecuta el Worker en
  workerd (el runtime local de Wrangler), como la plantilla oficial.

- 2026-11-17: se conserva la convención de rutas planas de Remix con
  `flatRoutes()` (`@react-router/fs-routes`) en vez de listar rutas a mano:
  migración 1:1, mismos archivos.
- 2026-11-17: se borraron `app/entry.client.tsx` y `app/entry.server.tsx`
  (plantillas por defecto de Remix). En AGE-143 volvió un
  `app/entry.server.tsx` propio porque el de serie de React Router es para
  Node.
- 2026-11-17: se quitó `<LiveReload />` del root. No existe en React
  Router 7 y con Vite ya era obsoleto (avisaba en consola).
- 2026-11-17: se mantienen React 18, Vite 5, ESLint 8 y Tailwind 3; la
  issue era solo la migración de framework. `jsdom` fijado a 26 porque las
  versiones nuevas exigen Node ≥ 22 y el proyecto/dockerfile usan Node 20.
- 2026-11-17: los tests viven en `test/`, fuera de `app/routes/`, porque
  `flatRoutes()` convertiría un `*.test.tsx` de esa carpeta en una ruta.

## Known issues / pending

See `backlog.json` for the authoritative list. Highlights: pasos manuales
de Cloudflare (David) y luego quitar Fly.io (`remove-fly-io`), definir el diseño nuevo (`docs/design-brief.md` y
`DESIGN.md`), contenido real para `/concerts`, y pequeñas deudas vistas
durante la migración (enlace a `/build/tailwind.css` que da 404,
`<html lang="en">`, `console.log` en `SpotifyPlayer`).

## How to run this project

- `npm ci`, luego `npm run dev` (en worktrees:
  `npx react-router dev --port $(~/agent-box/scripts/free-port.sh) --host 127.0.0.1`).
- Node ≥ 22.12.
- `npm run verify` antes de dar algo por hecho.
- Worker local: `npm run preview` (en worktrees:
  `npm run build && npx vite preview --port $(~/agent-box/scripts/free-port.sh) --host 127.0.0.1`).
