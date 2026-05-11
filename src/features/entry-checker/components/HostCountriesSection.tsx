import { FlagIcon } from '@/shared/ui/FlagIcon'

export function HostCountriesSection() {
  return (
    <section className="bg-brand-paper-2 py-11" aria-label="Países anfitriones y cobertura">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div className="flex items-center gap-3.5">
            <FlagIcon country="usa" width={28} height={18} />
            <FlagIcon country="canada" width={28} height={18} />
            <FlagIcon country="mexico" width={28} height={18} />
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-brand-navy/55">
            Para fans de 200+ países
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-brand-navy/55">
            Cubre las 16 ciudades sede
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-brand-navy/55">
            Actualizado · Fuentes oficiales
          </p>
        </div>
      </div>
    </section>
  )
}
