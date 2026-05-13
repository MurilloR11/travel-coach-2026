import { hasFlag } from 'country-flag-icons'
import * as Flags from 'country-flag-icons/react/3x2'
import { COUNTRIES } from '../../data/countries'
import type { Country } from '../../types'

interface CountrySelectorProps {
  selected: Country | null
  onSelect: (country: Country) => void
}

interface CountryCardProps {
  country: Country
  isSelected: boolean
  onSelect: (country: Country) => void
}

function CountryFlag({ code }: { code: string }) {
  if (!hasFlag(code)) return null
  const FlagComponent = Flags[code as keyof typeof Flags]
  return <FlagComponent title={code} className="h-7 w-auto rounded-sm object-cover shadow-sm" />
}

function CountryCard({ country, isSelected, onSelect }: CountryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(country)}
      aria-pressed={isSelected}
      aria-label={`Seleccionar ${country.name}`}
      className={`flex w-full flex-col items-center gap-2 rounded-[14px] border px-3 py-4 transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber ${
        isSelected
          ? 'border-brand-amber bg-brand-amber/10 text-brand-off-white'
          : 'border-white/8 bg-brand-navy-mid text-brand-slate-light hover:border-brand-amber/40 hover:text-brand-off-white'
      }`}
    >
      <CountryFlag code={country.code} />
      <span className="font-mono text-[10px] font-medium tracking-wide">{country.name}</span>
      {isSelected && (
        <span className="font-mono text-[10px] tracking-widest text-brand-amber" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  )
}

export function CountrySelector({ selected, onSelect }: CountrySelectorProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-amber">
        Selecciona tu país
      </p>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4" aria-label="Países disponibles">
        {COUNTRIES.map(country => (
          <li key={country.code}>
            <CountryCard
              country={country}
              isSelected={selected?.code === country.code}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
