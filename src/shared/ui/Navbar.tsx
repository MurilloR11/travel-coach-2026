import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { ArrowIcon, RouteIcon } from '@/shared/ui/Icons'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-white/6 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-navy/92 backdrop-blur-sm'
          : 'bg-brand-navy/72 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6"
        aria-label="Navegación principal"
      >
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
          aria-label="Ir al inicio — TravelCoach 2026"
        >
          <span
            className="flex size-7.5 items-center justify-center rounded-lg bg-brand-amber"
            aria-hidden="true"
          >
            <RouteIcon size={16} stroke="#0F172A" />
          </span>
          <span className="font-display text-[15px] font-bold text-brand-off-white">
            TravelCoach
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex" aria-label="Secciones">
          <Link
            to="/#como-funciona"
            className="text-sm font-medium text-white/78 transition-colors hover:text-brand-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
          >
            Cómo funciona
          </Link>
          <Link
            to="/#funcionalidades"
            className="text-sm font-medium text-white/78 transition-colors hover:text-brand-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
          >
            Herramientas
          </Link>
        </div>

        <Link
          to={ROUTES.ENTRY_CHECKER}
          className="flex items-center gap-2 rounded-lg bg-brand-amber px-[18px] py-[10px] text-sm font-bold text-brand-navy transition-all duration-150 hover:bg-brand-amber-light hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber"
        >
          Planificar viaje
          <ArrowIcon size={14} stroke="currentColor" />
        </Link>
      </nav>
    </header>
  )
}
