import US from 'country-flag-icons/string/3x2/US'
import CA from 'country-flag-icons/string/3x2/CA'
import MX from 'country-flag-icons/string/3x2/MX'

type FlagCountry = 'usa' | 'canada' | 'mexico'

const FLAG_SVG: Record<FlagCountry, string> = { usa: US, canada: CA, mexico: MX }

interface FlagIconProps {
  country: FlagCountry
  width?: number
  height?: number
  className?: string
}

export function FlagIcon({ country, width, height, className }: FlagIconProps) {
  return (
    <img
      src={`data:image/svg+xml;utf8,${encodeURIComponent(FLAG_SVG[country])}`}
      alt=""
      aria-hidden="true"
      style={width !== undefined ? { width, height } : undefined}
      className={`inline-block shrink-0 rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ${className ?? ''}`}
    />
  )
}
