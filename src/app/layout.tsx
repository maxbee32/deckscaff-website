import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";
import TawkChat from "./components/TawkChat";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  metadataBase: new URL('https://www.deckscaffgh.com'),
  title: {
    default: "Deckscaff Ghana Ltd - Premium Scaffolding & Formwork Solutions",
    template: "%s | Deckscaff Ghana"
  },
  description:
    "Professional scaffolding rental, formwork systems, and construction equipment services in Accra, Tema, and across Ghana. ISO certified with 24/7 support since 2008.",
  keywords: [
    "scaffolding Ghana",
    "scaffolding rental Accra",
    "formwork solutions Tema",
    "construction equipment Ghana",
    "Deckscaff",
    "scaffolding companies in Accra",
    "cuplock scaffolding",
    "kwikstage scaffolding",
    "scaffolding for sale Ghana"
  ],
  authors: [{ name: "Deckscaff Ghana Ltd" }],
  creator: "Deckscaff Ghana Ltd",
  publisher: "Deckscaff Ghana Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.deckscaffgh.com",
  },
  openGraph: {
    title: "Deckscaff Ghana Ltd - Premium Scaffolding & Formwork Experts",
    description:
      "Your trusted partner for scaffolding and formwork solutions across Ghana. Serving Accra, Tema, Kumasi, and nationwide since 2008.",
    url: "https://www.deckscaffgh.com",
    siteName: "Deckscaff Ghana Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deckscaff Ghana Scaffolding Services",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deckscaff Ghana Ltd - Scaffolding Experts",
    description: "Professional scaffolding and formwork solutions across Ghana.",
    images: ["/og-image.jpg"],
    site: "@deckscaffgh",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "", // Add your Google Search Console verification code here
  },
  category: "construction",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.deckscaffgh.com" />
        
        {/* Tracking script */}
        <Script src="/deckscaff-tracker.js" strategy="afterInteractive" />
        
        {/* Structured Data for Local Business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionCompany",
              name: "Deckscaff Ghana Ltd",
              url: "https://www.deckscaffgh.com",
              logo: "https://www.deckscaffgh.com/images/logo.png",
              image: "https://www.deckscaffgh.com/images/hero.jpeg",
              description: "Professional scaffolding rental, formwork systems, and construction equipment services across Ghana.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Medie, Off Accra Nsawam Rd.",
                addressLocality: "Accra",
                addressRegion: "Greater Accra",
                addressCountry: "GH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 5.674661,
                longitude: -0.224124,
              },
              telephone: "+233544993344",
              email: "deckscaffgh@outlook.com",
              openingHours: "Mo-Fr 08:00-17:00, Sa 09:00-13:00",
              priceRange: "₵₵",
              sameAs: [
                "https://www.facebook.com/share/1aZNjxkRD6/",
                "https://instagram.com/deckscaffgh",
                "https://linkedin.com/in/deckscaff-ghana-ltd-65a6043b0",
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Accra",
                },
                {
                  "@type": "City",
                  name: "Tema",
                },
                {
                  "@type": "City",
                  name: "Kumasi",
                },
                {
                  "@type": "City",
                  name: "Takoradi",
                },
                {
                  "@type": "Country",
                  name: "Ghana",
                },
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Scaffolding Rental",
                    description: "High-quality Kwikstage, Cuplock, and Tube & Fitting scaffolding systems for rent",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Formwork Solutions",
                    description: "Professional column, wall, and slab formwork systems",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Equipment Sales",
                    description: "Scaffolding boards, couplers, props, and beams for sale",
                  },
                },
              ],
              foundingDate: "2008",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "15+",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "50",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <TawkChat />
      </body>
    </html>
  );
}