import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

interface Proyecto {
  id: string
  numero: string
  nombre: string
  tipo: string
  ubicacion: string
  año: string
  descripcion: string
  palette: string[]
  imagen?: string
}

const proyectos: Proyecto[] = [
  {
    id: 'p01',
    numero: '01',
    nombre: 'Residencia Alameda',
    tipo: 'Residencial',
    ubicacion: 'Polanco, CDMX',
    año: '2024',
    descripcion: 'Intervención total de un penthouse de 380 m². Paleta de mármol travertino, roble natural y lino belga.',
    palette: ['#C4B49A', '#8B7355', '#F0E8DC'],
    imagen: '/assets/proyecto-1.jpg',
  },
  {
    id: 'p02',
    numero: '02',
    nombre: 'Suite Monserrat',
    tipo: 'Hospitalidad',
    ubicacion: 'Lomas de Chapultepec',
    año: '2024',
    descripcion: 'Suite presidencial para coleccionista de arte contemporáneo. Cada mueble, una pieza única fabricada en taller italiano.',
    palette: ['#9B8B75', '#D4C5A9', '#4A4540'],
    imagen: '/assets/proyecto-2.jpg',
  },
  {
    id: 'p03',
    numero: '03',
    nombre: 'Casa Piedra',
    tipo: 'Arquitectura Interior',
    ubicacion: 'Valle de Bravo',
    año: '2023',
    descripcion: 'Integración del entorno lacustre en cada decisión espacial. Cantera local, terciopelo verde musgo, latón envejecido.',
    palette: ['#7A8C7A', '#C4B49A', '#2C3A2C'],
    imagen: '/assets/proyecto-3.jpg',
  },
  {
    id: 'p04',
    numero: '04',
    nombre: 'Penthouse Narvarte',
    tipo: 'Residencial',
    ubicacion: 'Narvarte, CDMX',
    año: '2023',
    descripcion: 'Reconversión de ático industrial en vivienda de lujo. Hormigón pulido, vidrio emplomado y acero negro mate.',
    palette: ['#5C5550', '#A09590', '#E8E0D8'],
    imagen: '/assets/proyecto-4.jpg',
  },
  {
    id: 'p05',
    numero: '05',
    nombre: 'Galería Merced',
    tipo: 'Comercial',
    ubicacion: 'Centro Histórico, CDMX',
    año: '2023',
    descripcion: 'Espacio expositivo para obra escultórica. Muros de estuco veneciano y pisos de piedra Andesita negra pulida.',
    palette: ['#3A3530', '#8B7355', '#D4C5A9'],
    imagen: '/assets/proyecto-5.jpg',
  },
  {
    id: 'p06',
    numero: '06',
    nombre: 'Villa Tepozán',
    tipo: 'Residencial',
    ubicacion: 'Tepoztlán, Morelos',
    año: '2022',
    descripcion: 'Casa de campo con vocación contemplativa. Paleta de adobe, lámina de cobre y telas de algodón natural sin tintar.',
    palette: ['#A0785A', '#D4B896', '#6B4A30'],
    imagen: '/assets/proyecto-6.jpg',
  },
  {
    id: 'p07',
    numero: '07',
    nombre: 'Oficinas Reforma',
    tipo: 'Corporativo',
    ubicacion: 'Paseo de la Reforma',
    año: '2022',
    descripcion: 'Rediseño integral de planta ejecutiva. El silencio del mármol negro Marquina contrasta con la calidez del cuero curtido a mano.',
    palette: ['#1C1A17', '#B8955A', '#F5F0E8'],
    imagen: '/assets/proyecto-7.jpg',
  },
  {
    id: 'p08',
    numero: '08',
    nombre: 'Spa Quetzal',
    tipo: 'Bienestar',
    ubicacion: 'Santa Fe, CDMX',
    año: '2022',
    descripcion: 'Recinto de descanso sensorial. Piedra volcánica, madera de teca y textiles de seda thai en tonos tierra.',
    palette: ['#8A7060', '#C4A882', '#4A3828'],
    imagen: '/assets/proyecto-8.jpg',
  },
  {
    id: 'p09',
    numero: '09',
    nombre: 'Casa Bosques',
    tipo: 'Residencial',
    ubicacion: 'Bosques de las Lomas',
    año: '2021',
    descripcion: 'Residencia familiar de 600 m². Diálogo entre modernidad y artesanía oaxaqueña. Barro negro, plata y lino crudo.',
    palette: ['#6B6458', '#C8B8A2', '#2C2820'],
    imagen: '/assets/proyecto-9.jpg',
  },
  {
    id: 'p10',
    numero: '10',
    nombre: 'Boutique Álvaro',
    tipo: 'Retail de lujo',
    ubicacion: 'Masaryk, CDMX',
    año: '2021',
    descripcion: 'Flagship store para marca de joyería de autor. Retroiluminación de alabastro y vitrinas suspendidas en latón dorado.',
    palette: ['#B8955A', '#F5F0E8', '#9B9591'],
    imagen: '/assets/proyecto-10.jpg',
  },
  {
    id: 'p11',
    numero: '11',
    nombre: 'Loft Doctores',
    tipo: 'Residencial',
    ubicacion: 'Colonia Doctores, CDMX',
    año: '2021',
    descripcion: 'Transformación de bodega en vivienda artista. Estructura metálica expuesta, vidrio de colores y hormigón a la vista.',
    palette: ['#5A6070', '#A8B0B8', '#2A3040'],
    imagen: '/assets/proyecto-11.jpg',
  },
  {
    id: 'p12',
    numero: '12',
    nombre: 'Hacienda Guanajuato',
    tipo: 'Patrimonio',
    ubicacion: 'Guanajuato',
    año: '2020',
    descripcion: 'Restauración de hacienda del siglo XVIII. Recuperación de fresco original, cantera rosa y talavera poblana de época.',
    palette: ['#C08060', '#E8D0B0', '#783820'],
    imagen: '/assets/proyecto-12.jpg',
  },
  {
    id: 'p13',
    numero: '13',
    nombre: 'Suite Camino Real',
    tipo: 'Hospitalidad',
    ubicacion: 'Pedregal, CDMX',
    año: '2020',
    descripcion: 'Suite de gran lujo en hotel icónico. Reinterpretación contemporánea del muralismo mexicano en clave abstracta.',
    palette: ['#8B4040', '#D4A878', '#F0E8E0'],
    imagen: '/assets/proyecto-13.jpg',
  },
  {
    id: 'p14',
    numero: '14',
    nombre: 'Residencia del Mar',
    tipo: 'Residencial',
    ubicacion: 'Punta Mita, Nayarit',
    año: '2020',
    descripcion: 'Casa frente al Pacífico. Cada material elegido para su resistencia a la brisa y su belleza sin esfuerzo aparente.',
    palette: ['#4A7080', '#A8C8D0', '#F0EAE0'],
    imagen: '/assets/proyecto-14.jpg',
  },
  {
    id: 'p15',
    numero: '15',
    nombre: 'Atelier Colima',
    tipo: 'Estudio creativo',
    ubicacion: 'Colima',
    año: '2019',
    descripcion: 'Estudio de arquitectura y diseño. Espacio de trabajo que es en sí mismo una declaración de intenciones estéticas.',
    palette: ['#788060', '#C0C8A8', '#404828'],
    imagen: '/assets/proyecto-15.jpg',
  },
  {
    id: 'p16',
    numero: '16',
    nombre: 'Casa Mínima',
    tipo: 'Residencial',
    ubicacion: 'Condesa, CDMX',
    año: '2019',
    descripcion: 'Vivienda de 90 m² donde la restricción espacial se convierte en virtud. Economía de medios, riqueza de atmósfera.',
    palette: ['#9B9591', '#E8DFD0', '#1C1A17'],
    imagen: '/assets/proyecto-16.jpg',
  },
]

