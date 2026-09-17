import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

interface Principio {
  numero: string
  titulo: string
  texto: string
}

const principios: Principio[] = [
  {
    numero: 'I',
    titulo: 'La materia primero',
    texto:
      'Elegimos linos, tusores y fibras naturales por su textura, su caída y la belleza que adquieren con el tiempo.',
  },
  {
    numero: 'II',
    titulo: 'El valor del oficio',
    texto:
      'Cada pieza pasa por manos expertas. Cortamos, combinamos y confeccionamos cuidando proporciones y terminaciones.',
  },
  {
    numero: 'III',
    titulo: 'Elegancia natural',
    texto:
      'Creemos en una belleza serena. Capas, texturas y tonos que conviven en armonía, sin excesos.',
  },
]

export function Historia() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const textX = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section
      id="historia"
      ref={ref}
      style={{
        background: 'var(--obsidian)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(6rem, 12vw, 14rem) clamp(2rem, 7vw, 9rem)',
      }}
    >
      {/* Textura de fondo parallax */}
      <motion.div
        style={{
          y: bgY,
          position: 'absolute',
          inset: '-20%',
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(184,149,90,0.08) 0%, transparent 60%),
                           radial-gradient(ellipse at 80% 20%, rgba(212,197,169,0.05) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      {/* Número enorme de fondo */}
      <motion.span
        style={{
          x: textX,
          position: 'absolute',
          right: '-2rem',
          top: '50%',
          translateY: '-50%',
          fontSize: '30vw',
          fontWeight: 300,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(184,149,90,0.08)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        className="editorial"
        aria-hidden
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: 'clamp(3rem, 8vw, 10rem)',
            alignItems: 'start',
          }}
        >
          {/* Columna izquierda: historia */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel text="Nuestra historia" />

            <h2
              className="editorial"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 300,
                color: 'var(--cream)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginTop: '2rem',
                marginBottom: '2.5rem',
              }}
            >
              Hacer
              <br />
              es un acto
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>de amor</em>
            </h2>

            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: 2,
                color: 'rgba(245,240,232,0.65)',
                maxWidth: '42ch',
                fontWeight: 300,
                letterSpacing: '0.03em',
              }}
            >
              La Hidalguería nace del amor por los textiles, las fibras naturales y el valor de aquello que ha sido hecho con las manos.
              <br /><br />
              Una forma de entender la ropa de cama donde la belleza comienza en la materia y cobra vida a través del oficio.
            </p>
          </motion.div>

          {/* Columna derecha: principios */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingTop: '2rem' }}>
            {principios.map((p, i) => (
              <motion.div
                key={p.numero}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.25 }}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  paddingBottom: '3rem',
                  borderBottom: '1px solid rgba(245,240,232,0.08)',
                }}
              >
                <span
                  className="editorial"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    color: 'var(--gold)',
                    minWidth: '2rem',
                    fontStyle: 'italic',
                  }}
                >
                  {p.numero}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.6875rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--dune)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {p.titulo}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      lineHeight: 1.9,
                      color: 'rgba(245,240,232,0.55)',
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {p.texto}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
