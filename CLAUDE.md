# Hidalguería — Landing Page de Alta Costura

## Stack
- React 19 + TypeScript (strict) + Vite 8
- Framer Motion (animaciones)
- Tailwind CSS v4 via `@tailwindcss/vite`
- Google Fonts: Cormorant Garamond (editorial) + Raleway (cuerpo)

## Arquitectura `src/`
```
src/
├── assets/             # SVGs e íconos (importados como módulos)
├── components/
│   ├── ui/             # Atoms: CustomCursor, GrainOverlay, ScrollProgress, SectionLabel, HamburgerMenu
│   └── layout/         # Footer
├── hooks/              # useScrollProgress, useInView
├── sections/           # 7 secciones de la landing
│   ├── Hero.tsx        # Entrada cinemática full-screen
│   ├── Proyectos.tsx   # Carousel de 16 proyectos — 70vw móvil / 58vw desktop, hook useCardWidth()
│   ├── Historia.tsx    # Filosofía de la marca (fondo oscuro)
│   ├── Servicios.tsx   # Grid 2×2 de servicios — tarjetas glassmorphism (backdrop-filter blur) sobre video de fondo
│   ├── Proceso.tsx     # Timeline de 5 etapas (layout sticky)
│   ├── Productos.tsx   # Colección "Materia Prima" — 4 filas alternadas imagen/texto (fondo obsidian); panel imagen contiene ImageCarousel (15 imgs, crossfade, auto-avance 3.5s, drag/swipe)
│   └── Consultas.tsx   # Contacto vía Instagram y WhatsApp
├── App.tsx             # Orquestador — sin navbar, scroll puro
├── main.tsx
└── index.css           # Variables CSS, tipografía global, cursor personalizado
```

## Paleta de variables CSS
| Variable       | Color     | Uso                     |
|----------------|-----------|-------------------------|
| `--cream`      | `#F5F0E8` | Fondo principal         |
| `--sand`       | `#E8DFD0` | Fondo secundario/cards  |
| `--dune`       | `#D4C5A9` | Divisores, bordes       |
| `--ash`        | `#9B9591` | Texto secundario        |
| `--graphite`   | `#4A4540` | Texto cuerpo            |
| `--obsidian`   | `#1C1A17` | Fondo oscuro / títulos  |
| `--gold`       | `#B8955A` | Acento editorial        |
| `--gold-light` | `#D4B07A` | Variante clara del oro  |

## Decisiones de diseño
- **Sin navbar fija** — navegación principal por scroll; menú hamburguesa (fixed, top-right) como acceso directo a secciones
- Cursor personalizado (ring dorado + punto interior)
- Barra de progreso de scroll (1px dorada, fija arriba)
- Grain overlay sutil para textura editorial
- Tipografía: Cormorant Garamond (`.editorial`) para headings, Raleway 300 para cuerpo
- Animaciones: Framer Motion con ease `[0.16, 1, 0.3, 1]` (quintic out)
- Carousel Proyectos: ancho de tarjeta reactivo vía `useCardWidth()` + `matchMedia` — 70vw en móvil, 58vw en ≥1024px; `STEP_VW` y `OFFSET_VW` se recalculan en componente, no como constantes globales
- **Navegación del carousel** — sin botones de flechas ni contador; la navegación es exclusivamente swipe táctil y drag de mouse. No re-agregar controles UI.
- **ImageCarousel (Productos.tsx)** — componente interno al panel imagen de cada `ProductoRow`. Crossfade vía `opacity` CSS transition. Auto-avance `setInterval` 3.5s, reseteable en navegación manual. Touch events nativos non-passive (mismo patrón que Proyectos.tsx). `@keyframes carouselFill` en `index.css` para la barra de progreso. Rutas: `/assets/productos/{slug}/{slug}-{n}.webp`. Categorías actuales: `cojines`, `plumones`, `cortinas`, `pieceras`.
- **Paginación de ImageCarousel** — contador editorial: número actual en Cormorant itálico grande + separador vertical dorado 1px + total en Raleway pequeño. Anclado con `radial-gradient` vignette en esquina superior-izquierda. NO usar `mix-blend-mode: difference` para texto sobre imágenes variables — falla en tonos medios.
- **Hover en Productos** — panel imagen: `motion.div` con `whileHover="hovered"` propaga estado a `motion.div` wrapper de imágenes con `variants={{ hovered: { scale: 1.07 } }}`. Panel texto: `motion.div` con `whileHover={{ scale: 1.025 }}` y `transformOrigin` dinámico (opuesto a la imagen).
- **Estructura de Proyectos.tsx** — el `<section>` contiene solo el header (título + descripción); el carousel vive en un `motion.div` hermano fuera del `<section>`. El padding vertical inferior va en ese `motion.div` (`paddingBottom: 'clamp(6rem, 12vw, 14rem)'`), no en la sección.
- `overflow-x: clip` en `html` y `body` (no `hidden`) — `hidden` crea scroll container y rompe `position: sticky`
- Contacto: solo Instagram y WhatsApp — sin formularios
- Tarjetas Servicios: glassmorphism — `backdrop-filter: blur(22px)`, fondo `rgba(245,240,232,0.42)`, sin bordes, `borderRadius: 16px`; texto descripción en `var(--graphite)` (no `--ash`, contraste insuficiente sobre glass claro); separador en `rgba(184,149,90,0.35)` (dorado sutil); no usar `inset` box-shadow junto con borders (crea artefacto de línea blanca)
- **Patrón de alineación de secciones** — el padding horizontal va en el `<section>` (o contenedor raíz), y el `maxWidth: 1440px` + `margin: 0 auto` va en un `<div>` interior separado. NO juntar ambos en el mismo elemento: eso desalinea los títulos en pantallas anchas (>1440px) porque el centering se suma al padding en lugar de estar dentro de él. Patrón correcto:
  ```
  <section style={{ padding: '... clamp(2rem, 7vw, 9rem)' }}>
    <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
      {/* contenido */}
    </div>
  </section>
  ```

## Assets estáticos
- Las imágenes de contenido (proyectos, etc.) van en `public/assets/` y se referencian como strings `/assets/nombre.webp` — sin imports
- `src/assets/` se reserva para SVGs e íconos que Vite necesita procesar

## Comandos
```bash
npm run dev    # Desarrollo local
npm run build  # Build de producción (dist/)
npm run lint    # ESLint
npm run preview # Preview del build de producción
```