// ─── Constantes del carousel ────────────────────────────────────────────────
const PER_PAGE = 2
const TOTAL_PAGES = Math.ceil(proyectos.length / PER_PAGE) // 8

// ─── Variantes de animación ─────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1] as const


// ─── Tarjeta individual (orientación vertical para layout 2-col) ─────────────
function ProyectoCard({ proyecto, delay = 0 }: { proyecto: Proyecto; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}
    >
      {/* Imagen */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          aspectRatio: '4/3',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${proyecto.palette[0]}, ${proyecto.palette[1]})`,
        }}
      >
        {proyecto.imagen && (
          <img
            src={proyecto.imagen}
            alt={proyecto.nombre}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        )}

        {/* Paleta flotante */}
        <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', display: 'flex', gap: '0.4rem' }}>
          {proyecto.palette.map((color, i) => (
            <div
              key={i}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: color,
                border: '1px solid rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </div>

        {/* Número editorial */}
        <span
          className="editorial"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1.25rem',
            fontSize: '4.5rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.18)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {proyecto.numero}
        </span>
      </motion.div>

      {/* Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <SectionLabel text={`${proyecto.tipo} · ${proyecto.año}`} />

        <h3
          className="editorial"
          style={{
            fontSize: 'clamp(1.6rem, 2.5vw, 2.5rem)',
            fontWeight: 300,
            color: 'var(--obsidian)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {proyecto.nombre}
        </h3>

        <p
          style={{
            fontSize: '0.8125rem',
            lineHeight: 1.9,
            color: 'var(--ash)',
            fontWeight: 300,
            letterSpacing: '0.03em',
            maxWidth: '42ch',
          }}
        >
          {proyecto.descripcion}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
          <div className="rule-gold" />
          <span
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              color: 'var(--ash)',
              textTransform: 'uppercase',
              fontWeight: 300,
            }}
          >
            {proyecto.ubicacion}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Componente principal ────────────────────────────────────────────────────
export function Proyectos() {
  const [page, setPage] = useState(0)

  const prev = () => { if (page > 0) setPage(p => p - 1) }
  const next = () => { if (page < TOTAL_PAGES - 1) setPage(p => p + 1) }

  return (
    <div style={{ overflow: 'hidden', background: 'var(--cream)' }}>
    <section
      id="proyectos"
      style={{
        paddingTop: 'clamp(6rem, 12vw, 14rem)',
        paddingBottom: 'clamp(3rem, 5vw, 5rem)',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '5rem',
          flexWrap: 'wrap',
          gap: '2rem',
          paddingLeft: 'clamp(2rem, 7vw, 9rem)',
          paddingRight: 'clamp(2rem, 7vw, 9rem)',
        }}
      >
        <div>
          <SectionLabel text="Portfolio selecto" />
          <h2
            className="editorial"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 300,
              color: 'var(--obsidian)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginTop: '1.5rem',
            }}
          >
            Proyectos
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>destacados</em>
          </h2>
        </div>

        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--ash)',
            lineHeight: 1.8,
            maxWidth: '28ch',
            textAlign: 'right',
            fontWeight: 300,
            letterSpacing: '0.03em',
          }}
        >
          Cada espacio, una conversación íntima entre el cliente y su entorno ideal.
        </p>
      </div>

      {/* Carousel — breakout full-bleed para que el clip sea el borde del viewport */}
      <div
        style={{
          position: 'relative',
          left: '50%',
          width: '100vw',
          transform: 'translateX(-50%)',
          minHeight: 'clamp(560px, 65vh, 780px)',
        }}
      >
        {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => {
          const pageItems = proyectos.slice(pageIndex * PER_PAGE, pageIndex * PER_PAGE + PER_PAGE)
          const xOffset = `${(pageIndex - page) * 100}vw`
          return (
            <motion.div
              key={pageIndex}
              animate={{ x: xOffset }}
              transition={{ duration: 0.72, ease: EASE }}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
            >
              <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                paddingLeft: 'clamp(2rem, 7vw, 9rem)',
                paddingRight: 'clamp(2rem, 7vw, 9rem)',
                boxSizing: 'border-box',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(2rem, 5vw, 5rem)',
              }}>
                {pageItems.map((p) => (
                  <ProyectoCard key={p.id} proyecto={p} />
                ))}
              </div>
            </motion.div>
          )
        })}

        {/* Flecha izquierda — sobre el carousel, borde izquierdo */}
        <button
          onClick={prev}
          disabled={page === 0}
          style={{
            position: 'absolute',
            left: 'clamp(1rem, 2.5vw, 2.5rem)',
            top: 'clamp(120px, 12vw, 190px)',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: page === 0 ? 'default' : 'pointer',
            opacity: page === 0 ? 0.2 : 1,
            padding: '0.5rem',
            transition: 'opacity 0.3s ease',
            zIndex: 10,
          }}
        >
          <svg width="44" height="10" viewBox="0 0 44 10" fill="none">
            <line x1="44" y1="5" x2="2" y2="5" stroke="var(--graphite)" strokeWidth="0.75" />
            <polyline points="10,1 1,5 10,9" fill="none" stroke="var(--graphite)" strokeWidth="0.75" />
          </svg>
        </button>

        {/* Flecha derecha — sobre el carousel, borde derecho */}
        <button
          onClick={next}
          disabled={page === TOTAL_PAGES - 1}
          style={{
            position: 'absolute',
            right: 'clamp(1rem, 2.5vw, 2.5rem)',
            top: 'clamp(120px, 12vw, 190px)',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: page === TOTAL_PAGES - 1 ? 'default' : 'pointer',
            opacity: page === TOTAL_PAGES - 1 ? 0.2 : 1,
            padding: '0.5rem',
            transition: 'opacity 0.3s ease',
            zIndex: 10,
          }}
        >
          <svg width="44" height="10" viewBox="0 0 44 10" fill="none">
            <line x1="0" y1="5" x2="42" y2="5" stroke="var(--graphite)" strokeWidth="0.75" />
            <polyline points="34,1 43,5 34,9" fill="none" stroke="var(--graphite)" strokeWidth="0.75" />
          </svg>
        </button>
      </div>

    </section>

      {/* Barra de progreso — full-bleed, hermana directa del wrapper para evitar clipping */}
      <div style={{ height: '2px', background: 'var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={false}
          animate={{ scaleX: (page + 1) / TOTAL_PAGES }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            position: 'absolute', top: 0, left: 0,
            height: '100%', width: '100%',
            background: 'var(--gold)',
            transformOrigin: 'left center',
          }}
        />
      </div>
    </div>
  )
}

