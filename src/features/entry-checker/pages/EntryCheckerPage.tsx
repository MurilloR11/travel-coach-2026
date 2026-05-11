import { SEO } from '@/shared/ui'

export function EntryCheckerPage() {
  return (
    <>
      <SEO
        title="Requisitos de entrada por país"
        description="Consulta qué visa, ESTA o eTA necesitas para entrar a EE.UU., Canadá y México según tu nacionalidad y país de residencia."
        path="/entry-checker"
      />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Entry Checker</h1>
      </main>
    </>
  )
}
