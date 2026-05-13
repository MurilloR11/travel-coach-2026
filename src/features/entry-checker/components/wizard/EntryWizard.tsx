import { Suspense, lazy } from 'react'
import { useEntryWizard } from '../../hooks/useEntryWizard'
import type { WizardStep } from '../../hooks/useEntryWizard'
import { ChecklistResult } from './ChecklistResult'
import { CountrySelector } from './CountrySelector'
import { MatchSelector } from './MatchSelector'

const EntryPdfDownloadButton = lazy(() =>
  import('./EntryPdfDownloadButton').then(m => ({ default: m.EntryPdfDownloadButton }))
)

const STEP_LABELS: Record<WizardStep, string> = {
  1: 'Selecciona tu pasaporte',
  2: 'Elige tus partidos',
  3: 'Requisitos de entrada',
}

const TOTAL_STEPS = 3

export function EntryWizard() {
  const wizard = useEntryWizard()
  const { step, selectedCountry, selectedMatchIds, hostCountries, requirements } = wizard

  const progressPct = ((step - 1) / (TOTAL_STEPS - 1)) * 100

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      {/* Progress */}
      <nav aria-label="Progreso del asistente">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-widest text-brand-amber">
            Paso {step} de {TOTAL_STEPS}
          </p>
          <p className="text-[13px] text-brand-slate-light">{STEP_LABELS[step]}</p>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-brand-amber transition-all duration-500"
            style={{ width: `${progressPct}%` }}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={TOTAL_STEPS}
            aria-label={`Paso ${step} de ${TOTAL_STEPS}`}
          />
        </div>
      </nav>

      {/* Step content */}
      <section aria-label={STEP_LABELS[step]}>
        {step === 1 && (
          <CountrySelector selected={selectedCountry} onSelect={wizard.selectCountry} />
        )}
        {step === 2 && selectedCountry && (
          <MatchSelector
            selectedCountry={selectedCountry}
            selectedMatchIds={selectedMatchIds}
            onToggle={wizard.toggleMatch}
          />
        )}
        {step === 3 && selectedCountry && requirements && (
          <ChecklistResult
            selectedCountry={selectedCountry}
            hostCountries={hostCountries}
            requirements={requirements}
          />
        )}
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={wizard.prevStep}
            className="font-mono rounded-full border border-white/12 bg-white/4 px-5 py-2.5 text-[12px] uppercase tracking-widest text-brand-slate-light transition-colors hover:border-white/24 hover:text-brand-off-white"
          >
            Anterior
          </button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={wizard.nextStep}
            disabled={!wizard.canGoNext}
            aria-disabled={!wizard.canGoNext}
            className="font-mono rounded-full bg-brand-amber px-6 py-2.5 text-[12px] uppercase tracking-widest text-brand-navy font-semibold transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
          >
            Siguiente
          </button>
        ) : (
          selectedCountry && requirements && (
            <Suspense
              fallback={
                <span className="font-mono rounded-full bg-brand-amber/40 px-6 py-2.5 text-[12px] uppercase tracking-widest text-brand-navy font-semibold">
                  Cargando…
                </span>
              }
            >
              <EntryPdfDownloadButton
                selectedCountry={selectedCountry}
                hostCountries={hostCountries}
                requirements={requirements}
              />
            </Suspense>
          )
        )}
      </div>
    </div>
  )
}
