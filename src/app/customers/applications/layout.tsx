import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Application Examples | Dryer Master Real-Time Moisture Control Solutions',
  description: 'Discover Dryer Master application examples across grain drying, food processing, and industrial operations. See how real-time moisture monitoring delivers proven results.',
  keywords: [
    'dryer master applications',
    'moisture control examples',
    'grain drying applications',
    'food processing moisture monitoring',
    'industrial moisture control',
    'real-time moisture sensing',
    'DM510 applications',
    'coffee quenching control',
    'ethanol facility monitoring',
    'pet food moisture control',
    'rice paddy drying',
    'DDGS monitoring',
    'harsh environment control'
  ],
  openGraph: {
    title: 'Application Examples | Dryer Master Moisture Control Solutions',
    description: 'Explore real-world applications of Dryer Master technology across diverse industries. From grain drying to food processing, see proven results.',
    type: 'website',
    siteName: 'Dryer Master',
  },
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
  alternates: {
    canonical: '/customers/applications'
  }
};

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}