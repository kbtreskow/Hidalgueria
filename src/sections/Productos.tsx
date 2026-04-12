import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { SectionLabel } from '../components/ui/SectionLabel'

interface Producto {
  num: string
  categoria: string
  nombre: string
  descripcion: string
  detalle: string
  bg: string
}

const productos: Producto[] = [
  {
    num: '01',
    categoria: 'Cojines',
    nombre: 'Cojines',
    descripcion:
      'Confeccionados en lino belga, terciopelo y seda natural. Cada cojín es una pieza de autor: rellenos de plumón de ganso, costuras invisibles y tejidos seleccionados en talleres europeos.',
    detalle: 'Lino · Terciopelo · Seda natural',
    bg: 'linear-gradient(150deg, #2E2820 0%, #1C1A17 100%)',
  },
  {
    num: '02',
    categoria: 'Plumones',
    nombre: 'Plumones',
    descripcion:
      'Plumón de ganso de primera selección, fundas en algodón pima 500 hilos. Un equilibrio perfecto entre ligereza y abrigo que transforma el descanso en experiencia sensorial.',
    detalle: 'Plumón de ganso · Algodón Pima · 500 hilos',
    bg: 'linear-gradient(150deg, #342C22 0%, #1C1A17 100%)',
  },
  {
    num: '03',
    categoria: 'Cortinas',
    nombre: 'Cortinas',
    descripcion:
      'Cortinería de alta costura diseñada para enmarcar la luz. Telas de caída perfecta — lino lavado, voile de seda, terciopelo apagado — confeccionadas a medida para cada vano.',
    detalle: 'Lino lavado · Voile de seda · Terciopelo',
    bg: 'linear-gradient(150deg, #1E1C18 0%, #2A2518 100%)',
  },
  {
    num: '04',
    categoria: 'Pieceras',
    nombre: 'Pieceras',
    descripcion:
      'El remate definitivo de la cama. Pieceras tapizadas en telas de autor con estructura de madera noble — la firma que une el textil y el espacio en un solo gesto editorial.',
    detalle: 'Roble · Nogal · Tejidos de autor',
    bg: 'linear-gradient(150deg, #2A2318 0%, #1C1A17 100%)',
  },
]

const CAROUSEL_COUNT = 15
const CAROUSEL_INTERVAL = 3500

