import { APP_NAME, APP_URL } from '@/shared/constants'

interface SEOProps {
  title?: string
  description: string
  path?: string
  ogImage?: string
  noIndex?: boolean
  structuredData?: Record<string, unknown>
}

export function SEO({ title, description, path, ogImage, noIndex = false, structuredData }: SEOProps) {
  const fullTitle = title ? `${title} | ${APP_NAME}` : APP_NAME
  const canonical = path ? `${APP_URL}${path}` : undefined

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {structuredData && (
        <script
          type="application/ld+json"
          ref={(el) => {
            if (el) el.textContent = JSON.stringify(structuredData)
          }}
        />
      )}
    </>
  )
}
