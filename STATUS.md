# Project Status

> Read this first when starting work on this project — new session, new
> agent, or just picking it back up after time away. Update it whenever you
> finish a meaningful chunk of work, make a non-obvious decision, or leave
> something pending.

## Current state

_Updated 2026-11-17 (AGE-142)._

- Web oficial de David Blanc migrada de Remix 2 a **React Router 7** (modo
  framework, SSR, `react-router-serve` sobre Node). Aspecto y contenido
  idénticos a la versión Remix (capturas antes/después equivalentes).
- Rutas: `/` (home: hero, Música, Próximos Shows, Biografía, Contacto),
  `/concerts` (placeholder con "hola"); cualquier otra → ErrorBoundary
  "¡Ups! La música se detuvo" (404).
- Base de agent-box: `CLAUDE.md` con `## Project rules`, este archivo,
  `backlog.json`, `docs/producto.md` y `npm run verify` (lint + typecheck +
  Vitest). Test de humo en `test/home.test.tsx`.
- Producción: Fly.io (`fly.toml`, app `davidblancv1`, región `scl`) con el
  `dockerfile` (`node:20-alpine`, `npm start` → `react-router-serve`). No se
  despliega desde aquí.

## Recent decisions

- 2026-11-17: se conserva la convención de rutas planas de Remix con
  `flatRoutes()` (`@react-router/fs-routes`) en vez de listar rutas a mano:
  migración 1:1, mismos archivos.
- 2026-11-17: se borraron `app/entry.client.tsx` y `app/entry.server.tsx`.
  Eran las plantillas por defecto de Remix y React Router 7 trae
  equivalentes (streaming + `isbot`). Para personalizarlos:
  `npx react-router reveal`.
- 2026-11-17: se quitó `<LiveReload />` del root. No existe en React
  Router 7 y con Vite ya era obsoleto (avisaba en consola).
- 2026-11-17: se mantienen React 18, Vite 5, ESLint 8 y Tailwind 3; la
  issue era solo la migración de framework. `jsdom` fijado a 26 porque las
  versiones nuevas exigen Node ≥ 22 y el proyecto/dockerfile usan Node 20.
- 2026-11-17: los tests viven en `test/`, fuera de `app/routes/`, porque
  `flatRoutes()` convertiría un `*.test.tsx` de esa carpeta en una ruta.

## Known issues / pending

See `backlog.json` for the authoritative list. Highlights: migrar el
despliegue a Cloudflare, definir el diseño nuevo (`docs/design-brief.md` y
`DESIGN.md`), contenido real para `/concerts`, y pequeñas deudas vistas
durante la migración (enlace a `/build/tailwind.css` que da 404,
`<html lang="en">`, `console.log` en `SpotifyPlayer`).

## How to run this project

- `npm ci`, luego `npm run dev` (en worktrees:
  `npx react-router dev --port $(~/agent-box/scripts/free-port.sh) --host 127.0.0.1`).
- `npm run verify` antes de dar algo por hecho.
- Producción local: `npm run build && npm start` (puerto por `PORT`).