function ImageCarousel({ categoria, bg }: { categoria: string; bg: string }) {
  const slug = categoria.toLowerCase()
  const images = Array.from(
    { length: CAROUSEL_COUNT },
    (_, i) => `/assets/productos/${slug}/${slug}-${i + 1}.webp`
  )

  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined)
  const panelRef = useRef<HTMLDivElement>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const mouseStartX = useRef<number | null>(null)

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % CAROUSEL_COUNT)
    }, CAROUSEL_INTERVAL)
  }, [])

  useEffect(() => {
    startInterval()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [startInterval])

  const navigate = useCallback((dir: 1 | -1) => {
    setCurrent(c => (c + dir + CAROUSEL_COUNT) % CAROUSEL_COUNT)
    startInterval()
  }, [startInterval])

  // Touch — non-passive para bloquear scroll de página en swipe horizontal
  useEffect(() => {
    const el = panelRef.current
    if (!el) return

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      touchStartRef.current = { x: t.clientX, y: t.clientY }
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current) return
      const dx = Math.abs(e.touches[0].clientX - touchStartRef.current.x)
      const dy = Math.abs(e.touches[0].clientY - touchStartRef.current.y)
      if (dx > dy) e.preventDefault()
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return
      const delta = touchStartRef.current.x - e.changedTouches[0].clientX
      if (Math.abs(delta) > 30) navigate(delta > 0 ? 1 : -1)
      touchStartRef.current = null
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [navigate])

  // Mouse drag — escritorio
  const handleMouseDown = (e: React.MouseEvent) => { mouseStartX.current = e.clientX }
  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartX.current === null) return
    const delta = mouseStartX.current - e.clientX
    if (Math.abs(delta) > 30) navigate(delta > 0 ? 1 : -1)
    mouseStartX.current = null
  }

  return (
    <div
      ref={panelRef}
      style={{ position: 'absolute', inset: 0, userSelect: 'none', cursor: 'grab' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => { mouseStartX.current = null }}
    >
      {/* Gradiente de fallback mientras carga la imagen */}
      <div style={{ position: 'absolute', inset: 0, background: bg }} />

      {/* Stack de imágenes — escala en hover via propagación de variantes */}
      <motion.div
        variants={{ hovered: { scale: 1.07 } }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', inset: 0 }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            draggable={false}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: i === current ? 1 : 0,
              transition: `opacity ${i === current ? '1.4s' : '0.7s'} cubic-bezier(0.16,1,0.3,1)`,
            }}
          />
        ))}
      </motion.div>

      {/* Velo cinematográfico base */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(160deg, rgba(28,26,23,0.18) 0%, rgba(28,26,23,0.04) 50%, rgba(28,26,23,0.55) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Vignette reforzado en esquina superior-izquierda — ancla la paginación */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 55% 45% at 0% 0%, rgba(20,18,15,0.72) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Línea de progreso — bottom, 1px dorada */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(184,149,90,0.12)',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          key={current}
          style={{
            height: '100%',
            background: 'rgba(184,149,90,0.7)',
            transformOrigin: 'left center',
            animation: `carouselFill ${CAROUSEL_INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      {/* Paginación del carousel — contador editorial */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 'clamp(1.75rem, 3.5vw, 3rem)',
          left: 'clamp(1.75rem, 3.5vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          pointerEvents: 'none',
        }}
      >
        {/* Número actual — grande, itálico, editorial */}
        <span
          className="editorial"
          style={{
            fontSize: 'clamp(1.5rem, 2.8vw, 2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.92)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            textShadow: '0 2px 14px rgba(0,0,0,0.5)',
          }}
        >
          {String(current + 1).padStart(2, '0')}
        </span>

        {/* Separador vertical dorado */}
        <div
          style={{
            width: '1px',
            height: '1.1rem',
            background: 'rgba(184,149,90,0.65)',
          }}
        />

        {/* Total — pequeño, sutil */}
        <span
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 300,
            fontSize: '0.5rem',
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.4)',
            textShadow: '0 1px 8px rgba(0,0,0,0.6)',
          }}
        >
          {String(CAROUSEL_COUNT).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

function ProductoRow({ producto, index }: { producto: Producto; index: number }) {
  const isReversed = index % 2 !== 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {index > 0 && (
        <div style={{ height: '1px', background: 'rgba(184,149,90,0.12)' }} />
      )}

      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

        {/* Panel imagen — whileHover propaga "hovered" a las imágenes */}
        <motion.div
          className="w-full md:w-1/2 flex-shrink-0"
          whileHover="hovered"
          style={{
            minHeight: 'clamp(240px, 40vw, 520px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <ImageCarousel categoria={producto.categoria} bg={producto.bg} />

          {/* Categoría bottom-left */}
          <div
            style={{
              position: 'absolute',
              bottom: 'clamp(1.75rem, 3.5vw, 3rem)',
              left: 'clamp(1.75rem, 3.5vw, 3rem)',
            }}
          >
            <span
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 300,
                fontSize: '0.55rem',
                letterSpacing: '0.28em',
                color: 'rgba(245,240,232,0.2)',
                textTransform: 'uppercase',
              }}
            >
              {producto.categoria}
            </span>
          </div>
        </motion.div>

        {/* Panel texto — escala sutil hacia afuera en hover */}
        <motion.div
          className="w-full md:w-1/2"
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: 'clamp(3rem, 6vw, 6rem) clamp(2.5rem, 5vw, 5rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transformOrigin: isReversed ? 'left center' : 'right center',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 300,
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            {producto.categoria}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="editorial"
            style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 5rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 0.92,
              letterSpacing: '-0.025em',
              marginBottom: '2.25rem',
            }}
          >
            {producto.nombre}
          </motion.h3>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            style={{
              width: '44px',
              height: '1px',
              background: 'rgba(184,149,90,0.45)',
              marginBottom: '2.25rem',
              transformOrigin: 'left',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.875rem, 1.15vw, 1rem)',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '2.5rem',
              maxWidth: '38ch',
            }}
          >
            {producto.descripcion}
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 300,
              fontSize: '0.575rem',
              letterSpacing: '0.24em',
              color: 'rgba(184,149,90,0.45)',
              textTransform: 'uppercase',
            }}
          >
            {producto.detalle}
          </motion.span>
        </motion.div>
      </div>
    </motion.article>
  )
}

export function Productos() {
  return (
    <section
      id="productos"
      style={{
        background: 'var(--obsidian)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradiente ambiental */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 25% 10%, rgba(184,149,90,0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Cabecera */}
      <div
        style={{
          padding: 'clamp(6rem, 12vw, 14rem) clamp(2rem, 7vw, 9rem) clamp(3.5rem, 7vw, 7rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel text="Nuestra colección" />
            <h2
              className="editorial"
              style={{
                marginTop: '2.5rem',
                fontSize: 'clamp(3.5rem, 8vw, 8rem)',
                fontWeight: 300,
                color: 'var(--cream)',
                lineHeight: 0.88,
                letterSpacing: '-0.035em',
              }}
            >
              Materia
              <br />
              <em style={{ color: 'var(--gold)' }}>Prima</em>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Filas de producto */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          paddingBottom: 'clamp(6rem, 12vw, 14rem)',
        }}
      >
        {productos.map((p, i) => (
          <ProductoRow key={p.num} producto={p} index={i} />
        ))}
      </div>
    </section>
  )
}
