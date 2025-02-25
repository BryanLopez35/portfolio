import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";

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
      { url: "/favicon.ico" }, // Favicon por defecto
      { url: "/favicon-dark.ico", media: "(prefers-color-scheme: dark)" }, // Favicon para modo oscuro
    ],
  },
  other: {
    "theme-color": "rgb(227, 230, 245)", // Color inicial (modo claro)
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
