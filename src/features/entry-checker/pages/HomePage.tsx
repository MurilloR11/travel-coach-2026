import { SEO } from '@/shared/ui'
import { APP_OG_IMAGE, APP_URL } from '@/shared/constants'
import { HeroSection } from '../components/HeroSection'
import { ProblemSection } from '../components/ProblemSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { HostCountriesSection } from '../components/HostCountriesSection'
import { FinalCTA } from '../components/FinalCTA'

export function HomePage() {
  return (
    <>
      <SEO
        title="Planifica tu viaje al Mundial 2026"
        description="Descubre qué documentos necesitas para entrar a EE.UU., Canadá y México, y planifica una ruta realista entre sedes del Mundial 2026."
        path="/"
        ogImage={APP_OG_IMAGE}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Travel Coach 2026',
          description:
            'Herramienta de planificación para fans del Mundial 2026: requisitos de entrada por país y rutas entre sedes.',
          url: APP_URL,
          inLanguage: 'es',
          applicationCategory: 'TravelApplication',
          operatingSystem: 'All',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <HostCountriesSection />
        <FinalCTA />
      </main>
    </>
  )
}
