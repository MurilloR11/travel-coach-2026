import { SEO } from '@/shared/ui'
import { APP_OG_IMAGE } from '@/shared/constants'

export function EntryCheckerPage() {
  return (
    <>
      <SEO
        title="Requisitos de entrada por país"
        description="Consulta qué visa, ESTA o eTA necesitas para entrar a EE.UU., Canadá y México según tu nacionalidad y país de residencia."
        path="/entry-checker"
        ogImage={APP_OG_IMAGE}
      />
      <main className="p-8">
        <h1 className="text-2xl font-bold">¿Qué documentos necesitas para entrar?</h1>
      </main>
    </>
  )
}
