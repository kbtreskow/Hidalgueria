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
│   ├── Proyectos.tsx   # Portfolio de 3 proyectos
│   ├── Historia.tsx    # Filosofía de la marca (fondo oscuro)
│   ├── Servicios.tsx   # Grid 2×2 de servicios
│   ├── Proceso.tsx     # Timeline de 5 etapas (layout sticky)
│   ├── Testimonios.tsx # Carrusel de citas
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

## Decisiones de diseño
- **Sin navbar fija** — navegación principal por scroll; menú hamburguesa (fixed, top-right) como acceso directo a secciones
- Cursor personalizado (ring dorado + punto interior)
- Barra de progreso de scroll (1px dorada, fija arriba)
- Grain overlay sutil para textura editorial
- Tipografía: Cormorant Garamond (`.editorial`) para headings, Raleway 300 para cuerpo
- Animaciones: Framer Motion con ease `[0.16, 1, 0.3, 1]` (quintic out)
- Contacto: solo Instagram y WhatsApp — sin formularios

## Assets estáticos
- Las imágenes de contenido (proyectos, etc.) van en `public/assets/` y se referencian como strings `/assets/nombre.jpg` — sin imports
- `src/assets/` se reserva para SVGs e íconos que Vite necesita procesar

## Comandos
```bash
npm run dev    # Desarrollo local
npm run build  # Build de producción (dist/)
npm run lint   # ESLint
```
