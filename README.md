# Hidalguería — Landing Page de Alta Costura

Landing page editorial para estudio de interiorismo de lujo. Stack moderno con foco en experiencia visual de alta gama.

## Stack

- React 19 + TypeScript (strict) + Vite 8
- Framer Motion (animaciones cinemáticas)
- Tailwind CSS v4 via `@tailwindcss/vite`
- Google Fonts: Cormorant Garamond + Raleway

## Comandos

```bash
npm run dev      # Desarrollo local → http://localhost:5173
npm run build    # Build de producción (dist/)
npm run preview  # Preview del build
npm run lint     # ESLint
```

## Estructura

```
src/
├── components/
│   ├── ui/        # CustomCursor, GrainOverlay, ScrollProgress, SectionLabel, HamburgerMenu
│   └── layout/    # Footer
├── hooks/         # useScrollProgress, useInView
├── sections/      # Hero · Proyectos · Historia · Servicios · Proceso · Testimonios · Consultas
├── App.tsx
└── index.css      # Variables CSS, tipografía global
```

## Assets

Las imágenes van en `public/assets/` y se referencian como `/assets/nombre.webp` — sin imports de Vite.
