import { useState } from 'react'
import type { Country, HostCountryCode, HostRequirements } from '../../types'

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
  const [loading, setLoading] = useState(false)

  async function downloadEntryRequirementsPdf() {
    setLoading(true)
    try {
      const [{ pdf }, { EntryResultPdf }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./EntryResultPdf'),
      ])
      const blob = await pdf(
        <EntryResultPdf
          selectedCountry={selectedCountry}
          hostCountries={hostCountries}
          requirements={requirements}
        />
      ).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `requisitos-entrada-${selectedCountry.code.toLowerCase()}.pdf`
      link.click()
      URL.revokeObjectURL(url)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={downloadEntryRequirementsPdf}
      disabled={loading}
      className="font-mono rounded-full bg-brand-amber px-6 py-2.5 text-[12px] uppercase tracking-widest text-brand-navy font-semibold transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? 'Generando PDF…' : 'Descargar PDF'}
    </button>
  )
}
