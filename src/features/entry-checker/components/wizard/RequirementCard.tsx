import { InfoIcon } from '@/shared/ui/Icons'
import { HOST_COUNTRIES_INFO } from '../../data/countries'
import { STATUS_CONFIG } from '../../data/status-config'
import type { HostCountryCode, StatusColor, VisaRequirement } from '../../types'

const COLOR_CLASSES: Record<StatusColor, { border: string; text: string; bg: string }> = {
  green:  { border: 'border-green-400/30',  text: 'text-green-400',  bg: 'bg-green-400/8'  },
  blue:   { border: 'border-blue-400/30',   text: 'text-blue-400',   bg: 'bg-blue-400/8'   },
  yellow: { border: 'border-yellow-400/30', text: 'text-yellow-400', bg: 'bg-yellow-400/8' },
  red:    { border: 'border-red-400/30',    text: 'text-red-400',    bg: 'bg-red-400/8'    },
}

const HOST_ISO: Record<HostCountryCode, string> = {
  usa: 'US',
  canada: 'CA',
  mexico: 'MX',
}

interface RequirementCardProps {
  hostCode: HostCountryCode
  requirement: VisaRequirement
}

export function RequirementCard({ hostCode, requirement }: RequirementCardProps) {
  const host = HOST_COUNTRIES_INFO[hostCode]
  const config = STATUS_CONFIG[requirement.status]
  const colors = COLOR_CLASSES[config.color]

  return (
    <article
      className={`flex flex-col gap-5 rounded-2xl border p-6 ${colors.border} ${colors.bg}`}
      aria-label={`Requisitos para ${host.name}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="font-mono inline-flex items-center rounded-lg bg-white/10 px-2.5 py-1.5 text-[12px] font-bold tracking-widest text-brand-slate-light"
            aria-hidden="true"
          >
            {HOST_ISO[hostCode]}
          </span>
          <div>
            <h3 className="font-display text-[20px] font-semibold leading-tight text-brand-off-white">
              {host.name}
            </h3>
            <p className="font-mono text-[11px] tracking-wide text-brand-slate-light">
              {requirement.documentRequired}
            </p>
          </div>
        </div>
        <span
          className={`font-mono shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${colors.border} ${colors.text}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          {config.label}
        </span>
      </div>

      <div className="flex flex-wrap gap-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-brand-slate">Costo</p>
          <p className="mt-0.5 text-[15px] font-semibold text-brand-off-white">{requirement.cost}</p>
        </div>
        {requirement.processingTime && (
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-brand-slate">
              Tiempo de trámite
            </p>
            <p className="mt-0.5 text-[15px] font-semibold text-brand-off-white">
              {requirement.processingTime}
            </p>
          </div>
        )}
      </div>

      {requirement.fastTrack && (
        <div className="rounded-xl border border-brand-amber/25 bg-brand-amber/8 px-4 py-3">
          <p className="font-mono mb-1 text-[11px] uppercase tracking-widest text-brand-amber">
            Vía rápida
          </p>
          <p className="text-[14px] leading-relaxed text-brand-off-white">{requirement.fastTrack}</p>
        </div>
      )}

      <div>
        <p className="font-mono mb-2.5 text-[10px] uppercase tracking-widest text-brand-slate">Pasos</p>
        <ol className="flex flex-col gap-2">
          {requirement.steps.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-[14px] text-brand-off-white">
              <span className="font-mono mt-0.5 shrink-0 text-[11px] text-brand-amber">
                {String(i + 1).padStart(2, '0')}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {requirement.notes && (
        <p className="flex items-start gap-2 rounded-xl bg-white/6 px-4 py-3 text-[13px] leading-relaxed text-brand-slate-light">
          <InfoIcon size={16} stroke="#94A3B8" />
          {requirement.notes}
        </p>
      )}
    </article>
  )
}
