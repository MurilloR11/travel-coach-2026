import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { ArrowIcon } from '@/shared/ui/Icons'

const CONTOUR_RINGS = Array.from({ length: 14 }, (_, i) => ({
  id: `cta-ring-${i}`,
  cx: 360 + Math.sin(i * 0.6) * 30,
  cy: 240 + Math.cos(i * 0.5) * 20,
  rx: (40 + i * 28) * 1.4,
  ry: 40 + i * 28,
}))

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-brand-navy py-28"
      aria-labelledby="final-cta-title"
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse at center, #000 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 0%, transparent 75%)',
        }}
      />
      {/* Contour rings bottom-left */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-48 opacity-35">
        <svg width="760" height="620" viewBox="0 0 720 480" fill="none">
          <g stroke="rgba(245,158,11,0.18)" strokeWidth="1">
            {CONTOUR_RINGS.map((ring) => (
              <ellipse key={ring.id} cx={ring.cx} cy={ring.cy} rx={ring.rx} ry={ring.ry} />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-[900px] px-6 text-center">
        <div className="mb-2 flex items-center justify-center gap-2.5">
          <span className="h-px w-7 bg-brand-amber" aria-hidden="true" />
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-amber">
            Listo cuando tú lo estés
          </span>
        </div>

        <h2
          id="final-cta-title"
          className="font-display mt-2 font-semibold tracking-tight text-brand-off-white"
          style={{ fontSize: 'clamp(40px, 5.6vw, 76px)', lineHeight: 1.06 }}
        >
          Deja de adivinar.
          <br />
          Empieza a <span className="text-brand-amber">planificar.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[560px] text-[18px] leading-relaxed text-brand-slate">
          Comienza gratis. Sin cuenta. Tu plan vive en un enlace que puedes compartir o volver a consultar.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to={ROUTES.ENTRY_CHECKER}
            className="flex items-center gap-2.5 rounded-lg bg-brand-amber px-[26px] py-[18px] text-base font-bold text-brand-navy transition-all duration-150 hover:bg-brand-amber-light hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
          >
            Revisar mis requisitos de entrada
            <ArrowIcon size={18} />
          </Link>
          <Link
            to={ROUTES.ROUTE_PLANNER}
            className="flex items-center gap-2 rounded-lg border border-white/22 px-[26px] py-[18px] text-base font-bold text-brand-off-white transition-all duration-150 hover:border-brand-amber hover:text-brand-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
          >
            Ver un plan de ejemplo
          </Link>
        </div>
      </div>
    </section>
  )
}
