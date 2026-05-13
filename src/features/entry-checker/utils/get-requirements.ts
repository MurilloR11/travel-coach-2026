import { COUNTRIES } from '../data/countries'
import type { HostCountryCode, HostRequirements } from '../types'

export function getRequirements(
  passportCode: string,
  hostCountries: HostCountryCode[],
): HostRequirements | null {
  const country = COUNTRIES.find(c => c.code === passportCode)
  if (!country) return null

  return Object.fromEntries(
    hostCountries.map(hc => [hc, country.requirements[hc]]),
  ) as HostRequirements
}
