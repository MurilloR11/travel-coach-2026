import { hasFlag } from 'country-flag-icons'
import * as Flags from 'country-flag-icons/react/3x2'

type FlagCountry = 'usa' | 'canada' | 'mexico'

const ISO_CODE: Record<FlagCountry, string> = {
  usa: 'US',
  canada: 'CA',
  mexico: 'MX',
}

interface FlagIconProps {
  country: FlagCountry
  width?: number
  height?: number
  className?: string
}

export function FlagIcon({ country, width, height, className }: FlagIconProps) {
  const code = ISO_CODE[country]
  if (!hasFlag(code)) return null
  const FlagComponent = Flags[code as keyof typeof Flags]
  return (
    <FlagComponent
      title={country}
      aria-hidden="true"
      style={width !== undefined ? { width, height } : undefined}
      className={`inline-block shrink-0 rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ${className ?? ''}`}
    />
  )
}
