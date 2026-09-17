import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' && window.innerWidth >= 1024
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isDesktop
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.3,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const } },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.4, ease: 'easeOut' as const } },
}

export function Hero() {
  const isDesktop = useIsDesktop()
  return (
    <section
      id="inicio"
      style={{
        minHeight: '100svh',
        background: 'var(--cream)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fondo: bloque derecho — imagen o fallback arena */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '42%',
          background: 'var(--sand)',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src="/assets/hero.webp"
          alt=""
          fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '10% center',
          }}
        />
      </motion.div>

      {/* Línea vertical decorativa */}
      <motion.div
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        style={{
          position: 'absolute',
          left: '58%',
          top: '10%',
          bottom: '10%',
          width: '1px',
          background: 'var(--dune)',
          zIndex: 1,
        }}
      />

      {/* Contenido principal */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isDesktop
            ? 'clamp(3rem, 8vw, 8rem) clamp(2rem, 7vw, 9rem)'
            : 'clamp(2rem, 6vw, 3rem) clamp(1.25rem, 5vw, 2rem)',
          minHeight: '100svh',
          ...(isDesktop ? {} : { width: '58%', boxSizing: 'border-box' as const }),
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <motion.div variants={fadeIn} style={{ marginBottom: isDesktop ? '4rem' : '1.75rem' }}>
            <SectionLabel text="Home" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1
              className="editorial"
              style={{
                fontSize: isDesktop ? 'clamp(4.9rem, 10vw, 11.4rem)' : 'clamp(3.4rem, 9vw, 4.4rem)',
                fontWeight: 300,
                lineHeight: 0.95,
                color: 'var(--obsidian)',
                letterSpacing: '-0.02em',
                maxWidth: isDesktop ? '14ch' : 'none',
              }}
            >
              El arte
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>de vestir</em>
              <br />
              la cama
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{
              marginTop: isDesktop ? '3rem' : '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: isDesktop ? '3rem' : '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            <p
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 300,
                fontSize: isDesktop ? '0.9rem' : '0.75rem',
                lineHeight: isDesktop ? 1.9 : 1.7,
                color: 'var(--ash)',
                maxWidth: isDesktop ? '36ch' : 'none',
                letterSpacing: '0.04em',
              }}
            >
              Creamos textiles que hablan de una forma de vivir.<br /><br />
              Fibras nobles, oficio y detalles hechos a mano — piezas únicas concebidas para perdurar.
            </p>

            <motion.a
              href="#proyectos"
              whileHover={{ letterSpacing: '0.35em', color: 'var(--gold)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 300,
                fontSize: isDesktop ? '0.6875rem' : '0.625rem',
                letterSpacing: isDesktop ? '0.28em' : '0.16em',
                textTransform: 'uppercase',
                color: 'var(--graphite)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                alignSelf: isDesktop ? 'flex-end' : 'flex-start',
                paddingBottom: '0.25rem',
                borderBottom: '1px solid var(--dune)',
              }}
            >
              Descubre nuestras camas
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
