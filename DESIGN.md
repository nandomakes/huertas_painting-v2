# DESIGN.md — Huerta's Painting · Versión 2 (Paris Painting)

**Estructura / layout / padding:** paris-painting.com · **Branding / estilo / assets:** paris-painting.com
(medido con DevTools el 2026-10-13).

## Estructura (compartida por las 3 versiones)
1. Barra de anuncio + header blanco: logo, menú con dropdowns, **bloque de teléfono** a la derecha a toda la altura.
2. Hero dividido: panel de color con eyebrow, H1, texto y enlace "Call or text"; **foto de la van** a la derecha;
   tarjeta flotante "Free estimate" que se monta sobre la franja de confianza.
3. Reseñas (tarjetas sin estrellas) + botones a Google / Nextdoor / Facebook.
4. Split foto + checklist con iconos → tarjetas de reconocimiento → grid de servicios 3×2 → garantías →
   split de texto + before/after → proceso de 4 pasos → "At a glance" + ciudades → historia → fundador →
   FAQ → formulario de estimado → banda CTA → footer.
- Columna de contenido: **1080px** (`.wrap`). Secciones: **72px** de padding vertical (`.section`, 56px en móvil).

## Branding de esta versión
- Colores: azul marino `#192A53` (barra, hero, footer), naranja `#F27834` (botones y títulos H2), crema `#F7F5F1`
  (secciones alternas), texto `#303030`.
- Tipografía: **Montserrat** 600/700 (títulos) + **Poppins** 400–600 (texto, 16px / 1.7).
- Botones: naranja con radio de 14px; secundario con borde azul marino y radio de 8px.
- Tarjetas blancas con radio de 14px y sombra suave; divisor de sección con rodillo entre dos líneas.
- Banda final naranja con botón azul marino + botón blanco; footer azul marino con barra legal más oscura.

## Sin calificación con estrellas
Por petición de la clienta no aparece la calificación (4.9) ni estrellas en ninguna parte; tampoco en el JSON-LD.
Los badges con estrellas (Google 5.0, Facebook 5 Star) se eliminaron de `src/assets`.
