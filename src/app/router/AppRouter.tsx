import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PublicLayout } from '@/app/layouts/PublicLayout'
import { PrivateLayout } from '@/app/layouts/PrivateLayout'

function PageSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-navy">
      <div className="size-8 animate-spin rounded-full border-2 border-brand-amber border-t-transparent" />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    hydrateFallbackElement: <PageSpinner />,
    children: [
      {
        path: '/',
        lazy: () =>
          import('@/features/entry-checker/pages/HomePage').then((m) => ({
            Component: m.HomePage,
          })),
      },
      {
        path: '/entry-checker',
        lazy: () =>
          import('@/features/entry-checker/pages/EntryCheckerPage').then((m) => ({
            Component: m.EntryCheckerPage,
          })),
      },
      {
        path: '/route-planner',
        lazy: () =>
          import('@/features/route-planner/pages/RoutePlannerPage').then((m) => ({
            Component: m.RoutePlannerPage,
          })),
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '/dashboard',
        lazy: () =>
          import('@/features/plans/pages/DashboardPage').then((m) => ({
            Component: m.DashboardPage,
          })),
      },
      {
        path: '/plans',
        lazy: () =>
          import('@/features/plans/pages/PlansPage').then((m) => ({ Component: m.PlansPage })),
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
