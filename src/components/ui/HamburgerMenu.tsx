import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'

const LINKS = [
  { href: '#inicio',       label: 'Inicio',      num: '01' },
  { href: '#proyectos',    label: 'Proyectos',   num: '02' },
  { href: '#historia',     label: 'Historia',    num: '03' },
  { href: '#servicios',    label: 'Servicios',   num: '04' },
  { href: '#proceso',      label: 'Proceso',     num: '05' },
  { href: '#testimonios',  label: 'Testimonios', num: '06' },
  { href: '#consultas',    label: 'Consultas',   num: '07' },
]

const overlay: Variants = {
  closed: { opacity: 0 },
  open:   { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:   { opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } },
}

const panel: Variants = {
  closed: { x: '100%' },
  open:   { x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  exit:   { x: '100%', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const list: Variants = {
  closed: {},
  open:   { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
}

const item: Variants = {
  closed: { opacity: 0, x: 32 },
  open:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export function HamburgerMenu() {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen(v => !v), [])
  const close  = useCallback(() => setOpen(false), [])

  return (
    <>
      {/* Botón hamburguesa */}
      <motion.button
        onClick={toggle}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'fixed',
          top: '1.75rem',
          right: '1.75rem',
          zIndex: 120,
          background: 'none',
          border: 'none',
          padding: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: '5px',
          cursor: 'none',
          mixBlendMode: 'difference',
        }}
      >
        <motion.span
          animate={open ? { rotate: 45, y: 7, width: '24px' } : { rotate: 0, y: 0, width: '24px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'block',
            height: '1px',
            background: '#fff',
            transformOrigin: 'center',
          }}
        />
        <motion.span
          animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0, width: '16px' }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'block',
            height: '1px',
            width: '16px',
            background: '#fff',
          }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7, width: '24px' } : { rotate: 0, y: 0, width: '24px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'block',
            height: '1px',
            background: '#fff',
            transformOrigin: 'center',
          }}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Fondo oscuro semitransparente */}
            <motion.div
              key="overlay"
              variants={overlay}
              initial="closed"
              animate="open"
              exit="exit"
              onClick={close}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(28, 26, 23, 0.55)',
                zIndex: 100,
              }}
            />

            {/* Panel lateral */}
            <motion.nav
              key="panel"
              variants={panel}
              initial="closed"
              animate="open"
              exit="exit"
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'clamp(280px, 40vw, 480px)',
                background: 'var(--obsidian)',
                zIndex: 110,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(3rem, 6vw, 6rem)',
              }}
            >
              {/* Línea decorativa */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  left: '3rem',
                  top: '15%',
                  bottom: '15%',
                  width: '1px',
                  background: 'var(--graphite)',
                  transformOrigin: 'top',
                }}
              />

              <motion.ul
                variants={list}
                initial="closed"
                animate="open"
                style={{ listStyle: 'none', padding: 0, margin: 0 }}
              >
                {LINKS.map(({ href, label, num }) => (
                  <motion.li key={href} variants={item}>
                    <motion.a
                      href={href}
                      onClick={close}
                      whileHover={{ x: 8, color: 'var(--gold)' }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '1.25rem',
                        padding: '0.9rem 0',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(74,69,64,0.3)',
                        color: 'var(--sand)',
                        cursor: 'none',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '0.65rem',
                          fontWeight: 300,
                          color: 'var(--ash)',
                          letterSpacing: '0.1em',
                          minWidth: '2ch',
                        }}
                      >
                        {num}
                      </span>
                      <span
                        className="editorial"
                        style={{
                          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                          fontWeight: 300,
                          letterSpacing: '-0.01em',
                          lineHeight: 1,
                        }}
                      >
                        {label}
                      </span>
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Tagline al pie */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: 'clamp(2.5rem, 5vw, 4rem)',
                  left: 'clamp(3rem, 6vw, 6rem)',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  color: 'var(--ash)',
                  textTransform: 'uppercase',
                }}
              >
                Hidalguería · Alta decoración
              </motion.p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
