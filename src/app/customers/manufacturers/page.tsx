import { Metadata } from 'next';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import ServerStatsSection from '@/components/ServerStatsSection';
import { Factory, Award } from 'lucide-react';
import ManufacturerCard from '@/components/ManufacturerCard';
import { manufacturers, manufacturerStats, pageContent } from '@/lib/manufacturersData';

export const metadata: Metadata = {
  title: 'Compatible Dryer Manufacturers | Dryer Master Technology Partners',
  description: 'Discover grain dryer manufacturers compatible with Dryer Master technology. Browse 12+ trusted partners including Mathews Company, NECO, GSI, Chief Agri, and more.',
  keywords: [
    'grain dryer manufacturers',
    'dryer master compatible',
    'grain drying equipment',
    'mixed flow dryers',
    'tower dryers',
    'commercial grain dryers',
    'farm grain dryers',
    'Mathews Company',
    'NECO dryers',
    'GSI grain systems',
    'Chief Agri',
    'grain handler',
    'superior grain equipment'
  ],
  openGraph: {
    title: 'Compatible Dryer Manufacturers | Dryer Master Technology Partners',
    description: 'Discover grain dryer manufacturers compatible with Dryer Master technology. Browse 12+ trusted partners worldwide.',
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
    canonical: '/customers/manufacturers'
  }
};

export default function ManufacturersPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Compatible Dryer Manufacturers",
    "description": "Grain dryer manufacturers compatible with Dryer Master technology",
    "url": "https://dryermaster.com/customers/manufacturers",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": manufacturers.length,
      "itemListElement": manufacturers.map((manufacturer, index) => ({
        "@type": "Organization",
        "position": index + 1,
        "name": manufacturer.name,
        "url": manufacturer.website,
        "description": manufacturer.description,
        "foundingDate": manufacturer.established,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": manufacturer.location
        },
        "specialty": manufacturer.specialties,
        "category": manufacturer.category
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dryermaster.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Customers",
          "item": "https://dryermaster.com/customers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Manufacturers",
          "item": "https://dryermaster.com/customers/manufacturers"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen py-8">
        {/* Hero Section */}
        <header className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto mb-12">
          <GlobalHeroCard>
            <GlobalHeroCardBadge icon={<Factory size={16} />}>
              {pageContent.hero.badge}
            </GlobalHeroCardBadge>
            <GlobalHeroCardTitle>
              <h1>{pageContent.hero.title}</h1>
            </GlobalHeroCardTitle>
            <GlobalHeroCardDescription>
              {pageContent.hero.description}
            </GlobalHeroCardDescription>
          </GlobalHeroCard>
        </header>

        {/* Stats Section */}
        <ServerStatsSection stats={manufacturerStats} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

          {/* All Manufacturers */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Compatible Dryer Manufacturers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All grain dryer manufacturers supported by Dryer Master technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr" role="list" aria-label="Manufacturer Directory">
              {manufacturers.map((manufacturer) => (
                <div key={manufacturer.id} role="listitem">
                  <ManufacturerCard 
                    manufacturer={manufacturer}
                    featured={false}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {pageContent.sections.cta.title}
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              {pageContent.sections.cta.description}
            </p>
            <nav className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Contact Options">
              {pageContent.sections.cta.buttons.map((button, index) => (
                <a 
                  key={index}
                  href={button.href} 
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 ${
                    button.primary 
                      ? 'bg-white text-primary hover:bg-gray-100' 
                      : 'border-2 border-white text-white hover:bg-white hover:text-primary'
                  }`}
                  aria-label={button.text}
                >
                  {button.text}
                </a>
              ))}
            </nav>
          </section>
        </div>
      </main>
    </>
  );
}