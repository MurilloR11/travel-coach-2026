import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { ArrowIcon } from '@/shared/ui/Icons'
import { HeroPlanCard } from './HeroPlanCard'

const HERO_RINGS = Array.from({ length: 14 }, (_, i) => ({
  id: `hero-ring-${i}`,
  cx: 360 + Math.sin(i * 0.6) * 30,
  cy: 240 + Math.cos(i * 0.5) * 20,
  rx: (40 + i * 28) * 1.4,
  ry: 40 + i * 28,
}))

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
      <div aria-hidden="true" className="pointer-events-none absolute -right-44 -top-28 opacity-35">
        <svg width="760" height="620" viewBox="0 0 720 480" fill="none">
          <g stroke="rgba(245,158,11,0.18)" strokeWidth="1">
            {HERO_RINGS.map((ring) => (
              <ellipse key={ring.id} cx={ring.cx} cy={ring.cy} rx={ring.rx} ry={ring.ry} />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-px w-7 bg-brand-amber" aria-hidden="true" />
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-amber">
              Mundial 2026 · Edición torneo
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-display font-semibold leading-[1.06] tracking-tight text-brand-off-white"
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

        <div className="hidden lg:block">
          <HeroPlanCard />
        </div>
      </div>
    </section>
  )
}
