import { SEO } from '@/shared/ui'
import { APP_OG_IMAGE } from '@/shared/constants'

export function RoutePlannerPage() {
  return (
    <>
      <SEO
        title="Planificador de rutas entre sedes"
        description="Diseña tu itinerario entre las 16 ciudades sede del Mundial 2026 y evalúa la viabilidad y fatiga de tu ruta de viaje."
        path="/route-planner"
        ogImage={APP_OG_IMAGE}
      />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Planifica tu ruta entre sedes</h1>
      </main>
    </>
  )
}
