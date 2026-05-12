import { PassportIcon, ChecklistIcon, MapIcon } from '@/shared/ui/Icons'
import type { ReactNode } from 'react'

// ─── Route map (sample route visualization) ───────────────────────────────────

function SampleRouteMap() {
  const cities = [
    { x: 900, y: 80, code: 'NYC', name: 'New York' },
    { x: 200, y: 145, code: 'YYZ', name: 'Toronto' },
    { x: 560, y: 210, code: 'MEX', name: 'Cd. de México' },
  ]
  return (
    <svg width="100%" viewBox="0 0 1080 260" aria-hidden="true" style={{ display: 'block' }}>
      <defs>
        <pattern id="how-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.08)" />
        </pattern>
        <linearGradient id="how-route" x1="0" x2="1">
          <stop offset="0" stopColor="#F59E0B" />
          <stop offset="1" stopColor="#FCD34D" />
        </linearGradient>
      </defs>
      <rect width="1080" height="260" fill="url(#how-grid)" />
      <g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
        {[60, 120, 180, 240].map((r) => (
          <ellipse key={r} cx="540" cy="130" rx={r * 2} ry={r * 0.9} />
        ))}
      </g>
      <path
        d={`M ${cities[0].x} ${cities[0].y} Q 550 30, ${cities[1].x} ${cities[1].y} Q 350 200, ${cities[2].x} ${cities[2].y}`}
        fill="none" stroke="url(#how-route)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 6"
      />
      {cities.map((city) => (
        <g key={city.code} transform={`translate(${city.x},${city.y})`}>
          <circle r="14" fill="#172033" stroke="#F59E0B" strokeWidth="2" />
          <circle r="4" fill="#F59E0B" />
          <g transform="translate(18,-6)">
            <text fontFamily="'JetBrains Mono',monospace" fontSize="11" fill="rgba(255,255,255,0.85)" fontWeight="600" letterSpacing="0.08em">{city.code}</text>
            <text y="14" fontFamily="'DM Sans',sans-serif" fontSize="11" fill="rgba(148,163,184,0.85)">{city.name}</text>
          </g>
        </g>
      ))}
    </svg>
  )
}

// ─── Step card ────────────────────────────────────────────────────────────────

interface StepCardProps {
  num: string
  icon: ReactNode
  title: string
  lead: string
  tags: string[]
}

function StepCard({ num, icon, title, lead, tags }: StepCardProps) {
  return (
    <li className="flex flex-col gap-3.5 rounded-[14px] border border-white/6 bg-brand-navy-mid p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-amber/35 hover:bg-[#1A2236]">
      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-[10px] border border-brand-amber/25 bg-brand-amber/10">
          {icon}
        </div>
        <span className="font-display text-[44px] font-extrabold leading-none tracking-tight text-brand-amber/85">
          {num}
        </span>
      </div>
      <h3 className="font-display mt-2 text-[22px] font-semibold tracking-tight text-brand-off-white">{title}</h3>
      <p className="text-[15px] leading-[1.55] text-brand-slate">{lead}</p>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono rounded-full border border-white/8 bg-white/4 px-2.5 py-1 text-[10px] uppercase tracking-widest text-brand-slate-light"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  )
}

const STEPS: StepCardProps[] = [
  {
    num: '01',
    icon: <PassportIcon stroke="#F59E0B" />,
    title: 'Cuéntanos sobre ti',
    lead: 'Pasaporte, residencia, países que quieres visitar. Dos minutos, sin cuenta.',
    tags: ['pasaporte', 'residencia', 'destinos'],
  },
  {
    num: '02',
    icon: <ChecklistIcon stroke="#F59E0B" />,
    title: 'Obtén tu checklist de entrada',
    lead: 'Visa, ESTA, eTA — lo que realmente necesitas, con indicador de complejidad por país.',
    tags: ['ESTA', 'eTA', 'biometría'],
  },
  {
    num: '03',
    icon: <MapIcon stroke="#F59E0B" />,
    title: 'Construye y evalúa tu ruta',
    lead: 'Puntuación de fatiga, tiempo de viaje, alertas de cruce fronterizo. Marcamos el itinerario que parece perfecto hasta que vuelas.',
    tags: ['fatiga', 'tránsito', 'cruces'],
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-brand-navy py-28"
      aria-labelledby="how-title"
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(to bottom, #000 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 30%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-180">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-7 bg-brand-amber" aria-hidden="true" />
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-amber">
              Cómo funciona TravelCoach
            </span>
          </div>
          <h2
            id="how-title"
            className="font-display font-semibold tracking-tight text-brand-off-white"
            style={{ fontSize: 'clamp(36px, 4.6vw, 56px)' }}
          >
            Tres pasos. Sin hojas de cálculo. Sin arrepentimientos.
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3" aria-label="Pasos del proceso">
          {STEPS.map((step) => (
            <StepCard key={step.num} {...step} />
          ))}
        </ul>

        {/* Sample route visualization */}
        <div className="mt-14 rounded-2xl border border-white/6 bg-white/2 p-7">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-2.5">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-brand-amber">
                RUTA DE EJEMPLO · FASE DE GRUPOS → OCTAVOS
              </p>
              <h4 className="font-display mt-1 text-[22px] font-semibold tracking-tight text-brand-off-white">
                NYC → Toronto → Ciudad de México
              </h4>
            </div>
            <div className="flex gap-4 sm:gap-4.5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand-slate">Distancia</p>
                <p className="font-display mt-0.5 text-[18px] font-extrabold text-brand-off-white">3,840 km</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand-slate">Fronteras</p>
                <p className="font-display mt-0.5 text-[18px] font-extrabold text-brand-off-white">2</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand-slate">Fatiga</p>
                <p className="font-display mt-0.5 text-[18px] font-extrabold text-brand-amber">4.5 / 10</p>
              </div>
            </div>
          </div>
          <SampleRouteMap />
        </div>
      </div>
    </section>
  )
}
