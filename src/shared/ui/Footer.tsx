import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { RouteIcon } from '@/shared/ui/Icons'

interface FooterColumn {
  title: string
  links: { label: string; to: string }[]
}

const COLUMNS: FooterColumn[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Cómo funciona', to: '/#como-funciona' },
      { label: 'Funcionalidades', to: '/#funcionalidades' },
      { label: 'Plan de ejemplo', to: ROUTES.ROUTE_PLANNER },
    ],
  },
  {
    title: 'Herramientas',
    links: [
      { label: 'Revisar requisitos', to: ROUTES.ENTRY_CHECKER },
      { label: 'Planificar ruta', to: ROUTES.ROUTE_PLANNER },
      { label: 'Crear plan completo', to: ROUTES.ENTRY_CHECKER },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Fuentes y avisos legales', to: ROUTES.HOME },
      { label: 'Privacidad', to: ROUTES.HOME },
      { label: 'Aviso de responsabilidad', to: ROUTES.HOME },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-brand-navy-dark pb-9 pt-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-7.5 items-center justify-center rounded-lg bg-brand-amber" aria-hidden="true">
                <RouteIcon size={16} stroke="#0F172A" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-brand-off-white">
                TravelCoach
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-slate">
              Planificación inteligente para el Mundial 2026.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-amber">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-brand-slate-light transition-colors hover:text-brand-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 border-t border-white/8 pt-5 flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-brand-slate">
            TravelCoach es orientativo. Verifica siempre en fuentes oficiales de gobierno.
          </p>
          <p className="font-mono text-xs text-brand-slate">
            © 2026 TravelCoach · No afiliado con FIFA ni con ningún país anfitrión.
          </p>
        </div>
      </div>
    </footer>
  )
}
