import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

interface Testimonio {
  id: string
  texto: string
  cliente: string
  proyecto: string
  año: string
}

const testimonios: Testimonio[] = [
  {
    id: 't1',
    texto: 'Entregaron no solo un espacio hermoso — entregaron la versión más clara de quiénes somos como familia. Cada rincón de nuestra casa ahora nos habla.',
    cliente: 'M.P. & R.V.',
    proyecto: 'Residencia Alameda',
    año: '2024',
  },
  {
    id: 't2',
    texto: 'Lo que más me sorprendió fue que escucharon con una atención que raramente experimento. El resultado no podría ser más fiel a lo que jamás había sabido articular.',
    cliente: 'A.L.',
    proyecto: 'Suite Monserrat',
    año: '2024',
  },
  {
    id: 't3',
    texto: 'Viví en el espacio que diseñaron durante tres años antes de saber exactamente qué es lo que lo hace tan perfecto. Eso es diseño que trasciende.',
    cliente: 'C. & D.H.',
    proyecto: 'Casa Piedra',
    año: '2023',
  },
]

export function Testimonios() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="testimonios"
      style={{
        background: 'var(--obsidian)',
        padding: 'clamp(6rem, 12vw, 14rem) clamp(2rem, 7vw, 9rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fondo dorado sutil */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(184,149,90,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <SectionLabel text="Voces de clientes" align="center" />
        </div>

        {/* Cita activa */}
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonios[active].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="editorial"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.75rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--cream)',
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                  marginBottom: '3rem',
                }}
              >
                &ldquo;{testimonios[active].texto}&rdquo;
              </p>

              <footer>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '1px',
                      background: 'var(--gold)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.6875rem',
                      letterSpacing: '0.2em',
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {testimonios[active].cliente}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '1px',
                      background: 'var(--gold)',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.625rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(245,240,232,0.4)',
                    textTransform: 'uppercase',
                  }}
                >
                  {testimonios[active].proyecto} · {testimonios[active].año}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '4rem',
          }}
        >
          {testimonios.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scaleX: 1.5 }}
              style={{
                width: i === active ? '48px' : '20px',
                height: '1px',
                background: i === active ? 'var(--gold)' : 'rgba(245,240,232,0.2)',
                border: 'none',
                cursor: 'none',
                transition: 'all 0.4s ease',
                outline: 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
