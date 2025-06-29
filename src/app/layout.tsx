import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dryermaster.com'),
  title: {
    template: '%s | Dryer Master',
    default: 'Dryer Master - Real-Time Moisture Monitoring Solutions for Agriculture'
  },
  description: 'Leading provider of real-time moisture monitoring solutions for grain dryers and agricultural applications. Advanced sensors, controllers, and mobile monitoring systems.',
  keywords: ['moisture monitoring', 'grain dryer', 'agriculture', 'farming', 'moisture sensors', 'dryer controller', 'real-time monitoring', 'agricultural technology'],
  authors: [{ name: 'Dryer Master' }],
  creator: 'Dryer Master',
  publisher: 'Dryer Master',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dryermaster.com',
    siteName: 'Dryer Master',
    title: 'Dryer Master - Real-Time Moisture Monitoring Solutions',
    description: 'Leading provider of real-time moisture monitoring solutions for grain dryers and agricultural applications.',
    images: [
      {
        url: '/header-logo.png',
        width: 1200,
        height: 630,
        alt: 'Dryer Master - Moisture Monitoring Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dryer Master - Real-Time Moisture Monitoring Solutions',
    description: 'Leading provider of real-time moisture monitoring solutions for grain dryers and agricultural applications.',
    images: ['/header-logo.png'],
    creator: '@dryermaster',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Agricultural Technology',
  icons: {
    icon: '/header-logo.png',
    shortcut: '/header-logo.png',
    apple: '/header-logo.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Analytics />
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
      </body>
    </html>
  );
}
