import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

interface Etapa {
  numero: string
  fase: string
  titulo: string
  descripcion: string
}

const etapas: Etapa[] = [
  {
    numero: '01',
    fase: '',
    titulo: 'Conversamos',
    descripcion: 'Conocemos el espacio, tus referencias y lo que quieres transformar.',
  },
  {
    numero: '02',
    fase: '',
    titulo: 'Elegimos las telas',
    descripcion: 'Tocamos, comparamos y combinamos tonos, gramajes y texturas.',
  },
  {
    numero: '03',
    fase: '',
    titulo: 'Diseñamos',
    descripcion: 'Definimos medidas, capas, caídas, formatos y terminaciones.',
  },
  {
    numero: '04',
    fase: '',
    titulo: 'Confeccionamos',
    descripcion: 'La propuesta pasa al taller, donde cada elemento se confecciona y termina cuidadosamente.',
  },
  {
    numero: '05',
    fase: '',
    titulo: 'Entregamos',
    descripcion: 'La idea inicial se vuelve tangible: una cama pensada específicamente para ese dormitorio.',
  },
]

export function Proceso() {
  return (
    <section
      id="proceso"
      style={{
        background: 'var(--cream)',
        padding: 'clamp(6rem, 12vw, 14rem) clamp(2rem, 7vw, 9rem)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr]"
          style={{
            gap: 'clamp(3rem, 8vw, 10rem)',
            alignItems: 'start',
          }}
        >
          {/* Columna izquierda sticky */}
          <div className="md:sticky" style={{ top: '6rem' }}>
            <SectionLabel text="Cómo trabajamos" />
            <h2
              className="editorial"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                fontWeight: 300,
                color: 'var(--obsidian)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginTop: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              De una idea
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>a tu cama</em>
            </h2>
            <p
              style={{
                fontSize: '0.8125rem',
                lineHeight: 1.9,
                color: 'var(--ash)',
                maxWidth: '32ch',
                fontWeight: 300,
                letterSpacing: '0.03em',
              }}
            >
              Cada proyecto parte de algo distinto: un dormitorio, una necesidad, una referencia o simplemente una sensación que queremos conseguir.
            </p>
          </div>

          {/* Línea de tiempo */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {etapas.map((etapa, i) => (
              <motion.div
                key={etapa.numero}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr]"
                style={{
                  gap: '2.5rem',
                  paddingBottom: 'clamp(1.25rem, 5vw, 3.5rem)',
                  borderBottom: i < etapas.length - 1 ? '1px solid var(--sand)' : 'none',
                  marginBottom: i < etapas.length - 1 ? 'clamp(1.25rem, 5vw, 3.5rem)' : 0,
                  position: 'relative',
                }}
              >
                {/* Número y conector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <span
                    className="editorial"
                    style={{
                      fontSize: '2rem',
                      fontWeight: 300,
                      color: 'transparent',
                      WebkitTextStroke: '1px var(--gold)',
                      lineHeight: 1,
                    }}
                  >
                    {etapa.numero}
                  </span>
                </div>

                {/* Contenido */}
                <div>
                  <span
                    style={{
                      fontSize: '0.5625rem',
                      letterSpacing: '0.25em',
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                      fontWeight: 300,
                      display: 'block',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {etapa.fase}
                  </span>
                  <h3
                    className="editorial"
                    style={{
                      fontSize: 'clamp(1.25rem, 2vw, 1.875rem)',
                      fontWeight: 300,
                      color: 'var(--obsidian)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                      marginBottom: '1rem',
                    }}
                  >
                    {etapa.titulo}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      lineHeight: 1.9,
                      color: 'var(--ash)',
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      maxWidth: '48ch',
                    }}
                  >
                    {etapa.descripcion}
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
