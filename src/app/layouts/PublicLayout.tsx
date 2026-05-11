import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '@/shared/ui'

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
