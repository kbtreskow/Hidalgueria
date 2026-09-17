import { motion } from 'framer-motion'

export function Consultas() {
  return (
    <section
      id="consultas"
      style={{
        background: 'var(--obsidian)',
        padding: 'clamp(6rem, 12vw, 12rem) clamp(2rem, 7vw, 9rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Resplandor decorativo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          maxWidth: '900px',
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(184,149,90,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '52rem',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
            }}
          >
            La belleza de lo irrepetible
          </span>

          <h2
            className="editorial"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            Ahora,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
              imagina la tuya.
            </em>
          </h2>

          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.9,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '46ch',
              fontWeight: 300,
              letterSpacing: '0.02em',
              marginBottom: '2.75rem',
            }}
          >
            Has conocido nuestra forma de hacer. Ahora descubre nuestras composiciones y encuentra el punto de partida para tu cama.
          </p>

          <motion.button
            type="button"
            whileHover="hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'none',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}
          >
            <motion.span
              variants={{ hover: { color: 'var(--gold-light)' } }}
              style={{
                borderBottom: '1px solid var(--gold)',
                paddingBottom: '0.2rem',
              }}
            >
              Descubre nuestras camas
            </motion.span>
            <motion.span
              variants={{ hover: { x: 6 } }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ display: 'inline-block', fontSize: '0.8125rem' }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
