import { notFound } from 'next/navigation';
import { GlobalHeroCard, GlobalHeroCardBadge, GlobalHeroCardTitle, GlobalHeroCardDescription } from '@/components/GlobalHeroCard';
import { customerTestimonials } from '@/lib/customerExperiencesData';
import { ArrowLeft, MapPin, Calendar, Wheat, Star, Settings, Smartphone, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CustomerImageGallery from '@/components/CustomerImageGallery';
import CustomerAvatar from '@/components/CustomerAvatar';

interface CustomerDetailPageProps {
  params: {
    slug: string;
  };
}

export default function CustomerDetailPage({ params }: CustomerDetailPageProps) {
  const customer = customerTestimonials.find(c => c.slug === params.slug);

  if (!customer) {
    notFound();
  }

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto mb-12">
        <GlobalHeroCard>
          <GlobalHeroCardBadge icon={<Star size={16} />}>
            Customer Story
          </GlobalHeroCardBadge>
          <GlobalHeroCardTitle>
            {customer.name} - {customer.location}
          </GlobalHeroCardTitle>
          <GlobalHeroCardDescription>
            {customer.keyBenefit || `Customer since ${customer.since}`} • {customer.volume} annually
          </GlobalHeroCardDescription>
        </GlobalHeroCard>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Back Link */}
        <Link 
          href="/customers/experiences" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Customer Experiences</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Customer Profile Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Customer Avatar */}
                <div className="md:col-span-1">
                  <div className="h-48 md:h-full rounded-xl flex items-center justify-center">
                    <CustomerAvatar 
                      name={customer.name} 
                      className="w-32 h-32 md:w-40 md:h-40 text-2xl md:text-3xl"
                    />
                  </div>
                </div>
                
                {/* Customer Info */}
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-lg text-gray-600">{customer.location}</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">{customer.name}</h1>
                  <p className="text-lg text-primary font-medium mb-4">{customer.keyBenefit}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                      <Calendar size={14} />
                      Customer since {customer.since}
                    </span>
                    {customer.usesMobile && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                        <Smartphone size={14} />
                        DM Mobile User
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                <blockquote className="text-xl text-gray-700 leading-relaxed italic pl-8 pr-8">
                  {customer.quote}
                </blockquote>
                <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20 font-serif">"</div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <cite className="text-lg font-semibold text-gray-900">
                  — {customer.name}, {customer.location}
                </cite>
              </div>
            </div>

            {/* Detailed Q&A Section */}
            {customer.detailedQA && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  In-Depth Interview
                </h2>
                <div className="space-y-6">
                  {customer.detailedQA.questions.map((qa, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Q: {qa.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        A: {qa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Installation Gallery */}
            {customer.installationImages && customer.installationImages.length > 0 && (
              <CustomerImageGallery 
                images={customer.installationImages} 
                customerName={customer.name}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-gray-600">Customer Since</div>
                    <div className="font-semibold text-gray-900">{customer.since}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Wheat className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-sm text-gray-600">Annual Volume</div>
                    <div className="font-semibold text-gray-900">{customer.volume}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-gray-600">Crops</div>
                    <div className="font-semibold text-gray-900">{customer.crops}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Equipment Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Equipment Setup</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Dryer Master Equipment</div>
                  <div className="font-semibold text-gray-900">{customer.equipment}</div>
                </div>
                {customer.dryer && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dryer Brand</div>
                    <div className="font-semibold text-gray-900">{customer.dryer}</div>
                  </div>
                )}
                {customer.dryerModel && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Dryer Model</div>
                    <div className="font-semibold text-gray-900">{customer.dryerModel}</div>
                  </div>
                )}
                {customer.calibrationFrequency && (
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Calibration Frequency</div>
                    <div className="font-semibold text-gray-900">{customer.calibrationFrequency}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info */}
            {(customer.trainingTime || customer.surprise) && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Details</h3>
                <div className="space-y-4">
                  {customer.trainingTime && (
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Training Time</div>
                      <div className="font-semibold text-gray-900">{customer.trainingTime}</div>
                    </div>
                  )}
                  {customer.surprise && (
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Biggest Surprise</div>
                      <div className="font-semibold text-gray-900">{customer.surprise}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* DM Mobile Badge */}
            {customer.usesMobile && (
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-green-800">DM Mobile User</h3>
                </div>
                <p className="text-sm text-green-700">
                  This customer uses DM Mobile for remote monitoring and control of their grain drying operations.
                </p>
              </div>
            )}

            {/* Years of Experience */}
            {customer.yearsPecialist && (
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-primary-800">Experienced User</h3>
                </div>
                <p className="text-sm text-primary-700">
                  {customer.yearsPecialist}+ years of experience with Dryer Master systems.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Customers - Scrollable */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Customer Stories
          </h2>
          <div className="relative">
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4" style={{width: 'max-content'}}>
                {customerTestimonials
                  .filter(c => c.id !== customer.id)
                  .map((relatedCustomer) => (
                    <Link
                      key={relatedCustomer.id}
                      href={`/customers/experiences/${relatedCustomer.slug}`}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group flex-shrink-0 w-80"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <CustomerAvatar 
                          name={relatedCustomer.name} 
                          className="w-12 h-12 text-sm flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">{relatedCustomer.name}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 mb-2">
                            <MapPin size={14} className="text-primary flex-shrink-0" />
                            <span className="text-sm truncate">{relatedCustomer.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                        "{relatedCustomer.quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <div>Since {relatedCustomer.since}</div>
                          <div className="text-primary font-medium">{relatedCustomer.keyBenefit}</div>
                        </div>
                        <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
              ← Scroll to see all customer stories →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}