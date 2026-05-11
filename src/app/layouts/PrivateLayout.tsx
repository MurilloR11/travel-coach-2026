import { Outlet } from 'react-router-dom'

export function PrivateLayout() {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div className="min-h-screen bg-background">
        <Outlet />
      </div>
    </>
  )
}
