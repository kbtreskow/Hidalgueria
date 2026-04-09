import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

interface Proyecto {
  id: string
  numero: string
  nombre: string
  tipo: string
  ubicacion: string
  año: string
  descripcion: string
  palette: string[]
}

const proyectos: Proyecto[] = [
  {
    id: 'p1',
    numero: '01',
    nombre: 'Residencia Alameda',
    tipo: 'Residencial',
    ubicacion: 'Polanco, CDMX',
    año: '2024',
    descripcion:
      'Intervención total de un penthouse de 380 m². Paleta de mármol travertino, roble natural y lino belga. Una declaración de sobriedad poderosa.',
    palette: ['#C4B49A', '#8B7355', '#F0E8DC'],
  },
  {
    id: 'p2',
    numero: '02',
    nombre: 'Suite Monserrat',
    tipo: 'Hospitalidad',
    ubicacion: 'Lomas de Chapultepec',
    año: '2024',
    descripcion:
      'Diseño de suite presidencial para coleccionista de arte contemporáneo. Cada mueble, una pieza única fabricada en taller italiano bajo encargo exclusivo.',
    palette: ['#9B8B75', '#D4C5A9', '#4A4540'],
  },
  {
    id: 'p3',
    numero: '03',
    nombre: 'Casa Piedra',
    tipo: 'Arquitectura Interior',
    ubicacion: 'Valle de Bravo',
    año: '2023',
    descripcion:
      'Integración del entorno lacustre en cada decisión espacial. Cantera local, terciopelo verde musgo, latón envejecido. La naturaleza como lujo supremo.',
    palette: ['#7A8C7A', '#C4B49A', '#2C3A2C'],
  },
]

interface ProyectoCardProps {
  proyecto: Proyecto
  index: number
}

function ProyectoCard({ proyecto, index }: ProyectoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      style={{
        display: 'grid',
        gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        padding: '4rem 0',
        borderTop: '1px solid var(--sand)',
      }}
    >
      {/* Panel visual */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          aspectRatio: '4/3',
          background: `linear-gradient(135deg, ${proyecto.palette[0]}, ${proyecto.palette[1]})`,
          position: 'relative',
          overflow: 'hidden',
          order: index % 2 === 0 ? 0 : 1,
        }}
      >
        {/* Paleta de colores flotante */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '1.5rem',
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          {proyecto.palette.map((color, i) => (
            <div
              key={i}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: color,
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>

        {/* Número editorial superpuesto */}
        <span
          className="editorial"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1.5rem',
            fontSize: '5rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.2)',
            lineHeight: 1,
          }}
        >
          {proyecto.numero}
        </span>
      </motion.div>

      {/* Info */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          order: index % 2 === 0 ? 1 : 0,
        }}
      >
        <SectionLabel text={`${proyecto.tipo} · ${proyecto.año}`} />

        <h2
          className="editorial"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: 'var(--obsidian)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          {proyecto.nombre}
        </h2>

        <p
          style={{
            fontSize: '0.8125rem',
            lineHeight: 1.9,
            color: 'var(--ash)',
            maxWidth: '40ch',
            fontWeight: 300,
            letterSpacing: '0.03em',
          }}
        >
          {proyecto.descripcion}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div className="rule-gold" />
          <span
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              color: 'var(--ash)',
              textTransform: 'uppercase',
              fontWeight: 300,
            }}
          >
            {proyecto.ubicacion}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export function Proyectos() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section
      id="proyectos"
      ref={ref}
      style={{
        background: 'var(--cream)',
        padding: 'clamp(6rem, 12vw, 14rem) clamp(2rem, 7vw, 9rem)',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
      }}
    >
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
        <motion.div style={{ y }}>
          <SectionLabel text="Portfolio selecto" />
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
            Proyectos
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>destacados</em>
          </h2>
        </motion.div>

        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--ash)',
            lineHeight: 1.8,
            maxWidth: '28ch',
            textAlign: 'right',
            fontWeight: 300,
            letterSpacing: '0.03em',
          }}
        >
          Cada espacio, una conversación íntima entre el cliente y su entorno ideal.
        </p>
      </div>

      {/* Lista de proyectos */}
      <div>
        {proyectos.map((p, i) => (
          <ProyectoCard key={p.id} proyecto={p} index={i} />
        ))}
      </div>
    </section>
  )
}
