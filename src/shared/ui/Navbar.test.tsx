import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from './Navbar'

function renderNavbar() {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
}

describe('Navbar', () => {
  it('muestra el nombre de la marca', () => {
    renderNavbar()
    expect(screen.getByText('TravelCoach')).toBeInTheDocument()
  })

  it('el logo es un enlace accesible a la home', () => {
    renderNavbar()
    expect(screen.getByLabelText(/ir al inicio/i)).toBeInTheDocument()
  })

  it('muestra el enlace a requisitos de entrada', () => {
    renderNavbar()
    const link = screen.getByRole('link', { name: /requisitos de entrada/i })
    expect(link).toHaveAttribute('href', '/entry-checker')
  })

  it('muestra el enlace a planificar ruta', () => {
    renderNavbar()
    const link = screen.getByRole('link', { name: /planificar ruta/i })
    expect(link).toHaveAttribute('href', '/route-planner')
  })

  it('el CTA principal dirige a /entry-checker', () => {
    renderNavbar()
    const cta = screen.getByRole('link', { name: /planificar viaje/i })
    expect(cta).toHaveAttribute('href', '/entry-checker')
  })
})
