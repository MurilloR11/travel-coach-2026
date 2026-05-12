import { useCallback, useMemo, useState } from 'react'
import { MATCHES } from '../data/matches'
import { detectHostCountries } from '../utils/detect-countries'
import { getRequirements } from '../utils/get-requirements'
import type { Country, HostCountryCode, HostRequirements, Match } from '../types'

export type WizardStep = 1 | 2 | 3

export interface WizardApi {
  step: WizardStep
  selectedCountry: Country | null
  selectedMatchIds: Set<number>
  selectedMatches: Match[]
  hostCountries: HostCountryCode[]
  requirements: HostRequirements | null
  canGoNext: boolean
  selectCountry: (country: Country) => void
  toggleMatch: (matchId: number) => void
  nextStep: () => void
  prevStep: () => void
  reset: () => void
}

export function useEntryWizard(): WizardApi {
  const [step, setStep] = useState<WizardStep>(1)
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [selectedMatchIds, setSelectedMatchIds] = useState<Set<number>>(new Set())

  const selectedMatches = useMemo(
    () => MATCHES.filter(m => selectedMatchIds.has(m.id)),
    [selectedMatchIds],
  )

  const hostCountries = useMemo(
    () => detectHostCountries(selectedMatches),
    [selectedMatches],
  )

  const requirements = useMemo(
    () => (selectedCountry ? getRequirements(selectedCountry.code, hostCountries) : null),
    [selectedCountry, hostCountries],
  )

  const canGoNext = useMemo(() => {
    if (step === 1) return selectedCountry !== null
    if (step === 2) return selectedMatchIds.size > 0
    return false
  }, [step, selectedCountry, selectedMatchIds])

  const selectCountry = useCallback((country: Country) => {
    setSelectedCountry(country)
  }, [])

  const toggleMatch = useCallback((matchId: number) => {
    setSelectedMatchIds(prev => {
      const next = new Set(prev)
      if (next.has(matchId)) next.delete(matchId)
      else next.add(matchId)
      return next
    })
  }, [])

  const nextStep = useCallback(() => {
    setStep(prev => (prev < 3 ? ((prev + 1) as WizardStep) : prev))
  }, [])

  const prevStep = useCallback(() => {
    setStep(prev => (prev > 1 ? ((prev - 1) as WizardStep) : prev))
  }, [])

  const reset = useCallback(() => {
    setStep(1)
    setSelectedCountry(null)
    setSelectedMatchIds(new Set())
  }, [])

  return {
    step,
    selectedCountry,
    selectedMatchIds,
    selectedMatches,
    hostCountries,
    requirements,
    canGoNext,
    selectCountry,
    toggleMatch,
    nextStep,
    prevStep,
    reset,
  }
}
