# davidblanc — web oficial de David Blanc

Web del cantautor David Blanc (`davidblanc.com`): una home con hero, música,
próximos shows, biografía y contacto, más `/concerts`. React Router 7 (modo
framework, SSR) sobre Node, Tailwind 3, Vite 5, React 18.

Antes de trabajar: lee `STATUS.md` y `backlog.json`. Para decisiones de
producto (textos, datos de la marca), `docs/producto.md`.

## Comandos

- `npm run dev`: servidor de desarrollo (`react-router dev`; en un worktree
  pasa `--port` y `--host 127.0.0.1`).
- `npm run verify`: lint + typecheck (`react-router typegen && tsc`) + tests
  (Vitest). Es la definición de "hecho".
- `npm run build` / `npm start`: build de producción y `react-router-serve`.

## Estructura

- Rutas: `app/routes.ts` usa `flatRoutes()` de `@react-router/fs-routes`, así
  que los archivos de `app/routes/` siguen la convención plana de Remix
  (`_app.tsx` es el layout con `NavBar`). No pongas tests ni otros módulos
  dentro de `app/routes/`: se convertirían en rutas.
- Tests en `test/` (Vitest + Testing Library, jsdom).
- El `ErrorBoundary` del root se renderiza dentro de `Layout` (exportado por
  `app/root.tsx`); por eso tiene los estilos. Mantén esa relación.

## Project rules

- **Datos de la marca**: nombres, textos, fechas, discos, redes y contacto
  salen de la web actual o de `docs/producto.md`. No inventes ninguno; lo que
  falte es una pregunta para David.
- **Despliegue**: hoy la web corre en Fly.io (`fly.toml`, app `davidblancv1`)
  con el `dockerfile`. Ningún agente ejecuta `fly deploy` ni cambia la
  configuración de despliegue. No borres `fly.toml` ni `dockerfile` hasta que
  la migración a Cloudflare esté en producción.
- **Cambios visuales**: cualquier cambio que se vea en la web lleva capturas
  antes/después a 1440×900 y 390×844. Hasta que existan
  `docs/design-brief.md` y `DESIGN.md`, se respeta el aspecto actual.
