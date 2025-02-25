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
    "Experto en desarrollo web y software en Tijuana. Diseño sitios web y apps para empresas. Contáctame para soluciones digitales a la medida.",
  keywords: [
    "desarrollador web",
    "desarrollador software",
    "tijuana",
    "desarrollador freelance",
    "sitios web",
    "apps",
  ],
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
      { url: "public/favicon.ico" },
      { url: "public/favicon-dark.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
  other: {
    "theme-color": "rgb(227, 230, 245)", // Color inicial (modo claro)
  },
  // Open Graph Meta Tags
  openGraph: {
    title: "Bryan Lopez | Desarrollador Web y Software en Tijuana",
    description:
      "Experto en desarrollo web y software en Tijuana. Diseño sitios web y apps para empresas. Contáctame para soluciones digitales a la medida.",
    url: "https://bryancode.dev/", // URL canónica
    siteName: "BryanCode",
    images: [
      {
        url: "https://bryancode.dev/path/to/your-image.jpg", // Cambia esto con una imagen representativa
        width: 1200,
        height: 630,
        alt: "Bryan Lopez | Desarrollador Web y Software",
      },
    ],
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image", // Usa una imagen grande para la vista previa
    title: "Bryan Lopez | Desarrollador Web y Software en Tijuana",
    description:
      "Experto en desarrollo web y software en Tijuana. Diseño sitios web y apps para empresas. Contáctame para soluciones digitales a la medida.",
    images: "/favicon-96x96.png", // Cambia esto con la URL de tu imagen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
