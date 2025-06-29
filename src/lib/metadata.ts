import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/header-logo.png'
}: PageMetadata): Metadata {
  const baseKeywords = [
    'moisture monitoring',
    'grain dryer',
    'agriculture',
    'farming',
    'dryer master',
    'agricultural technology'
  ];

  const allKeywords = [...baseKeywords, ...keywords];
  const fullTitle = `${title} | Dryer Master`;
  const url = canonical ? `https://www.dryermaster.com${canonical}` : undefined;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Dryer Master',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  };
}