import { FlagIcon } from '@/shared/ui/FlagIcon'

// ─── Complexity dots ──────────────────────────────────────────────────────────

function ComplexityDots({ level }: { level: 'green' | 'amber' }) {
  const onColor = level === 'green' ? '#34D399' : '#F59E0B'
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      <i className="size-2 rounded-full" style={{ background: onColor, boxShadow: `0 0 8px ${onColor}` }} />
      <i className="size-2 rounded-full bg-white/12" />
      <i className="size-2 rounded-full bg-white/12" />
    </span>
  )
}

// ─── Doc chip ────────────────────────────────────────────────────────────────

interface DocChipProps {
  country: 'usa' | 'canada' | 'mexico'
  code: string
  status: string
  level: 'green' | 'amber'
}

function DocChip({ country, code, status, level }: DocChipProps) {
  return (
    <div className="rounded-lg border border-white/6 bg-white/3 p-2.5">
      <div className="mb-1.5 flex items-center justify-between">
        <FlagIcon country={country} width={22} height={14} />
        <ComplexityDots level={level} />
      </div>
      <p className="font-mono text-[11px] font-semibold tracking-wide text-brand-off-white">{code}</p>
      <p className="mt-0.5 text-[11px] text-brand-slate">{status}</p>
    </div>
  )
}

// ─── Route map SVG ────────────────────────────────────────────────────────────

const ROUTE_CITIES = [
  { x: 380, y: 90, code: 'NYC', name: 'New York' },
  { x: 140, y: 170, code: 'YYZ', name: 'Toronto' },
  { x: 290, y: 340, code: 'MEX', name: 'Ciudad de México' },
]

function RouteMapSVG() {
  return (
    <svg width="100%" viewBox="0 0 520 420" aria-hidden="true" style={{ display: 'block' }}>
      <defs>
        <pattern id="hero-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.10)" />
        </pattern>
        <linearGradient id="hero-route" x1="0" x2="1">
          <stop offset="0" stopColor="#F59E0B" />
          <stop offset="1" stopColor="#FCD34D" />
        </linearGradient>
      </defs>
      <rect width="520" height="420" fill="url(#hero-grid)" opacity="0.6" />
      <g fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" opacity="0.7">
        {[60, 120, 180, 240].map((r) => (
          <ellipse key={r} cx="260" cy="210" rx={r * 1.2} ry={r * 0.85} />
        ))}
      </g>
      <path
        d={`M ${ROUTE_CITIES[0].x} ${ROUTE_CITIES[0].y} Q 260 60, ${ROUTE_CITIES[1].x} ${ROUTE_CITIES[1].y} Q 180 280, ${ROUTE_CITIES[2].x} ${ROUTE_CITIES[2].y}`}
        fill="none" stroke="url(#hero-route)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 6"
      />
      {ROUTE_CITIES.map((city) => (
        <g key={city.code} transform={`translate(${city.x},${city.y})`}>
          <circle r="14" fill="#172033" stroke="#F59E0B" strokeWidth="2" />
          <circle r="4" fill="#F59E0B" />
          <g transform="translate(18,-6)">
            <text fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="rgba(255,255,255,0.85)" fontWeight="600" letterSpacing="0.08em">{city.code}</text>
            <text y="14" fontFamily="'DM Sans', sans-serif" fontSize="11" fill="rgba(148,163,184,0.85)">{city.name}</text>
          </g>
        </g>
      ))}
    </svg>
  )
}

// ─── Plan preview card ────────────────────────────────────────────────────────

export function HeroPlanCard() {
  return (
    <div
      className="rounded-[18px] border border-white/8 p-[22px]"
      style={{
        background: 'linear-gradient(180deg, #131C2F 0%, #0E1626 100%)',
        boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6)',
      }}
    >
      <div className="mb-3.5 flex items-center justify-between">
        <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-amber">PLAN · A-014</span>
        <span className="font-mono text-[11px] text-brand-slate">PASAPORTE BRASIL · 14 DÍAS</span>
      </div>

      <div className="mb-4">
        <RouteMapSVG />
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <DocChip country="usa" code="USA" status="ESTA · 72h" level="green" />
        <DocChip country="canada" code="CAN" status="eTA · 24h" level="green" />
        <DocChip country="mexico" code="MEX" status="Sin visa" level="green" />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3.5">
        <div>
          <p className="font-mono text-[10px] tracking-[0.12em] text-brand-slate">FATIGA</p>
          <div className="mt-1.5 flex items-center gap-2.5">
            <div className="h-1.5 w-[120px] overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[45%]" style={{ background: 'linear-gradient(90deg, #34D399, #F59E0B)' }} />
            </div>
            <span className="font-mono text-xs text-brand-off-white">4.5 / 10</span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] tracking-[0.12em] text-brand-slate">DISTANCIA</p>
          <p className="font-display mt-0.5 text-[22px] font-extrabold text-brand-off-white">
            3,840<span className="ml-1 text-xs text-brand-slate">km</span>
          </p>
        </div>
      </div>
    </div>
  )
}
