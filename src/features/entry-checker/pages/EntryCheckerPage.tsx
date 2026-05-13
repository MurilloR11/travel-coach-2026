import { SEO } from '@/shared/ui'
import { FileCheckIcon } from '@/shared/ui/Icons'
import { APP_OG_IMAGE } from '@/shared/constants'
import { EntryWizard } from '../components/wizard/EntryWizard'

export function EntryCheckerPage() {
  return (
    <>
      <SEO
        title="Requisitos de entrada por país"
        description="Consulta qué visa, ESTA o eTA necesitas para entrar a EE.UU., Canadá y México según tu nacionalidad y país de residencia."
        path="/entry-checker"
        ogImage={APP_OG_IMAGE}
      />
      <main className="bg-brand-navy px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-14">
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-brand-amber/15">
              <FileCheckIcon size={18} stroke="#F59E0B" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-amber">
              Requisitos de entrada
            </span>
          </div>
          <h1 className="font-display text-[28px] font-semibold text-brand-off-white sm:text-[32px]">
            ¿Qué documentos necesitas para entrar?
          </h1>
          <p className="mt-2 text-[16px] text-brand-slate-light">
            Selecciona tu pasaporte, elige tus partidos y te mostramos los requisitos por país anfitrión.
          </p>
        </div>
        <EntryWizard />
      </main>
    </>
  )
}
