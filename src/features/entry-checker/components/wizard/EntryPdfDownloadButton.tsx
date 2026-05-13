import { PDFDownloadLink } from '@react-pdf/renderer'
import type { Country, HostCountryCode, HostRequirements } from '../../types'
import { EntryResultPdf } from './EntryResultPdf'

interface EntryPdfDownloadButtonProps {
  selectedCountry: Country
  hostCountries: HostCountryCode[]
  requirements: HostRequirements
}

export function EntryPdfDownloadButton({
  selectedCountry,
  hostCountries,
  requirements,
}: EntryPdfDownloadButtonProps) {
  return (
    <PDFDownloadLink
      document={
        <EntryResultPdf
          selectedCountry={selectedCountry}
          hostCountries={hostCountries}
          requirements={requirements}
        />
      }
      fileName={`requisitos-entrada-${selectedCountry.code.toLowerCase()}.pdf`}
      className="font-mono rounded-full bg-brand-amber px-6 py-2.5 text-[12px] uppercase tracking-widest text-brand-navy font-semibold transition-opacity"
    >
      {({ loading }) => (loading ? 'Generando PDF…' : 'Descargar PDF')}
    </PDFDownloadLink>
  )
}
