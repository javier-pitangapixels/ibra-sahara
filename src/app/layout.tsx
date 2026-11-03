import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Cairo } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ibra-sahara.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ibra Sahara - Douz Desert Tours & Guide | Sahara Expeditions Tunisia',
  description:
    'Private, flexible, and custom Sahara desert tours in Douz, Tunisia led by local guide Ibra. Overnight camel treks, quad biking, and 4x4 expeditions to Ksar Ghilane.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Ibra Sahara - Douz Desert Tours & Guide',
    description:
      'Experience the Real Sahara with Ibra—Your Local Douz Guide. Overnight camel treks, Grand Erg Oriental quad sessions & Ksar Ghilane 4x4 expeditions.',
    url: siteUrl,
    siteName: 'Ibra Sahara',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ibra Sahara - Douz Desert Guide & Custom Expeditions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibra Sahara - Douz Desert Tours & Guide',
    description:
      'Private, flexible, and custom Sahara desert tours in Douz, Tunisia led by local guide Ibra.',
    images: ['/og-image.jpg'],
  },
};

const travelAgencyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Ibra Sahara - Douz Desert Tours & Guide',
  description:
    'Private, flexible, and custom Sahara desert tours in Douz, Tunisia led by local guide Ibra. Overnight camel treks, quad biking, and 4x4 expeditions to Ksar Ghilane.',
  telephone: '+21621601205',
  url: 'https://ibra-sahara.vercel.app',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Douz',
    addressRegion: 'Kebili',
    addressCountry: 'TN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.4663,
    longitude: 9.0203,
  },
  knowsLanguage: ['en', 'fr', 'ar'],
  currenciesAccepted: 'TND, EUR, USD',
  priceRange: '€55 - €210',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfair.variable} ${jakarta.variable} ${cairo.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelAgencyJsonLd),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
