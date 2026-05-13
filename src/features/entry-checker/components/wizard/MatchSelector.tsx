import { memo, useCallback, useMemo, useState } from 'react'
import { hasFlag } from 'country-flag-icons'
import * as Flags from 'country-flag-icons/react/3x2'
import { MATCHES, VENUES } from '../../data/matches'
import { MATCH_COUNTRY_ISO } from '../../utils/match-country-flags'
import type { Country, Match, MatchPhase } from '../../types'

const PHASE_LABELS: Record<MatchPhase, string> = {
  grupos: 'Fase de Grupos',
  dieciseisavos: 'Dieciseisavos',
  octavos: 'Octavos de Final',
  cuartos: 'Cuartos de Final',
  semifinal: 'Semifinal',
  tercer_puesto: 'Tercer Puesto',
  final: 'Final',
}

const DATE_LONG = new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short', year: 'numeric' })
const MONTH_SHORT = new Intl.DateTimeFormat('es', { month: 'short' })

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return DATE_LONG.format(new Date(year, month - 1, day))
}

// ─── Team name with flag ──────────────────────────────────────────────────────

function TeamFlag({ name }: { name: string }) {
  const code = MATCH_COUNTRY_ISO[name]
  if (!code || !hasFlag(code)) return null
  const FlagComponent = Flags[code as keyof typeof Flags]
  if (!FlagComponent) return null
  return <FlagComponent title={name} className="inline-block h-3.5 w-auto shrink-0 rounded-xs shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
}

// ─── Match card ───────────────────────────────────────────────────────────────

interface MatchCardProps {
  match: Match
  isSelected: boolean
  isMyTeam: boolean
  onToggle: (matchId: number) => void
}

const MatchCard = memo(function MatchCard({ match, isSelected, isMyTeam, onToggle }: MatchCardProps) {
  const venue = VENUES[match.venue]
  const tag = match.group ? `Grupo ${match.group}` : PHASE_LABELS[match.phase]
  const [y, mo, d] = match.date.split('-').map(Number)
  const dateObj = new Date(y, mo - 1, d)
  const day = dateObj.getDate()
  const month = MONTH_SHORT.format(dateObj)

  const toggleMatchSelection = useCallback(() => onToggle(match.id), [onToggle, match.id])

  return (
    <button
      type="button"
      onClick={toggleMatchSelection}
      aria-pressed={isSelected}
      aria-label={`${match.home} vs ${match.away} — ${formatDate(match.date)}, ${venue?.city}`}
      className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber ${
        isSelected
          ? 'border-brand-amber bg-brand-amber/8'
          : 'border-white/8 bg-brand-navy-mid hover:border-white/20'
      }`}
    >
      {/* Date */}
      <div className="flex w-10 shrink-0 flex-col items-center">
        <span className="font-mono text-[22px] font-bold leading-none text-brand-off-white">{day}</span>
        <span className="font-mono mt-0.5 text-[10px] uppercase tracking-widest text-brand-slate">{month}</span>
        <span className={`font-mono mt-2 text-[11px] font-semibold ${isSelected ? 'text-brand-amber' : 'text-brand-slate-light'}`}>
          {match.time}
        </span>
      </div>

      {/* Divider */}
      <div className={`h-10 w-px shrink-0 rounded-full ${isSelected ? 'bg-brand-amber/30' : 'bg-white/8'}`} />

      {/* Match info */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="flex items-center gap-2 truncate text-[15px] font-semibold leading-snug text-brand-off-white">
          <TeamFlag name={match.home} />
          {match.home}
          <span className="text-[12px] font-normal text-brand-slate">vs</span>
          <TeamFlag name={match.away} />
          {match.away}
        </p>
        <p className="font-mono text-[11px] text-brand-slate-light">
          {venue?.city} · {venue?.name}
        </p>
      </div>

      {/* Right: tag + status */}
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <span className={`font-mono rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-widest ${
          isSelected
            ? 'border-brand-amber/40 text-brand-amber'
            : 'border-white/10 text-brand-slate-light'
        }`}>
          {tag}
        </span>
        {isMyTeam && !isSelected && (
          <span className="font-mono text-[10px] text-brand-amber/70">mi equipo</span>
        )}
        {isSelected && (
          <span className="font-mono text-[10px] text-brand-amber">seleccionado</span>
        )}
      </div>
    </button>
  )
})

// ─── Selector ─────────────────────────────────────────────────────────────────

interface MatchSelectorProps {
  selectedCountry: Country
  selectedMatchIds: Set<number>
  onToggle: (matchId: number) => void
}

export function MatchSelector({ selectedCountry, selectedMatchIds, onToggle }: MatchSelectorProps) {
  const [showAll, setShowAll] = useState(false)

  const myMatches = useMemo(
    () =>
      MATCHES.filter(
        m => m.home === selectedCountry.name || m.away === selectedCountry.name,
      ),
    [selectedCountry.name],
  )

  const displayed = showAll ? MATCHES : myMatches

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[15px] text-brand-slate">
          <span className="font-semibold text-brand-off-white">{selectedMatchIds.size}</span>{' '}
          {selectedMatchIds.size === 1 ? 'partido seleccionado' : 'partidos seleccionados'}
        </p>
        <button
          type="button"
          onClick={() => setShowAll(v => !v)}
          className="font-mono rounded-full border border-white/12 bg-white/4 px-3.5 py-1.5 text-[11px] uppercase tracking-widest text-brand-slate-light transition-colors hover:border-brand-amber/40 hover:text-brand-off-white"
        >
          {showAll
            ? `Solo ${selectedCountry.name} (${myMatches.length})`
            : `Ver los 104 partidos`}
        </button>
      </div>

      <ul className="flex max-h-120 flex-col gap-2 overflow-y-auto pr-1" aria-label="Lista de partidos">
        {displayed.map(match => (
          <li key={match.id}>
            <MatchCard
              match={match}
              isSelected={selectedMatchIds.has(match.id)}
              isMyTeam={!showAll ? false : match.home === selectedCountry.name || match.away === selectedCountry.name}
              onToggle={onToggle}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
