import { SEO } from '@/shared/ui'
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
