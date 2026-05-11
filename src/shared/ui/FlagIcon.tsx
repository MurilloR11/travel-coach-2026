type FlagCountry = 'usa' | 'canada' | 'mexico'

interface FlagIconProps {
  country: FlagCountry
  width?: number
  height?: number
}

export function FlagIcon({ country, width = 22, height = 14 }: FlagIconProps) {
  const w = width
  const h = height

  if (country === 'usa') {
    // 7 horizontal stripes (red/white) + blue canton top-left
    const stripes = 7
    const sh = h / stripes
    const cantonW = w * 0.4
    const cantonH = sh * 4
    return (
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        aria-hidden="true"
        className="inline-block shrink-0 rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
      >
        {Array.from({ length: stripes }).map((_, i) => (
          <rect key={i} x={0} y={i * sh} width={w} height={sh} fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'} />
        ))}
        <rect x={0} y={0} width={cantonW} height={cantonH} fill="#3C3B6E" />
      </svg>
    )
  }

  const colors: Record<'canada' | 'mexico', [string, string, string]> = {
    canada: ['#D52B1E', '#FFFFFF', '#D52B1E'],
    mexico: ['#006847', '#FFFFFF', '#CE1126'],
  }
  const [a, b, c] = colors[country]
  const colW = w / 3
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden="true"
      style={{ display: 'inline-block', borderRadius: 2, boxShadow: '0 0 0 1px rgba(255,255,255,0.06)', flexShrink: 0 }}
    >
      <rect x={0} y={0} width={colW} height={h} fill={a} />
      <rect x={colW} y={0} width={colW} height={h} fill={b} />
      <rect x={colW * 2} y={0} width={colW} height={h} fill={c} />
    </svg>
  )
}
