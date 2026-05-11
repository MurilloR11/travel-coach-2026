import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/test-utils'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('muestra el heading principal con la propuesta de valor', () => {
    renderWithProviders(<HomePage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/viaje al mundial 2026/i)
  })

  it('incluye un enlace al asistente de requisitos de entrada', () => {
    renderWithProviders(<HomePage />)
    const links = screen.getAllByRole('link', { name: /revisar requisitos/i })
    expect(links[0]).toHaveAttribute('href', '/entry-checker')
  })

  it('incluye un enlace al planificador de ruta', () => {
    renderWithProviders(<HomePage />)
    const link = screen.getByRole('link', { name: /planificar ruta/i })
    expect(link).toHaveAttribute('href', '/route-planner')
  })

  it('muestra la sección de cobertura de sedes', () => {
    renderWithProviders(<HomePage />)
    expect(screen.getByText('Cubre las 16 ciudades sede')).toBeInTheDocument()
  })
})
