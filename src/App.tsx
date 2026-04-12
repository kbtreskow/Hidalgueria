import { CustomCursor } from './components/ui/CustomCursor'
import { GrainOverlay } from './components/ui/GrainOverlay'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { HamburgerMenu } from './components/ui/HamburgerMenu'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { Proyectos } from './sections/Proyectos'
import { Historia } from './sections/Historia'
import { Servicios } from './sections/Servicios'
import { Proceso } from './sections/Proceso'
import { Productos } from './sections/Productos'
import { Consultas } from './sections/Consultas'
  
export default function App() {
  return (
    <>
      {/* Elementos globales de UI */}
      <CustomCursor />
      <GrainOverlay />
      <ScrollProgress />
      <HamburgerMenu />

      {/* Secciones — navegación por scroll puro, sin navbar */}
      <main>
        <Hero />
        <Proyectos />
        <Historia />
        <Servicios />
        <Proceso />
        <Productos />
        <Consultas />
      </main>

      <Footer />
    </>
  )
}
