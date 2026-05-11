import { render, type RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactElement, ReactNode } from 'react'

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: Infinity },
      mutations: { retry: false },
    },
  })
}

interface RenderWithProvidersOptions extends Omit<RenderOptions, 'wrapper'> {
  initialPath?: string
}

export function renderWithProviders(
  ui: ReactElement,
  { initialPath = '/', ...options }: RenderWithProvidersOptions = {}
) {
  const queryClient = createTestQueryClient()

  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <MemoryRouter initialEntries={[initialPath]}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </MemoryRouter>
    )
  }

  return render(ui, { wrapper: Wrapper, ...options })
}
