import { SEO } from '@/shared/ui'

export function PlansPage() {
  return (
    <>
      <SEO
        title="Mis planes"
        description="Planes de viaje guardados en Travel Coach 2026."
        noIndex
      />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Mis Planes</h1>
      </main>
    </>
  )
}
