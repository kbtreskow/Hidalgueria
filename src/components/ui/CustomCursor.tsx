import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 180 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return (
    <>
      {/* Anillo exterior lento */}
      <motion.div
        ref={dotRef}
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: '1px solid rgba(184,149,90,0.6)',
          }}
        />
      </motion.div>

      {/* Punto interior rápido */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'rgba(184,149,90,0.9)',
          }}
        />
      </motion.div>
    </>
  )
}
