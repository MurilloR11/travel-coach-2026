import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { RouteIcon } from '@/shared/ui/Icons'

export function LegalLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-navy">
      <ScrollRestoration />
      <header className="border-b border-white/6 bg-brand-navy/92 backdrop-blur-sm">
        <div className="mx-auto flex h-18 max-w-6xl items-center px-6">
          <Link
            to={ROUTES.HOME}
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
            aria-label="Ir al inicio — TravelCoach 2026"
          >
            <span className="flex size-7.5 items-center justify-center rounded-lg bg-brand-amber" aria-hidden="true">
              <RouteIcon size={16} stroke="#0F172A" />
            </span>
            <span className="font-display text-[15px] font-bold text-brand-off-white">
              TravelCoach
            </span>
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
