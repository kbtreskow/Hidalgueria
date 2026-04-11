import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

interface Etapa {
  numero: string
  fase: string
  titulo: string
  descripcion: string
  duracion: string
}

const etapas: Etapa[] = [
  {
    numero: '01',
    fase: 'Encuentro',
    titulo: 'Primera conversación',
    descripcion: 'Una sesión de escucha sin libreto. Queremos saber cómo vive, qué siente al entrar a su hogar, qué le falta, qué le sobra.',
    duracion: '1–2 sesiones',
  },
  {
    numero: '02',
    fase: 'Visión',
    titulo: 'Concepto & moodboard',
    descripcion: 'Traducimos la conversación en un mundo visual: paletas, referencias, materiales y la narrativa que guiará cada decisión.',
    duracion: '2–3 semanas',
  },
  {
    numero: '03',
    fase: 'Precisión',
    titulo: 'Planos & especificaciones',
    descripcion: 'Cada milímetro documentado. Planos técnicos, renders fotorrealistas, fichas de materiales y cronograma de ejecución.',
    duracion: '4–6 semanas',
  },
  {
    numero: '04',
    fase: 'Creación',
    titulo: 'Ejecución & seguimiento',
    descripcion: 'Dirigimos cada etapa de la obra con presencia real. Coordinamos artesanos, fabricantes y proveedores bajo nuestra supervisión directa.',
    duracion: 'Variable por proyecto',
  },
  {
    numero: '05',
    fase: 'Entrega',
    titulo: 'La gran revelación',
    descripcion: 'El momento en que el espacio cobra vida. Entregamos cada detalle en su lugar, listos para habitarse desde el primer día.',
    duracion: '—',
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
              Un proceso
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>íntimo</em>
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
              Trabajamos con un número limitado de proyectos al año para garantizar una atención genuina en cada uno.
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
                  paddingBottom: '3.5rem',
                  borderBottom: i < etapas.length - 1 ? '1px solid var(--sand)' : 'none',
                  marginBottom: i < etapas.length - 1 ? '3.5rem' : 0,
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
                      marginBottom: '1rem',
                    }}
                  >
                    {etapa.descripcion}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '1px',
                        background: 'var(--dune)',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.625rem',
                        letterSpacing: '0.2em',
                        color: 'var(--ash)',
                        textTransform: 'uppercase',
                        fontWeight: 300,
                      }}
                    >
                      {etapa.duracion}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
