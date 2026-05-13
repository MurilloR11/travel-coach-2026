export type HostCountryCode = 'usa' | 'canada' | 'mexico'

export type VisaStatus =
  | 'no_visa_required'
  | 'esta_required'
  | 'eta_required'
  | 'preregistro_required'
  | 'visa_or_us_visa'
  | 'visa_or_eta'
  | 'required'
  | 'citizen'

export type VisaType = 'none' | 'esta' | 'eta' | 'visa' | 'preregistro'

export type StatusColor = 'green' | 'yellow' | 'red' | 'blue'

export interface VisaRequirement {
  type: VisaType
  documentRequired: string
  status: VisaStatus
  cost: string
  processingTime: string | null
  fastTrack: string | null
  steps: string[]
  notes: string | null
}

export type CountryRequirements = Record<HostCountryCode, VisaRequirement>

export interface Country {
  code: string
  name: string
  flag: string
  requirements: CountryRequirements
}

export interface HostCountryInfo {
  name: string
  flag: string
}

export type HostCountriesMap = Record<HostCountryCode, HostCountryInfo>

export interface StatusConfig {
  label: string
  color: StatusColor
}

export type MatchPhase =
  | 'grupos'
  | 'dieciseisavos'
  | 'octavos'
  | 'cuartos'
  | 'semifinal'
  | 'tercer_puesto'
  | 'final'

export interface Venue {
  id: string
  name: string
  city: string
  country: HostCountryCode
  countryCode: 'MX' | 'US' | 'CA'
  timezone: string
}

export interface Match {
  id: number
  home: string
  away: string
  date: string
  time: string
  venue: string
  group: string | null
  phase: MatchPhase
}

export type VenuesMap = Record<string, Venue>

export type HostRequirements = Partial<Record<HostCountryCode, VisaRequirement>>
