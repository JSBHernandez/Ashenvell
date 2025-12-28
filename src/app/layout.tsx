import type { Metadata } from "next";
import { Exo_2, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { DynamicNavbar, DynamicFooter } from "./components/LayoutComponents";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import LanguageSwitcher from "./components/LanguageSwitcher";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-exo2",
  display: 'swap',
  preload: true,
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: "--font-roboto-mono",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Ashenvell | Innovación y Desarrollo Digital",
  description: "Ashenvell - ¿Escalar tecnológicamente? Servicios de desarrollo web, móvil, inteligencia artificial e IA.",
  keywords: "desarrollo web, desarrollo móvil, Next.js, TypeScript, Tailwind CSS, Ashenvell, software, tecnología, portafolio",
  icons: {
    icon: [
      { url: '/alogo.png' },
      { url: '/alogo.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/alogo.png',
    apple: '/alogo.png',
  },
  alternates: {
    canonical: 'https://ashenvell.com',
    languages: {
      'es': 'https://ashenvell.com',
      'en': 'https://ashenvell.com/en',
    },
  },
  openGraph: {
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${exo2.variable} ${robotoMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-brand-dark text-brand-light-text antialiased selection:bg-brand-blue selection:text-white">
        <div className="flex flex-col min-h-screen">
          <DynamicNavbar />
          <main className="flex-grow">
            {children}
          </main>
          <DynamicFooter />
        </div>
        <LanguageSwitcher />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}