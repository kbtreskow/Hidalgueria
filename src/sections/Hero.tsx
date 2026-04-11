import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

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
            objectPosition: 'center',
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
          padding: 'clamp(3rem, 8vw, 8rem) clamp(2rem, 7vw, 9rem)',
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          minHeight: '100svh',
        }}
      >
        <motion.div variants={fadeIn} style={{ marginBottom: '4rem' }}>
          <SectionLabel text="Diseño interior · Alta decoración" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1
            className="editorial"
            style={{
              fontSize: 'clamp(4rem, 10vw, 10.5rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              color: 'var(--obsidian)',
              letterSpacing: '-0.02em',
              maxWidth: '14ch',
            }}
          >
            El arte
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>de vivir</em>
            <br />
            con belleza
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp}
          style={{
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 300,
              fontSize: '0.9rem',
              lineHeight: 1.9,
              color: 'var(--ash)',
              maxWidth: '36ch',
              letterSpacing: '0.04em',
            }}
          >
            Creamos espacios que susurran quiénes somos.<br />
            Cada pieza, cada textura, cada luz —<br />
            una elección deliberada de alma.
          </p>

          <motion.a
            href="#proyectos"
            whileHover={{ letterSpacing: '0.35em', color: 'var(--gold)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--graphite)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              alignSelf: 'flex-end',
              paddingBottom: '0.25rem',
              borderBottom: '1px solid var(--dune)',
            }}
          >
            Descubrir
          </motion.a>
        </motion.div>

        {/* Número editorial */}
        <motion.span
          variants={fadeIn}
          className="editorial"
          style={{
            position: 'absolute',
            right: 'clamp(2rem, 4vw, 5rem)',
            bottom: '4rem',
            fontSize: '7rem',
            fontWeight: 300,
            color: 'transparent',
            WebkitTextStroke: '1px var(--dune)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          01
        </motion.span>

        {/* Scroll hint */}
        <motion.div
          variants={fadeIn}
          style={{
            position: 'absolute',
            bottom: '4rem',
            left: 'clamp(2rem, 7vw, 9rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
            }}
          />
          <span
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 300,
              fontSize: '0.5625rem',
              letterSpacing: '0.25em',
              color: 'var(--ash)',
              textTransform: 'uppercase',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
