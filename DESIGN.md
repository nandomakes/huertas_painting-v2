# DESIGN.md — Huerta's Painting · Versión 2 (Paris Painting)

**Estructura / layout / padding:** paris-painting.com · **Branding / estilo / assets:** paris-painting.com
(medido con DevTools el 2026-10-13).

## Estructura (compartida por las 3 versiones) — landing de conversión
1. Barra superior + header con **bloque de teléfono** a la derecha.
2. Hero dividido con la **foto de la van**, enlace "Call or text" y tarjeta "Schedule Free Estimate".
3. **Trust bar**: una fila pareja (Family-owned since 2018 · Fully insured · Nextdoor Fave · BBB · Google reviews).
4. **Reseñas** estilo widget (panel de resumen + carrusel de tarjetas con avatar, etiqueta del trabajo, "Read more" y
   "Verified review on Google"). Sin estrellas ni calificación.
5. Servicios (grid 3×2; 2 columnas compactas en móvil) → **banda CTA a media página**.
6. **Why us**: foto con "300+ projects", checklist en 2 columnas, cita de Pedro y CTAs.
7. Proceso de 4 pasos.
8. **Áreas de servicio**: tarjetas con foto para Farmington, Apple Valley, Lakeville y Eagan + pastillas para el
   resto de ciudades + 3 cifras (2018 · 300+ · 9 ciudades).
9. FAQ → formulario de estimado → footer.
Columna de **1080px**, secciones con **72px** de padding vertical.

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
