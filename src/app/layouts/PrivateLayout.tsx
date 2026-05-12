import { Outlet, ScrollRestoration } from 'react-router-dom'

export function PrivateLayout() {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <ScrollRestoration />
      <div className="min-h-screen bg-brand-navy">
        <Outlet />
      </div>
    </>
  )
}
