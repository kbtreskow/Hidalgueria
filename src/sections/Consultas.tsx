import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

interface EnlaceContacto {
  plataforma: string
  descripcion: string
  href: string
  etiqueta: string
}

const enlaces: EnlaceContacto[] = [
  {
    plataforma: 'Instagram',
    descripcion: 'Galería de proyectos y proceso creativo',
    href: 'https://instagram.com/hidalgueria',
    etiqueta: '@hidalgueria',
  },
  {
    plataforma: 'WhatsApp',
    descripcion: 'Para consultas, citas y proyectos',
    href: 'https://wa.me/5215500000000',
    etiqueta: '+52 55 0000 0000',
  },
]

export function Consultas() {
  return (
    <section
      id="consultas"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(6rem, 12vw, 14rem) clamp(2rem, 7vw, 9rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fondo decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
        style={{
          position: 'absolute',
          right: '-10vw',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50vw',
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(212,197,169,0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 8vw, 10rem)',
            alignItems: 'center',
          }}
        >
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel text="Iniciemos una conversación" />

            <h2
              className="editorial"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
                fontWeight: 300,
                color: 'var(--obsidian)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                marginTop: '2rem',
                marginBottom: '2.5rem',
              }}
            >
              Cada gran
              <br />
              espacio comienza
              <br />
              con un{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>hola</em>
            </h2>

            <p
              style={{
                fontSize: '0.8125rem',
                lineHeight: 1.9,
                color: 'var(--ash)',
                maxWidth: '42ch',
                fontWeight: 300,
                letterSpacing: '0.03em',
              }}
            >
              No existe el proyecto demasiado pequeño ni demasiado ambicioso. Si siente que su espacio puede ser más fiel a usted, queremos escucharlo.
            </p>
          </motion.div>

          {/* Enlaces de contacto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {enlaces.map((enlace, i) => (
              <motion.a
                key={enlace.plataforma}
                href={enlace.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                whileHover="hover"
                style={{
                  display: 'block',
                  padding: '3rem 0',
                  borderBottom: '1px solid var(--sand)',
                  textDecoration: 'none',
                  cursor: 'none',
                  borderTop: i === 0 ? '1px solid var(--sand)' : undefined,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '2rem',
                  }}
                >
                  <div>
                    <motion.h3
                      variants={{
                        hover: { x: 8, color: 'var(--gold)' },
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="editorial"
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 300,
                        color: 'var(--obsidian)',
                        lineHeight: 1.1,
                        letterSpacing: '-0.01em',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {enlace.plataforma}
                    </motion.h3>

                    <p
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        color: 'var(--ash)',
                        textTransform: 'uppercase',
                        fontWeight: 300,
                      }}
                    >
                      {enlace.descripcion}
                    </p>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <motion.span
                      variants={{ hover: { color: 'var(--gold)' } }}
                      style={{
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        color: 'var(--graphite)',
                        display: 'block',
                      }}
                    >
                      {enlace.etiqueta}
                    </motion.span>
                    <motion.span
                      variants={{ hover: { x: 4 } }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: 'inline-block',
                        fontSize: '0.875rem',
                        color: 'var(--dune)',
                        marginTop: '0.5rem',
                      }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Ciudad y disponibilidad */}
            <div
              style={{
                paddingTop: '2rem',
                display: 'flex',
                gap: '3rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.5625rem',
                    letterSpacing: '0.25em',
                    color: 'var(--ash)',
                    textTransform: 'uppercase',
                    fontWeight: 300,
                    marginBottom: '0.5rem',
                  }}
                >
                  Base
                </span>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--graphite)',
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                  }}
                >
                  Ciudad de México
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.5625rem',
                    letterSpacing: '0.25em',
                    color: 'var(--ash)',
                    textTransform: 'uppercase',
                    fontWeight: 300,
                    marginBottom: '0.5rem',
                  }}
                >
                  Cobertura
                </span>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--graphite)',
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                  }}
                >
                  Nacional · Internacional selecto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
