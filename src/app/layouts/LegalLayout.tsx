import { Outlet, ScrollRestoration } from 'react-router-dom'

export function LegalLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-navy">
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}
