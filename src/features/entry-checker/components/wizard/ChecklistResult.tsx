import { AlertIcon } from '@/shared/ui/Icons'
import { HOST_COUNTRIES_INFO } from '../../data/countries'
import type { Country, HostCountryCode, HostRequirements } from '../../types'
import { RequirementCard } from './RequirementCard'

const HOST_ISO: Record<HostCountryCode, string> = {
  usa: 'US',
  canada: 'CA',
  mexico: 'MX',
}

interface ChecklistResultProps {
  selectedCountry: Country
  hostCountries: HostCountryCode[]
  requirements: HostRequirements
}

export function ChecklistResult({ selectedCountry, hostCountries, requirements }: ChecklistResultProps) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="mb-1 flex items-center gap-2.5">
          <span className="font-mono inline-flex items-center rounded-lg bg-brand-amber/15 px-2.5 py-1 text-[12px] font-bold tracking-widest text-brand-amber">
            {selectedCountry.code}
          </span>
          <h2 className="font-display text-[22px] font-semibold text-brand-off-white">
            Pasaporte {selectedCountry.name}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] text-brand-slate-light">
          <span>Países a visitar:</span>
          {hostCountries.map((hc, i) => (
            <span key={hc} className="inline-flex items-center gap-1.5 font-medium text-brand-off-white">
              {i > 0 && <span className="text-brand-slate" aria-hidden="true">·</span>}
              <span className="font-mono rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold tracking-widest text-brand-slate-light">
                {HOST_ISO[hc]}
              </span>
              {HOST_COUNTRIES_INFO[hc].name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {hostCountries.map(hc => {
          const req = requirements[hc]
          if (!req) return null
          return <RequirementCard key={hc} hostCode={hc} requirement={req} />
        })}
      </div>

      <p className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-[13px] leading-relaxed text-brand-slate-light">
        <span className="mt-0.5 shrink-0"><AlertIcon size={18} stroke="#94A3B8" /></span>
        <span>
          <span className="font-medium text-brand-off-white">Información orientativa.</span>{' '}
          Los requisitos de entrada pueden cambiar sin previo aviso. Verifica siempre en los portales
          oficiales (embajadas, IRCC, USCIS, INM México) antes de viajar. TravelCoach no sustituye
          asesoría migratoria ni garantiza admisión.
        </span>
      </p>
    </div>
  )
}
