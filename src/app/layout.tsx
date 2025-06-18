import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan Lopez | Desarrollador Web y Software en Tijuana",
  description:
    "Portafolio profesional de Bryan Lopez, desarrollador web y software en Tijuana. Especialista en soluciones digitales, sitios web, apps móviles, optimización SEO y desarrollo a medida para empresas y emprendedores.",
  keywords:
    "desarrollador web, desarrollador software, tijuana, desarrollador freelance, sitios web, apps, desarrollo móvil, soluciones digitales, programación, software a medida, SEO, optimización web, portafolio, react, next.js, javascript, typescript, node.js, wordpress, laravel, consultoría tecnológica, desarrollo backend, desarrollo frontend, UX, UI, diseño web, bryan lopez, bryancode, ingeniero software, proyectos web, consultor digital",
  authors: [
    { name: "Bryan Lopez", url: "https://bryancode.dev/" }
  ],
  creator: "Bryan Lopez",
  publisher: "Bryan Lopez",
  applicationName: "BryanCode Portfolio",
  category: "technology",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://bryancode.dev"),
  alternates: {
    canonical: "https://bryancode.dev/",
    languages: {
      "es-MX": "https://bryancode.dev/",
      "en-US": "https://bryancode.dev/en",
    },
  },
  openGraph: {
    title: "Bryan Lopez | Desarrollador Web y Software en Tijuana",
    description:
      "Portafolio profesional de Bryan Lopez, desarrollador web y software en Tijuana. Soluciones digitales, sitios web, apps móviles y optimización SEO.",
    url: "https://bryancode.dev/",
    siteName: "BryanCode",
    images: [
      {
        url: "https://bryancode.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bryan Lopez | Desarrollador Web y Software",
      },
      {
        url: "https://bryancode.dev/logo.png",
        width: 512,
        height: 512,
        alt: "BryanCode Logo",
      }
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Lopez | Desarrollador Web y Software en Tijuana",
    description:
      "Portafolio profesional de Bryan Lopez, desarrollador web y software en Tijuana. Soluciones digitales, sitios web, apps móviles y optimización SEO.",
    images: [
      "https://bryancode.dev/og-image.png",
      "https://bryancode.dev/logo.png"
    ]
    // Se elimina creator porque no tienes cuenta de Twitter
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-dark.ico", media: "(prefers-color-scheme: dark)" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" }
    ]
  },
  themeColor: "#e3e6f5",
  appleWebApp: {
    capable: true,
    title: "BryanCode Portfolio",
    statusBarStyle: "default"
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE", // Reemplaza con tu código real de Search Console
    other: {
      bing: "YOUR_BING_VERIFICATION_CODE"
    }
  },
  other: {
    "geo.region": "MX-BCN",
    "geo.placename": "Tijuana",
    "geo.position": "32.5149;-117.0382",
    ICBM: "32.5149, -117.0382",
    "msapplication-TileColor": "#e3e6f5",
    "msapplication-TileImage": "/web-app-manifest-192x192.png"
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://bryancode.dev/" />
        <link rel="alternate" hrefLang="es" href="https://bryancode.dev/" />
        <link rel="alternate" hrefLang="en" href="https://bryancode.dev/en" />
        <meta name="geo.region" content="MX-BCN" />
        <meta name="geo.placename" content="Tijuana" />
        <meta name="geo.position" content="32.5149;-117.0382" />
        <meta name="ICBM" content="32.5149, -117.0382" />
        <meta name="theme-color" content="#e3e6f5" />
        <meta name="application-name" content="BryanCode Portfolio" />
        <meta name="apple-mobile-web-app-title" content="BryanCode Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-TileColor" content="#e3e6f5" />
        <meta name="msapplication-TileImage" content="/web-app-manifest-192x192.png" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="google-site-verification" content="e_ID8VlpQewvB4dMtGzYJq1ensBSo3QvrV0CM3hQ2gM" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="BryanCode" />
        <meta property="og:url" content="https://bryancode.dev/" />
        <meta property="og:image" content="https://bryancode.dev/og-image.png" />
        <meta property="og:image:alt" content="Bryan Lopez | Desarrollador Web y Software" />
        <meta property="og:image" content="https://bryancode.dev/logo.png" />
        <meta property="og:image:alt" content="BryanCode Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bryan Lopez | Desarrollador Web y Software en Tijuana" />
        <meta name="twitter:description" content="Portafolio profesional de Bryan Lopez, desarrollador web y software en Tijuana. Soluciones digitales, sitios web, apps móviles y optimización SEO." />
        <meta name="twitter:image" content="https://bryancode.dev/og-image.png" />
        <meta name="twitter:image" content="https://bryancode.dev/logo.png" />
        {/* Se elimina la línea de twitter:creator */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bryan Lopez",
              image: [
                "https://bryancode.dev/og-image.png",
                "https://bryancode.dev/logo.png"
              ],
              description:
                "Desarrollador web y software en Tijuana. Especialista en soluciones digitales, sitios web y apps para empresas.",
              url: "https://bryancode.dev/",
              email: "hello@bryancode.dev",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tijuana",
                addressRegion: "Baja California",
                postalCode: "22000",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.5149,
                longitude: -117.0382,
              },
              sameAs: [
                "https://github.com/BryanLopez35",
                "https://linkedin.com/in/bryan-lopez-hdz"
              ],
              jobTitle: "Desarrollador Web y Software",
              worksFor: {
                "@type": "Organization",
                name: "BryanCode",
                url: "https://bryancode.dev/",
                logo: "https://bryancode.dev/logo.png"
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "CUT Tijuana",
              },
              knowsAbout: [
                "Desarrollo Web",
                "Desarrollo Móvil",
                "React",
                "Next.js",
                "Node.js",
                "PHP",
                "WordPress",
                "Laravel",
                "TypeScript",
                "JavaScript",
                "SEO",
                "UI/UX",
                "Consultoría tecnológica"
              ],
              inLanguage: ["es", "en"],
              nationality: "Mexican",
              gender: "Male",
              birthPlace: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Tijuana",
                  addressRegion: "Baja California",
                  addressCountry: "MX"
                }
              }
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

