import { useMemo, useState } from 'react'
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
      <span className="font-mono text-[17px] font-bold tracking-widest leading-none">
        {country.code}
      </span>
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
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return COUNTRIES
    return COUNTRIES.filter(c => c.name.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="country-search"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-amber"
        >
          Buscar país
        </label>
        <input
          id="country-search"
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Ej: Colombia, Chile…"
          className="w-full rounded-xl border border-white/8 bg-brand-navy-mid px-4 py-3 text-[15px] text-brand-off-white placeholder:text-brand-slate transition-colors focus:border-brand-amber/50 focus:outline-none"
        />
      </div>

      {filtered.length > 0 ? (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4" aria-label="Países disponibles">
          {filtered.map(country => (
            <li key={country.code}>
              <CountryCard
                country={country}
                isSelected={selected?.code === country.code}
                onSelect={onSelect}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-6 text-center text-[15px] text-brand-slate">
          No se encontró ningún país con ese nombre.
        </p>
      )}
    </div>
  )
}
