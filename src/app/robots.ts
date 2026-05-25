// app/robots.ts
import { MetadataRoute } from 'next'

// Add this line to indicate this route can be statically generated
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/private/'],
    },
    sitemap: 'https://www.deckscaffgh.com/sitemap.xml',
  }
}