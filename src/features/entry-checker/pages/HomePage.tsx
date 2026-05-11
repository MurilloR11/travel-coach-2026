import { SEO } from '@/shared/ui'

export function HomePage() {
  return (
    <>
      <SEO
        title="Planifica tu viaje al Mundial 2026"
        description="Descubre qué documentos necesitas para entrar a EE.UU., Canadá y México, y planifica una ruta realista entre sedes del Mundial 2026."
        path="/"
      />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Travel Coach 2026</h1>
        <p className="mt-4 text-lg text-gray-600">Tu guía para el Mundial 2026</p>
      </main>
    </>
  )
}
