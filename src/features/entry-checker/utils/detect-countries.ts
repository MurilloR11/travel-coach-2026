import { VENUES } from '../data/matches'
import type { HostCountryCode, Match } from '../types'

export function detectHostCountries(selectedMatches: Match[]): HostCountryCode[] {
  const seen = new Set<HostCountryCode>()
  for (const match of selectedMatches) {
    const venue = VENUES[match.venue]
    if (venue) seen.add(venue.country)
  }
  return Array.from(seen)
}
