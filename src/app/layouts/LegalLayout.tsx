import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navbar } from '@/shared/ui'

export function LegalLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-navy">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </div>
  )
}
