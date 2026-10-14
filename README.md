# Huerta's Painting — huertaspaintingllc.com · Versión 2 (Paris Painting)

Rediseño del sitio de Huerta's Painting, LLC (pintores residenciales en Apple Valley, MN).
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

**Versión 2:** estructura, layout y padding de **paris-painting.com**, con el branding, estilo y recursos
gráficos de **paris-painting.com** (azul marino `#192A53`, naranja `#F27834`, crema `#F7F5F1`, Montserrat + Poppins).
Detalles en [`DESIGN.md`](DESIGN.md).

Las tres versiones (`huertas-v1-certapro`, `huertas-v2-paris`, `huertas-v3-360`) comparten el mismo contenido,
páginas y componentes; cambian los tokens de color, tipografías y algunos componentes de marca.

## Desarrollo

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # astro check + sitio estático en /dist
npm run preview  # previsualiza el build
```

## Peticiones de la clienta (todas aplicadas)

| Petición | Dónde |
| --- | --- |
| Conservar la foto original de la van en la página principal | `src/components/Hero.astro` (`IMAGES.hero` = `huertas-painting-truck-hero.jpg`) |
| Teléfono visible y clicable en la página principal | Barra superior, bloque del header, hero, tarjeta "At a glance", sección de estimado, banda final, footer y barra fija en móvil (`tel:` / `sms:`) |
| **No** mostrar la calificación de 4.9 estrellas | Eliminada en todo el sitio (incluido el `aggregateRating` del JSON-LD y los badges con estrellas). En su lugar: botones "Read our reviews on Google" que abren el perfil de Google Business (`PROFILES.google`) |
| Enlaces a Nextdoor y Facebook | `src/components/ProfileLinks.astro`, tarjetas de reconocimiento, footer |
| Sistema de reseñas 👍 / 👎 | `/we-value-our-clients/` → 👍 `/thanks-for-responding/` (Google, Facebook, Nextdoor) · 👎 `/thanks-for-your-feedback/` (mensaje privado vía `api/feedback.js`). Mismas URLs que el WordPress actual, excluidas del sitemap y con `noindex` |
| Páginas de ciudades (Farmington, Apple Valley, Lakeville, Eagan) | `src/pages/[area].astro` con las mismas URLs; destacadas en el menú "Locations", la sección "Where we paint most" y el footer. También están las de Burnsville, Rosemount, Eden Prairie, Richfield y Mendota Heights |

## Personalización

Todo el contenido vive en **`src/consts.ts`**: contacto, perfiles (Google / Nextdoor / Facebook), servicios,
ciudades, reseñas, galería, FAQ. Las imágenes están en `src/assets/images` (Astro las optimiza a AVIF/WebP).

## Formularios

- Estimado gratuito → `api/estimate.js`
- Feedback negativo del sistema de reseñas → `api/feedback.js`

Ambas funciones de Vercel envían email con [Resend](https://resend.com). Variables en Vercel → Settings →
Environment Variables (ver `.env.example`): `RESEND_API_KEY`, `ESTIMATE_NOTIFY_EMAIL`, `ESTIMATE_FROM_EMAIL` (opcional).
En `npm run preview` las rutas `/api/*` no existen (son de Vercel), así que los formularios mostrarán el
mensaje de error con el teléfono — es lo esperado en local.

## Subir a GitHub y desplegar en Vercel

```bash
git add -A
git commit -m "Huerta's Painting — versión 2 (Paris Painting)"
git remote add origin <URL-del-repo>
git push -u origin main
```

En Vercel: **Add New → Project → Import** el repo (Astro se detecta solo) y agrega las variables de `.env.example`.
