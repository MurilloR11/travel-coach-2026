import { SEO } from '@/shared/ui'

export function DashboardPage() {
  return (
    <>
      <SEO
        title="Mi dashboard"
        description="Dashboard privado de Travel Coach 2026."
        noIndex
      />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </main>
    </>
  )
}
