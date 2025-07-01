import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import { CheckCircle, Target, Zap, ArrowLeft, Settings } from 'lucide-react';
import { applicationExamples } from '@/lib/applicationExamplesData';
import Image from 'next/image';
import Link from 'next/link';

interface ApplicationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return applicationExamples.map((application) => ({
    slug: application.slug,
  }));
}

export async function generateMetadata({ params }: ApplicationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const application = applicationExamples.find(app => app.slug === slug);
  
  if (!application) {
    return {
      title: 'Application Not Found',
    };
  }

  return {
    title: `${application.title} | Dryer Master Application Example`,
    description: application.summary,
    keywords: [
      application.title.toLowerCase(),
      'dryer master application',
      'moisture control',
      'real-time monitoring',
      ...application.keyFeatures.map(f => f.toLowerCase()),
      application.category.replace('-', ' ')
    ],
    openGraph: {
      title: `${application.title} | Dryer Master Application Example`,
      description: application.summary,
      type: 'article',
      siteName: 'Dryer Master',
    },
    alternates: {
      canonical: `/customers/applications/${slug}`
    }
  };
}

export default async function ApplicationDetailPage({ params }: ApplicationDetailPageProps) {
  const { slug } = await params;
  const application = applicationExamples.find(app => app.slug === slug);

  if (!application) {
    notFound();
  }

  const IconComponent = application.icon;
  
  const categoryColors = {
    'grain-drying': 'from-amber-50 to-amber-100 border-amber-200 text-amber-700',
    'food-processing': 'from-green-50 to-green-100 border-green-200 text-green-700',
    'industrial': 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
    'monitoring': 'from-purple-50 to-purple-100 border-purple-200 text-purple-700'
  };

  const categoryBadge = categoryColors[application.category] || categoryColors['monitoring'];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": application.title,
    "description": application.summary,
    "image": `https://dryermaster.com${application.image}`,
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "author": {
      "@type": "Organization",
      "name": "Dryer Master"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dryer Master",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dryermaster.com/logo.png"
      }
    },
    "applicationCategory": application.category,
    "applicationSuite": "Dryer Master Moisture Control Systems"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen py-8">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8" aria-label="Breadcrumb">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/customers/applications" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
              <ArrowLeft size={16} />
              <span>Back to All Applications</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{application.title}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto mb-12">
          <GlobalHeroCard>
            <GlobalHeroCardBadge icon={<IconComponent size={16} />}>
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${categoryBadge}`}>
                {application.category.replace('-', ' ')}
              </span>
            </GlobalHeroCardBadge>
            <GlobalHeroCardTitle>
              {application.title}
            </GlobalHeroCardTitle>
            <GlobalHeroCardDescription>
              {application.summary}
            </GlobalHeroCardDescription>
          </GlobalHeroCard>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Application Image */}
              <section className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={application.image}
                  alt={application.title}
                  fill
                  className="object-cover"
                  priority
                />
              </section>

              {/* Description */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {application.description}
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-primary" size={24} />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {application.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Target className="text-green-600" size={24} />
                  Key Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {application.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                      <Target size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Technical Details */}
              {application.technicalDetails && (
                <section className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="text-blue-600" size={20} />
                    Technical Details
                  </h3>
                  <div className="space-y-4">
                    {application.technicalDetails.system && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">System</h4>
                        <p className="text-gray-700 text-sm">{application.technicalDetails.system}</p>
                      </div>
                    )}
                    {application.technicalDetails.sensors && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Sensors</h4>
                        <p className="text-gray-700 text-sm">{application.technicalDetails.sensors}</p>
                      </div>
                    )}
                    {application.technicalDetails.integration && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Integration</h4>
                        <p className="text-gray-700 text-sm">{application.technicalDetails.integration}</p>
                      </div>
                    )}
                    {application.technicalDetails.products && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Supported Products</h4>
                        <div className="flex flex-wrap gap-2">
                          {application.technicalDetails.products.map((product, index) => (
                            <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Call to Action */}
              <section className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">Interested in This Solution?</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Contact our engineering team to discuss how this application can be customized for your specific requirements.
                </p>
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="block w-full bg-white text-primary text-center py-3 px-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Engineering
                  </a>
                  <a
                    href="/products"
                    className="block w-full border-2 border-white text-white text-center py-3 px-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors"
                  >
                    View Products
                  </a>
                </div>
              </section>

              {/* Related Applications */}
              <section className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Settings size={20} />
                  Related Applications
                </h3>
                <div className="space-y-3">
                  {applicationExamples
                    .filter(app => app.category === application.category && app.id !== application.id)
                    .slice(0, 3)
                    .map((relatedApp) => (
                      <Link
                        key={relatedApp.id}
                        href={`/customers/applications/${relatedApp.slug}`}
                        className="block p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors group"
                      >
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm mb-1">
                          {relatedApp.title}
                        </h4>
                        <p className="text-gray-600 text-xs line-clamp-2">{relatedApp.summary}</p>
                      </Link>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}