import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { HOST_COUNTRIES_INFO } from '../../data/countries'
import { STATUS_CONFIG } from '../../data/status-config'
import type { Country, HostCountryCode, HostRequirements } from '../../types'

const HOST_ISO: Record<HostCountryCode, string> = {
  usa: 'US',
  canada: 'CA',
  mexico: 'MX',
}

const STATUS_COLOR: Record<string, string> = {
  green: '#4ade80',
  blue: '#60a5fa',
  yellow: '#facc15',
  red: '#f87171',
}

const s = StyleSheet.create({
  page: {
    backgroundColor: '#0f172a',
    paddingVertical: 48,
    paddingHorizontal: 48,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 20,
  },
  appName: {
    fontSize: 10,
    letterSpacing: 3,
    color: '#f59e0b',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#f1f5f9',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#94a3b8',
  },
  meta: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 6,
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    backgroundColor: '#1e293b',
    padding: 18,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  countryBadge: {
    backgroundColor: '#334155',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  countryBadgeText: {
    fontSize: 10,
    letterSpacing: 2,
    color: '#94a3b8',
    fontFamily: 'Helvetica-Bold',
  },
  countryName: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: '#f1f5f9',
    marginBottom: 2,
  },
  documentRequired: {
    fontSize: 10,
    color: '#94a3b8',
    letterSpacing: 0.5,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  statusText: {
    fontSize: 10,
    letterSpacing: 0.5,
    fontFamily: 'Helvetica-Bold',
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 14,
  },
  metricBlock: {
    flexDirection: 'column',
    gap: 2,
  },
  metricLabel: {
    fontSize: 9,
    letterSpacing: 2,
    color: '#64748b',
    textTransform: 'uppercase',
  },
  metricValue: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#f1f5f9',
  },
  fastTrackBox: {
    backgroundColor: '#1a1500',
    borderWidth: 1,
    borderColor: '#7c5804',
    borderRadius: 6,
    padding: 12,
    marginBottom: 14,
  },
  fastTrackLabel: {
    fontSize: 9,
    letterSpacing: 2,
    color: '#f59e0b',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  fastTrackText: {
    fontSize: 12,
    color: '#f1f5f9',
    lineHeight: 1.5,
  },
  stepsLabel: {
    fontSize: 9,
    letterSpacing: 2,
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 6,
  },
  stepNumber: {
    fontSize: 10,
    color: '#f59e0b',
    fontFamily: 'Helvetica-Bold',
    width: 20,
    flexShrink: 0,
  },
  stepText: {
    fontSize: 12,
    color: '#f1f5f9',
    lineHeight: 1.5,
    flex: 1,
  },
  notesBox: {
    backgroundColor: '#1e293b',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 6,
    padding: 12,
    marginTop: 10,
  },
  notesText: {
    fontSize: 11,
    color: '#94a3b8',
    lineHeight: 1.5,
  },
  disclaimer: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    padding: 14,
    backgroundColor: '#1e293b',
  },
  disclaimerText: {
    fontSize: 10,
    color: '#64748b',
    lineHeight: 1.6,
  },
  disclaimerBold: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#94a3b8',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 9,
    color: '#475569',
  },
})

interface EntryResultPdfProps {
  selectedCountry: Country
  hostCountries: HostCountryCode[]
  requirements: HostRequirements
}

export function EntryResultPdf({ selectedCountry, hostCountries, requirements }: EntryResultPdfProps) {
  const generatedDate = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Document
      title={`Requisitos de entrada — Pasaporte ${selectedCountry.name}`}
      author="TravelCoach 2026"
      subject="Requisitos de entrada países anfitriones FIFA World Cup 2026"
    >
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.header}>
          <Text style={s.appName}>TravelCoach 2026</Text>
          <Text style={s.title}>Requisitos de entrada</Text>
          <Text style={s.subtitle}>
            Pasaporte {selectedCountry.name} ({selectedCountry.code})
          </Text>
          <Text style={s.meta}>Generado el {generatedDate} · Información orientativa</Text>
        </View>

        {/* Requirement cards */}
        {hostCountries.map(hc => {
          const req = requirements[hc]
          if (!req) return null

          const host = HOST_COUNTRIES_INFO[hc]
          const config = STATUS_CONFIG[req.status]
          const color = STATUS_COLOR[config.color]

          return (
            <View key={hc} style={s.card}>
              {/* Card header */}
              <View style={s.cardHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                  <View style={s.countryBadge}>
                    <Text style={s.countryBadgeText}>{HOST_ISO[hc]}</Text>
                  </View>
                  <View>
                    <Text style={s.countryName}>{host.name}</Text>
                    <Text style={s.documentRequired}>{req.documentRequired}</Text>
                  </View>
                </View>
                <View style={[s.statusBadge, { borderColor: color }]}>
                  <Text style={[s.statusText, { color }]}>{config.label}</Text>
                </View>
              </View>

              {/* Metrics */}
              <View style={s.metricsRow}>
                <View style={s.metricBlock}>
                  <Text style={s.metricLabel}>Costo</Text>
                  <Text style={s.metricValue}>{req.cost}</Text>
                </View>
                {req.processingTime && (
                  <View style={s.metricBlock}>
                    <Text style={s.metricLabel}>Tiempo de trámite</Text>
                    <Text style={s.metricValue}>{req.processingTime}</Text>
                  </View>
                )}
              </View>

              {/* Fast track */}
              {req.fastTrack && (
                <View style={s.fastTrackBox}>
                  <Text style={s.fastTrackLabel}>Vía rápida</Text>
                  <Text style={s.fastTrackText}>{req.fastTrack}</Text>
                </View>
              )}

              {/* Steps */}
              <Text style={s.stepsLabel}>Pasos</Text>
              {req.steps.map((step, i) => (
                <View key={i} style={s.stepRow}>
                  <Text style={s.stepNumber}>{String(i + 1).padStart(2, '0')}</Text>
                  <Text style={s.stepText}>{step}</Text>
                </View>
              ))}

              {/* Notes */}
              {req.notes && (
                <View style={s.notesBox}>
                  <Text style={s.notesText}>{req.notes}</Text>
                </View>
              )}
            </View>
          )
        })}

        {/* Disclaimer */}
        <View style={s.disclaimer}>
          <Text style={s.disclaimerText}>
            <Text style={s.disclaimerBold}>Información orientativa. </Text>
            Los requisitos de entrada pueden cambiar sin previo aviso. Verifica siempre en los portales
            oficiales (embajadas, IRCC, USCIS, INM México) antes de viajar. TravelCoach no sustituye
            asesoría migratoria ni garantiza admisión.
          </Text>
        </View>

        {/* Footer */}
        <View style={s.footer}>
          <Text style={s.footerText}>travelcoach2026.com</Text>
          <Text style={s.footerText}>{generatedDate}</Text>
        </View>
      </Page>
    </Document>
  )
}
