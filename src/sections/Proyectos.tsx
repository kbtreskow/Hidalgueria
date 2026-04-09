import { useState, useRef, useEffect } from 'react'
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
const CARD_W_VW = 58   // ancho de cada tarjeta en vw
const GAP_VW = 3       // espacio entre tarjetas en vw
const STEP_VW = CARD_W_VW + GAP_VW  // 61vw por paso
const OFFSET_VW = (100 - CARD_W_VW) / 2  // 21vw — centra la tarjeta activa
const TOTAL = proyectos.length

// ─── Variantes de animación ─────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1] as const

// ─── Tarjeta individual — imagen completa + overlay ──────────────────────────
function ProyectoCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <motion.article
      whileHover="hover"
      style={{
        position: 'relative',
        width: `${CARD_W_VW}vw`,
        height: 'clamp(480px, 68vh, 780px)',
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: '30px',
        background: `linear-gradient(145deg, ${proyecto.palette[0]}, ${proyecto.palette[1]})`,
      }}
    >
      {/* Imagen de fondo */}
      {proyecto.imagen && (
        <motion.img
          src={proyecto.imagen}
          alt={proyecto.nombre}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }}
        />
      )}

      {/* Gradiente para legibilidad del texto */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,8,5,0.08) 0%, rgba(10,8,5,0.18) 45%, rgba(10,8,5,0.82) 100%)',
      }} />

      {/* Número editorial — esquina superior izquierda */}
      <span
        className="editorial"
        style={{
          position: 'absolute', top: '1.75rem', left: '2rem',
          fontSize: 'clamp(3.5rem, 5vw, 5.5rem)', fontWeight: 300,
          color: 'rgba(255,255,255,0.18)', lineHeight: 1, userSelect: 'none',
        }}
      >
        {proyecto.numero}
      </span>

      {/* Paleta de colores — esquina superior derecha */}
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', display: 'flex', gap: '0.45rem' }}>
        {proyecto.palette.map((color, i) => (
          <div
            key={i}
            style={{
              width: '16px', height: '16px', borderRadius: '50%',
              background: color, border: '1.5px solid rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* Contenido — zona inferior */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: 'clamp(1.75rem, 3vw, 2.5rem) clamp(1.75rem, 3vw, 2.5rem) clamp(2rem, 3.5vw, 3rem)',
        display: 'flex', flexDirection: 'column', gap: '0.65rem',
      }}>
        {/* Label tipo · año */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--gold)' }} />
          <span style={{
            fontFamily: 'Raleway, sans-serif', fontWeight: 300,
            fontSize: '0.6rem', letterSpacing: '0.28em',
            color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase',
          }}>
            {proyecto.tipo} · {proyecto.año}
          </span>
        </div>

        {/* Nombre */}
        <h3
          className="editorial"
          style={{
            fontSize: 'clamp(1.6rem, 2.6vw, 2.8rem)', fontWeight: 300,
            color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em',
          }}
        >
          {proyecto.nombre}
        </h3>

        {/* Descripción */}
        <p style={{
          fontSize: '0.8rem', lineHeight: 1.85,
          color: 'rgba(255,255,255,0.68)',
          fontWeight: 300, letterSpacing: '0.025em',
          maxWidth: '48ch',
        }}>
          {proyecto.descripcion}
        </p>

        {/* Ubicación */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
          <div style={{ width: '1.5rem', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
          <span style={{
            fontSize: '0.6rem', letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', fontWeight: 300,
          }}>
            {proyecto.ubicacion}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Componente principal ────────────────────────────────────────────────────
export function Proyectos() {
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const dragStart = useRef<{ x: number; y: number } | null>(null)

  const prev = () => { if (current > 0) setCurrent(c => c - 1) }
  const next = () => { if (current < TOTAL - 1) setCurrent(c => c + 1) }

  // Touch (móvil) — registrado como non-passive para poder llamar preventDefault
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      dragStart.current = { x: t.clientX, y: t.clientY }
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!dragStart.current) return
      const dx = Math.abs(e.touches[0].clientX - dragStart.current.x)
      const dy = Math.abs(e.touches[0].clientY - dragStart.current.y)
      if (dx > dy) e.preventDefault() // bloquea scroll de página en swipe horizontal
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!dragStart.current) return
      const delta = dragStart.current.x - e.changedTouches[0].clientX
      if (Math.abs(delta) > 30) {
        if (delta > 0) next()
        else prev()
      }
      dragStart.current = null
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [current]) // eslint-disable-line react-hooks/exhaustive-deps

  // Mouse drag (escritorio)
  const mouseStartX = useRef<number | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => { mouseStartX.current = e.clientX }
  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return
    const delta = mouseStartX.current - e.clientX
    if (Math.abs(delta) > 30) {
      if (delta > 0) next()
      else prev()
    }
    mouseStartX.current = null
  }

  return (
    <div style={{ overflow: 'hidden', background: 'var(--cream)' }}>
      <section
        id="proyectos"
        style={{
          paddingTop: 'clamp(6rem, 12vw, 14rem)',
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
      </section>

      {/* Carousel — full-bleed con peek lateral */}
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => { mouseStartX.current = null }}
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(480px, 68vh, 780px)',
          overflow: 'hidden',
          cursor: 'grab',
          userSelect: 'none',
        }}
      >
        {/* Track con todas las tarjetas */}
        {proyectos.map((p, i) => {
          const xVw = (i - current) * STEP_VW + OFFSET_VW
          return (
            <motion.div
              key={p.id}
              animate={{ x: `${xVw}vw`, scale: i === current ? 1 : 0.88 }}
              transition={{ duration: 0.72, ease: EASE }}
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              <ProyectoCard proyecto={p} />
            </motion.div>
          )
        })}
      </div>

      {/* Navegación */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
          paddingTop: '2.5rem',
          paddingBottom: 'clamp(3rem, 5vw, 5rem)',
          background: 'var(--cream)',
        }}
      >
        {/* Flecha anterior */}
        <button
          onClick={prev}
          disabled={current === 0}
          style={{
            background: 'none', border: 'none',
            cursor: current === 0 ? 'default' : 'pointer',
            opacity: current === 0 ? 0.2 : 1,
            padding: '0.5rem',
            transition: 'opacity 0.3s ease',
          }}
        >
          <svg width="44" height="10" viewBox="0 0 44 10" fill="none">
            <line x1="44" y1="5" x2="2" y2="5" stroke="var(--graphite)" strokeWidth="0.75" />
            <polyline points="10,1 1,5 10,9" fill="none" stroke="var(--graphite)" strokeWidth="0.75" />
          </svg>
        </button>

        {/* Contador editorial */}
        <span
          className="editorial"
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            color: 'var(--ash)',
            fontWeight: 300,
            userSelect: 'none',
            minWidth: '5ch',
            textAlign: 'center',
          }}
        >
          {String(current + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
        </span>

        {/* Flecha siguiente */}
        <button
          onClick={next}
          disabled={current === TOTAL - 1}
          style={{
            background: 'none', border: 'none',
            cursor: current === TOTAL - 1 ? 'default' : 'pointer',
            opacity: current === TOTAL - 1 ? 0.2 : 1,
            padding: '0.5rem',
            transition: 'opacity 0.3s ease',
          }}
        >
          <svg width="44" height="10" viewBox="0 0 44 10" fill="none">
            <line x1="0" y1="5" x2="42" y2="5" stroke="var(--graphite)" strokeWidth="0.75" />
            <polyline points="34,1 43,5 34,9" fill="none" stroke="var(--graphite)" strokeWidth="0.75" />
          </svg>
        </button>
      </div>
    </div>
  )
}
