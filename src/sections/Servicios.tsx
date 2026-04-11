import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

interface Servicio {
  numero: string
  nombre: string
  descripcion: string
  detalle: string[]
}

const servicios: Servicio[] = [
  {
    numero: '001',
    nombre: 'Diseño Integral',
    descripcion: 'De la idea a la llave. Tomamos el proyecto desde el primer trazo hasta la instalación de la última pieza.',
    detalle: ['Concepto & moodboard', 'Planos y renders', 'Dirección de obra', 'Coordinación de artesanos'],
  },
  {
    numero: '002',
    nombre: 'Curaduría de Arte y Objetos',
    descripcion: 'Seleccionamos piezas con historia y alma para habitar sus espacios: arte, textiles, antigüedades y diseño contemporáneo.',
    detalle: ['Sourcing internacional', 'Arte contemporáneo', 'Antigüedades & vintage', 'Arte popular mexicano'],
  },
  {
    numero: '003',
    nombre: 'Consultoría de Estilo',
    descripcion: 'Para quienes desean refinar un espacio existente. Sesiones de diagnóstico con recomendaciones precisas y alcanzables.',
    detalle: ['Diagnóstico espacial', 'Plan de color & materiales', 'Edición de piezas', 'Shopping guidance'],
  },
  {
    numero: '004',
    nombre: 'Proyectos Corporativos',
    descripcion: 'Oficinas, restaurantes y espacios de hospitalidad que comunican valores desde su primera percepción.',
    detalle: ['Identidad espacial', 'Señalética & experiencia', 'Arte corporativo', 'Mantenimiento de colección'],
  },
]

export function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        background: 'var(--sand)',
        padding: 'clamp(6rem, 12vw, 14rem) clamp(2rem, 7vw, 9rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Video de fondo — fallback al color var(--sand) si no carga */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/assets/servicios-bg.mp4" type="video/mp4" />
        <source src="/assets/servicios-bg.webm" type="video/webm" />
      </video>
      {/* Overlay para mantener legibilidad sobre el video */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(232, 223, 208, 0.72)',
          zIndex: 1,
        }}
      />
      <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '5rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <SectionLabel text="Lo que hacemos" />
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
              Servicios
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>a medida</em>
            </h2>
          </div>
        </div>

        {/* Grid de servicios */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: '2px',
          }}
        >
          {servicios.map((s, i) => (
            <motion.div
              key={s.numero}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
              whileHover={{ background: 'var(--cream)' }}
              style={{
                background: 'var(--cream)',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'none',
                transition: 'background 0.4s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.5625rem',
                    letterSpacing: '0.25em',
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.numero}
                </span>
              </div>

              <h3
                className="editorial"
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                  fontWeight: 300,
                  color: 'var(--obsidian)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}
              >
                {s.nombre}
              </h3>

              <p
                style={{
                  fontSize: '0.8125rem',
                  lineHeight: 1.9,
                  color: 'var(--ash)',
                  fontWeight: 300,
                  letterSpacing: '0.02em',
                  flexGrow: 1,
                }}
              >
                {s.descripcion}
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--sand)',
                }}
              >
                {s.detalle.map((d) => (
                  <li
                    key={d}
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.12em',
                      color: 'var(--graphite)',
                      textTransform: 'uppercase',
                      fontWeight: 300,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        width: '20px',
                        height: '1px',
                        background: 'var(--gold)',
                        flexShrink: 0,
                      }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
