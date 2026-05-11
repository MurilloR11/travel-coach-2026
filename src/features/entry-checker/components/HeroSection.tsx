import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { ArrowIcon } from '@/shared/ui/Icons'
import { FlagIcon } from '@/shared/ui/FlagIcon'

// ─── Complexity dots ──────────────────────────────────────────────────────────

function ComplexityDots({ level }: { level: 'green' | 'amber' }) {
  const onColor = level === 'green' ? '#34D399' : '#F59E0B'
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      <i className="h-2 w-2 rounded-full" style={{ background: onColor, boxShadow: `0 0 8px ${onColor}` }} />
      <i className="h-2 w-2 rounded-full bg-white/12" />
      <i className="h-2 w-2 rounded-full bg-white/12" />
    </span>
  )
}

// ─── Doc chip (per country in preview card) ───────────────────────────────────

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

function RouteMapSVG() {
  const cities = [
    { x: 380, y: 90, code: 'NYC', name: 'New York' },
    { x: 140, y: 170, code: 'YYZ', name: 'Toronto' },
    { x: 290, y: 340, code: 'MEX', name: 'Ciudad de México' },
  ]
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
        {[60, 120, 180, 240].map((r, i) => (
          <ellipse key={i} cx="260" cy="210" rx={r * 1.2} ry={r * 0.85} />
        ))}
      </g>
      <path
        d={`M ${cities[0].x} ${cities[0].y} Q 260 60, ${cities[1].x} ${cities[1].y} Q 180 280, ${cities[2].x} ${cities[2].y}`}
        fill="none" stroke="url(#hero-route)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 6"
      />
      {cities.map((city, i) => (
        <g key={i} transform={`translate(${city.x},${city.y})`}>
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

// ─── Plan preview card (right column) ────────────────────────────────────────

function PlanPreviewCard() {
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

// ─── CTA card ─────────────────────────────────────────────────────────────────

interface CtaCardProps {
  eyebrow: string
  title: string
  to: string
  variant: 'amber' | 'outline'
}

function CtaCard({ eyebrow, title, to, variant }: CtaCardProps) {
  const isAmber = variant === 'amber'
  return (
    <Link
      to={to}
      className={`group flex flex-col justify-between gap-2.5 rounded-xl border p-4.5 text-left transition-all duration-150 hover:-translate-y-0.5 ${
        isAmber
          ? 'border-brand-amber bg-brand-amber text-brand-navy'
          : 'border-white/18 bg-transparent text-brand-off-white hover:border-brand-amber'
      }`}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-70">{eyebrow}</span>
      <span className="flex items-center justify-between gap-2 font-display text-base font-bold tracking-tight">
        {title}
        <ArrowIcon size={16} />
      </span>
    </Link>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-brand-navy pt-24 pb-28"
      aria-labelledby="hero-title"
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse at 30% 30%, #000 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 30% 30%, #000 0%, transparent 75%)',
        }}
      />
      {/* Contour rings top-right */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-44 -top-28 opacity-35">
        <svg width="760" height="620" viewBox="0 0 720 480" fill="none">
          <g stroke="rgba(245,158,11,0.18)" strokeWidth="1">
            {Array.from({ length: 14 }).map((_, i) => (
              <ellipse key={i} cx={360 + Math.sin(i * 0.6) * 30} cy={240 + Math.cos(i * 0.5) * 20} rx={(40 + i * 28) * 1.4} ry={40 + i * 28} />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left column */}
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-px w-7 bg-brand-amber" aria-hidden="true" />
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-amber">
              Mundial 2026 · Edición torneo
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-display font-extrabold leading-[1.06] tracking-tight text-brand-off-white"
            style={{ fontSize: 'clamp(44px, 6vw, 84px)', margin: '12px 0 28px' }}
          >
            Tu viaje al Mundial 2026,
            <br />
            <span className="text-brand-amber">planificado bien.</span>
          </h1>

          <p className="text-[19px] leading-[1.55] text-brand-slate" style={{ maxWidth: 560 }}>
            Sabe qué documentos necesitas para entrar a cada país anfitrión.
            Diseña una ruta real entre sedes. Sin caos logístico.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-3" style={{ maxWidth: 640 }}>
            <CtaCard variant="amber" eyebrow="01 · Documentos" title="Revisar requisitos" to={ROUTES.ENTRY_CHECKER} />
            <CtaCard variant="outline" eyebrow="02 · Ruta" title="Planificar ruta" to={ROUTES.ROUTE_PLANNER} />
            <CtaCard variant="outline" eyebrow="03 · Plan completo" title="Plan completo" to={ROUTES.ENTRY_CHECKER} />
          </div>

          <div className="font-mono mt-9 flex flex-wrap items-center gap-4 text-[13px] text-brand-slate">
            <span className="text-brand-amber">●</span>
            <span>Cubre USA · Canadá · México</span>
            <span className="opacity-40">/</span>
            <span>16 ciudades sede</span>
            <span className="opacity-40">/</span>
            <span>200+ nacionalidades</span>
          </div>
        </div>

        {/* Right column */}
        <div className="hidden lg:block">
          <PlanPreviewCard />
        </div>
      </div>
    </section>
  )
}
