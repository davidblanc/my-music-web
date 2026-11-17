# davidblanc — web oficial de David Blanc

Web del cantautor David Blanc (`davidblanc.com`): una home con hero, música,
próximos shows, biografía y contacto, más `/concerts`. React Router 7 (modo
framework, SSR) sobre Cloudflare Workers (`@cloudflare/vite-plugin`,
`wrangler.jsonc`, entry en `workers/app.ts`), Tailwind 3, Vite 6, React 18.

Antes de trabajar: lee `STATUS.md` y `backlog.json`. Para decisiones de
producto (textos, datos de la marca), `docs/producto.md`.

## Comandos

- `npm run dev`: servidor de desarrollo (`react-router dev`; el código de
  servidor corre en workerd). En un worktree pasa `--port` y
  `--host 127.0.0.1`.
- `npm run verify`: lint + typecheck (`wrangler types && react-router typegen
  && tsc`) + tests (Vitest). Es la definición de "hecho".
- `npm run build`: build de producción (`build/client` con los assets
  estáticos y `build/server` con el Worker).
- `npm run preview`: build + `vite preview`, que ejecuta el Worker en local
  con workerd. En un worktree: `npm run build && npx vite preview --port
  <puerto> --host 127.0.0.1`.
- `npm run deploy` (`wrangler deploy`) existe pero los agentes no lo usan:
  despliega Workers Builds (ver `## Project rules`).

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
- **Despliegue**: la web corre en Cloudflare Workers con Workers Builds.
  Fusionar en `main` publica en producción (davidblanc.com); cada PR tiene su
  URL de preview. Ningún agente ejecuta `wrangler deploy` ni cambia la
  configuración de Workers Builds, del dominio o del DNS.
- **Cambios visuales**: cualquier cambio que se vea en la web lleva capturas
  antes/después a 1440×900 y 390×844. Hasta que existan
  `docs/design-brief.md` y `DESIGN.md`, se respeta el aspecto actual.
