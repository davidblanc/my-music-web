# Producto — davidblanc (web oficial de David Blanc)

> Contexto de negocio para quien trabaje en este repo (personas y agentes).
> Léelo antes de tomar decisiones de producto: qué construir, para quién, con qué
> textos, precios o prioridades. Si una issue contradice este documento, pregunta
> antes de construir.
>
> Lo mantiene David. Las decisiones nuevas entran con un PR, con fecha, motivo y
> fuente. Los archivos de origen (estudios, PDFs, fotos, datos) viven en Drive,
> en `gdrive-personal:davidblanc/`, no en git.
>
> **No inventes datos de la marca** (precios, nombres, textos, políticas): si no
> están aquí ni en la issue, son una pregunta abierta.

_Creado el 2026-11-17 (AGE-142) solo con lo que ya publica la web
(`app/routes/_app._index.tsx`). Todo lo demás está en *Preguntas abiertas*._

## Qué es

La web oficial de David Blanc, cantautor argentino (meta description: "Sitio
web del cantautor argentino David Blanc"; título: "David Blanc | Web oficial").
Presenta su música, sus próximos shows, su biografía y cómo contactarlo.
Dominio: `davidblanc.com`.

Lema del hero: "Cantautor | Compositor | Artista". Botón principal: "Escuchar
Ahora", que abre el reproductor de Spotify del artista.

## Para quién

_Pendiente: ver Preguntas abiertas._ Lo único que dice la web: el contacto es
"para shows y colaboraciones".

## Propuesta y posicionamiento

_Pendiente: ver Preguntas abiertas._ La web habla en primera persona, con tono
cercano ("estoy emocionado de compartirlo contigo").

## Catálogo actual

Fuente de verdad en el código: el array `latestReleases` al final de
`app/routes/_app._index.tsx`.

| Producto | Categoría | Estado |
|---|---|---|
| Círculos (2012 según la tarjeta; la bio dice "lanzado en mayo de 2011") | Disco (primer disco) | Publicado, en Spotify |
| Sin Miedo (2018) | Lanzamiento en Spotify (track) | Publicado |
| Cada Mañana (2019) | Lanzamiento en Spotify (track) | Publicado |

Próximos shows (array `upcomingShows`): 21 Mayo 2025, Mendoza, Argentina (sin
lugar indicado).

### Biografía (resumen de lo publicado)

- Nació en una pequeña ciudad de Mendoza, Argentina.
- Aprendió canciones folclóricas de su padre.
- Fue vocalista de la banda de rock progresivo Vanguardia, con la que grabó
  un álbum.
- Tuvo un papel protagónico en una ópera rock.
- Círculos, su primer disco, reúne composiciones de su infancia y juventud.
- Finalista en concursos, protagonista de obras de teatro musical y ha
  tocado en diversas provincias y países.

El texto completo está en la sección Biografía de la home.

### Redes y contacto

Fuente: el array `socialLinks` de `app/routes/_app._index.tsx`.

- Instagram: https://www.instagram.com/davidblancmusica/
- Spotify: https://open.spotify.com/intl-es/artist/5sI6sGj1EdyOtdfMemGNE1
- YouTube: https://www.youtube.com/davidblancvideos
- Facebook: https://www.facebook.com/BLANCDAVID/
- Email para shows y colaboraciones: davidblanc@gmail.com

## Decisiones

| Fecha | Decisión | Por qué | Fuente |
|---|---|---|---|
| 2026-11-17 | El enlace de contacto apunta a `mailto:davidblanc@gmail.com` (antes `contacto@tudominio.com`, un placeholder) | El texto visible ya decía davidblanc@gmail.com | AGE-142 |
| 2026-11-17 | Migración de Remix 2 a React Router 7 sin cambios visuales ni de contenido; el diseño nuevo va en otra issue | Base técnica antes de rediseñar | AGE-142 |

## Reglas de negocio

- El idioma de la web es el castellano.
- Ningún dato de la marca (fechas, discos, textos, enlaces) se inventa: sale
  de este documento o de David.

## Prioridades actuales

La fuente es la sección *Known issues / pending* de `STATUS.md` y el proyecto en
Linear; no se copian aquí para que no se desincronicen.

## Qué NO hacemos (por ahora)

_Nada decidido todavía._

## Preguntas abiertas

Las responde David. Las que bloquean trabajo viven en su issue de Linear, que es
la fuente: aquí solo se enlazan.

- ¿Público objetivo principal de la web (fans, programadores de shows,
  prensa)? — sin issue todavía.
- ¿Posicionamiento y tono de marca más allá de lo que hay hoy? — sin issue
  todavía (probablemente en la issue de diseño).
- ¿Año de Círculos: 2011 (bio) o 2012 (tarjeta del disco)? — sin issue todavía.
- ¿Qué tipo es "Sin Miedo" y "Cada Mañana" (singles, EP)? ¿Hay más
  lanzamientos que mostrar? — sin issue todavía.
- Próximos shows: ¿lugar del 21 de mayo de 2025, si sigue vigente, y a dónde
  lleva "Comprar Tickets"? ¿Qué debe mostrar `/concerts`? — sin issue todavía.
- ¿Hay prensa, fotos oficiales o un kit de prensa que deba estar en Drive? —
  sin issue todavía.

Cuando David responda una, la respuesta entra en *Decisiones* con fecha y fuente.

## Fuentes

- Contenido actual: `app/routes/_app._index.tsx`.
- Material de origen: Drive, `gdrive-personal:davidblanc/`.
- Estado técnico: `STATUS.md`. Tareas: Linear (proyecto de David Blanc).
